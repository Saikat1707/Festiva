import { instance } from "../../server.js";
import { Payment } from "../models/payment.model.js";


export const processPaymentDao = async (options)=>{
    try {
        console.log(options)
        const order = await instance.orders.create(options);
        const data = {
            success: true,
            orderId: order.id,
            amount: order.amount,
            currency: order.currency,
            key: process.env.RAZOR_PAY_KEY_ID,
        }
        return data
    } catch (error) {
        console.log(error.message)
        throw new Error("Error in processing the payment")
    }

}

export const makeEntryOfPayment = async (
    user,ticket,amount,currency,paymentMethod,order_id,
    payment_id,bank,wallet,vpa,email,contact
)=>{
    try {
        const paymentEntry = await Payment.create({user,ticket,amount,currency,paymentMethod,order_id,
    payment_id,bank,wallet,vpa,email,contact})
        if(!paymentEntry) throw new Error("Error in payment entry")
        return paymentEntry
    } catch (error) {
        console.log(error.message)
        throw new Error("Error in payment entry")
    }
}