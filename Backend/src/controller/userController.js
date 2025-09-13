
import { getNotificationDetails, getTicketDetails, isUserExist, signIn, signUp } from "../DAO/user.dao.js";
import userModel from "../models/user.model.js";
import { generateToken } from "../service/cookieToken.js";
import { comparePassword, hashedPassword } from "../service/hashPassword.js";
import { generateVerificationCode, sendVerificationCode } from "../service/sendMail.js";
import { badResponse, goodResponse } from "../utils/response.js";


export const userSignUp = async (req,res)=>{
    try {
        const {userName , email , password , age} = req.body;
        if(!userName || !email || !password || !age){
            return badResponse(res,200,"All Fields are required")
        }
        if(await isUserExist(email) == true) return badResponse(res,400,"User already exist with this email")

        const otp = await generateVerificationCode();

        await sendVerificationCode(otp,email)
        const hashPass = await hashedPassword(password)
        const user = await signUp(userName,email,hashPass,age,otp);

        const token = await generateToken(user._id)
        console.log(token)
        if(!token) return badResponse(res,400,"Unable to generate token")
        res.cookie("token",token)
        
        return goodResponse(res,200,"Verification code send successfully",user)

    } catch (error) {
      console.log("Error in user sign up controller "+error.message)
        return badResponse(res,400,"Error in user sighn up ")
    }
}

export const otpVerify = async (req, res) => {
  try {
    const { otp } = req.body;
    const user = req.user;

    if (!user) {
      return badResponse(res, 404, "User not found");
    }
    const expiryDuration = 10 * 60 * 1000;
    if (Date.now() - user.verificationExpiryTime.getTime() > expiryDuration) {
      console.log(user.verificationExpiryTime.getTime() - Date.now());
      await userModel.deleteOne({ _id: user._id });
      res.cookie("token","")
      return badResponse(res, 400, "OTP has expired. Please register again.");
    }

    if (user.verificationCode === otp) {
      user.isVerified = true;
      user.verificationCode = undefined;
      user.verificationExpiryTime = undefined;
      await user.save();

      return goodResponse(res, 200, "User verified successfully", user);
    }

    return badResponse(res, 400, "Invalid OTP or user is already verified");
  } catch (error) {
    console.log("error in otp verification controller "+error.message)
    return badResponse(res, 500, "Error while validating OTP: " + error.message);
  }
}

export const resendOtp = async (req, res) => {
  try {
    const user = req.user;
    if (!user) return badResponse(res, 400, "User not found");
    if(user.isVerified == true) return badResponse(res,400,"User Already verified")
    const otp = await generateVerificationCode();

    await sendVerificationCode(otp,user.email);

    user.verificationCode = otp;
    user.verificationExpiryTime = new Date(Date.now() + 10 * 60 * 1000);
    await user.save();

    return goodResponse(res, 200, "OTP resent successfully", {
      expiresAt: user.verificationExpiryTime
    });
  } catch (error) {
    console.error("Resend OTP error:", error);
    return badResponse(res, 400, "Error in resending OTP");
  }
};

export const userSignIn = async (req, res)=>{
  try {
    const {email , password} = req.body
    const isExist = await isUserExist(email)
    if(!isExist){
      return badResponse(res,400,"Invalid log in credentials")
    }
    const user = await signIn(email)
    const isValid = await comparePassword(password,user.password)
    if(!isValid) return badResponse(res,400,"Invalid log in credentials")

    const token = await generateToken(user._id)
    if(!token) return badResponse(res,400,"Unable to generate token")
    res.cookie("token",token)

    return goodResponse(res,200,"Fetched Successfully",user)
    
  } catch (error) {
    console.log(error.message)
    return badResponse(res,400,"Error while Signing in ")
  }
}

export const userSignOut = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).json({ message: "Signed out successfully" });
  } catch (error) {
    console.error("Signout Error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }

};


export const getuserDetails = async (req,res)=>{
  try {
    const user = req.user
    if(!user) return badResponse(res,400,"User is not Logged in , please login to get details ")
    return goodResponse(res,200,"Sucessfully get the user",user)
  } catch (error) {
    console.log("erro in user details controller "+error.message)
    return badResponse(res,400,"Error while fetching the user")
  }
}

export const getTicketHistory = async (req,res)=>{
  try {
    const user = req.user
    if(!user) return badResponse(res,400,"invalid user")
    const ticket = await getTicketDetails(user._id)
    if(ticket.length == 0) return badResponse(res,400,"User does not have any ticket")
    return goodResponse(res,200,"Fetched ticked successfully",ticket)
  } catch (error) {
    console.log("error in ticket history controller "+error.message)
    return badResponse(res,400,error.message)
  }
}

export const getNotifications = async (req,res)=>{
  try {
      const user = req.user
      if(!user) return badResponse(res,400,"invalid user")
      const notifications = await getNotificationDetails(user._id)
      if(notifications.length == 0) return badResponse(res,400,"Does not have any notification")
      return goodResponse(res,200,"Fetched successfully",notifications)
  } catch (error) {
    console.log("Error in notification controller "+error.message)
    return badResponse(res,400,error.message)
  }
}
