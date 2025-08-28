import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  ticket: { type: mongoose.Schema.Types.ObjectId, ref: "Ticket", required: true },
  amount: { type: Number, required: true },
  paymentMethod: { type: String, enum: ["card", "upi", "wallet"], default: "card" },
  status: { type: String, enum: ["success", "failed", "pending"], default: "pending" },
  paidAt: { type: Date, default: Date.now }
});

export const Payment = mongoose.model("Payment", paymentSchema);
