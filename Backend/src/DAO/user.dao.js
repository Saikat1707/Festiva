import { Notification } from "../models/notification.model.js"
import { Ticket } from "../models/ticket.model.js"
import userModel from "../models/user.model.js"

export const isUserExist = async (email) =>{
    try {
        const user = await userModel.findOne({email:email})
        if(!user) return false

        if(user.isVerified == false){
            await userModel.deleteOne({email:email})
            return false
        }
        return true
    } catch (error) {
        console.log(error.message)
        throw new Error("Error while checking if user Exist : "+error.message)
    }
}

export const signUp = async (userName , email , password , age , otp) =>{
    try {
        const user = await userModel.create({
            userName,
            email,
            password,
            age,
            verificationCode: otp,
            verificationExpiryTime: new Date(Date.now() + 10 * 60 * 1000)
        });
        console.log(user)
        return user
    } catch (error) {
        console.log(error.message)
        throw new Error("Error while creating user "+error.message)
    }
}

export const getTicketDetails = async (id)=>{
    try {
        if(!id) throw new Error("Id not found while fetching ticket")
        return await Ticket.find({ purchaser: id })
        .populate("event")
        .sort({ purchasedAt: -1 });
    } catch (error) {
        console.log(error.message)
        throw new Error("Error while fetching ticket history ")
    }
}

export const getNotificationDetails = async (id)=>{
    try {
        if(!id) throw new Error("Id not found while fetching notifications")
        return await Notification.find({user:id})
    } catch (error) {
        console.log(error.message)
        throw new Error("Error while fetching details")
    }
}

export const signIn = async (email)=>{
    try {
        const user = await userModel.findOne({email:email})
        return user;
    } catch (error) {
        console.log(error)
        throw new Error("Error in sign in DAO ")
    }
}

export const addTicket = async (userId, ticketId) => {
  try {
    if (!ticketId || !userId) {
      throw new Error("Invalid ticket id or user id");
    }

    // Find the user
    const user = await userModel.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }

    // Push ticket to history
    user.ticketHistory.push(ticketId);

    // Save updated user
    await user.save();

    return user;
  } catch (error) {
    console.error("Error adding ticket:", error.message);
    throw new Error("Failed to add ticket");
  }
};