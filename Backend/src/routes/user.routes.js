import express from "express"
import { getNotifications, getTicketHistory, getuserDetails, otpVerify, resendOtp, userSignIn, userSignOut, userSignUp } from "../controller/userController.js"
import { middleAuthentication } from "../middleware/authMiddleware.js"

const router = express.Router()

router.post('/signup',userSignUp)
router.post('/verify',middleAuthentication,otpVerify)
router.get('/resendotp',middleAuthentication,resendOtp)
router.post('/signin',userSignIn)
router.get('/signout',userSignOut)

router.get('/profile',middleAuthentication,getuserDetails)
router.get('/ticket/history',middleAuthentication,getTicketHistory)
router.get('/notification',middleAuthentication,getNotifications)

export default router