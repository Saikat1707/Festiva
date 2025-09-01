import { instance } from "../../server.js";
import { processPaymentDao } from "../DAO/payment.dao.js";
import { badResponse, goodResponse } from "../utils/response.js";
import crypto from "crypto"

export const processMyPayment = async (req,res)=>{
    try {
        const amount = req.body
        const options = {
            amount: amount * 100,
            currency: "INR",
            receipt: `receipt_${Date.now()}`,
        };
        const orderData = await processPaymentDao(options)
        if(!orderData) return badResponse(res,400,"payment Error order not generated")
        return goodResponse(res,200,"order placed",orderData)
    } catch (error) {
        console.log(error.message)
        return badResponse(res,400,"Error in processing payment")
    }
}

export const verifyThePayment = async (req,res)=>{
    try {
        const {razorpay_order_id,razorpay_payment_id,razorpay_signature} = req.body;
        const generatedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
        .update(razorpay_order_id + "|" + razorpay_payment_id)
        .digest("hex");

        if(generatedSignature !== razorpay_signature){
            return badResponse(res,400,"Payment Failed")
        }
         const paymentDetails = await instance.payments.fetch(razorpay_payment_id);
        const { method, bank, wallet, vpa, email, contact, status } = paymentDetails;
        return goodResponse(res, 200, "Payment success", {
            orderId: razorpay_order_id,
            paymentId: razorpay_payment_id,
            method,bank,wallet,vpa,email,contact, status,
        });
    } catch (error) {
        console.log(error.message)
        return badResponse(res,400,"Error in payment")
    }
}
