import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    user: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "User", 
      required: true 
    },
    ticket: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "Ticket" 
    },
    amount: { 
      type: Number, 
      required: true 
    },
    currency: { 
      type: String, 
      default: "INR" 
    },
    paymentMethod: { 
      type: String, 
      enum: ["card", "upi", "wallet", "netbanking"], 
      default: "card" 
    },
    order_id: { type: String, required: true },
    payment_id: { type: String },
    bank: { type: String },     
    wallet: { type: String },   
    vpa: { type: String },      
    email: { type: String },    
    contact: { type: String }
  },
  { timestamps: true }
);

export const Payment = mongoose.model("Payment", paymentSchema);
