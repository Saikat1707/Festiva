import express from "express"
import { middleAuthentication } from "../middleware/authMiddleware.js"
import { processMyPayment, verifyThePayment } from "../controller/paymentController.js"
const router = express.Router()


router.post('/createOrder',middleAuthentication,processMyPayment)
router.post('/verifyOrder',middleAuthentication,verifyThePayment)


export default router