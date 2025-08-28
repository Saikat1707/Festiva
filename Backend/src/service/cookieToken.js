import jwt from "jsonwebtoken"

export const generateToken = async (payload)=>{
    return await jwt.sign({id:payload},process.env.JWT_SECRET,{
        expiresIn:"1d"
    })
}