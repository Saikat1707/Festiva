import userModel from "../models/user.model.js"
import { badResponse } from "../utils/response.js"
import jwt from "jsonwebtoken"
export const middleAuthentication = async (req,res,next)=>{
    try {
        const token = req.cookies.token
        console.log("token is here = ",token)
        if(!token) return badResponse(res,400,"Missing Cookies")
        const decoded = await jwt.verify(token,process.env.JWT_SECRET)

        const user = await userModel.findById(decoded.id)
        if(!user) return badResponse(res,400,"Invalid User")
        req.user = user
        next()
    } catch (error) {
        return badResponse(res,400,"Falied in cookie authentication")
    }
}