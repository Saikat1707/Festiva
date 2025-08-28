import { mailTransporter, verificationCodeTemplate } from "./mailUtils.js";


export const generateVerificationCode = (length = 6) => {
  const digits = "0123456789";
  let otp = "";
  for (let i = 0; i < length; i++) {
    otp += digits[Math.floor(Math.random() * 10)];
  }
  return otp;
};


export const sendVerificationCode = async (verificationCode,email)=>{
    try {
        const info = await mailTransporter.sendMail({
            from: '"Festiva" <codingsaikat@gmail.com>',
            to: email,
            subject: "Festiva - Verify Your Email",
            text: `Your OTP is ${verificationCode}. It will expire in 10 minutes.`, 
            html: verificationCodeTemplate(verificationCode),
        });
      console.log("Message sent:", info.messageId); 
    } catch (error) {
      console.log(error)
      throw new Error("Error while sending mail"+error.message)
    }
}