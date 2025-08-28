import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
import QRCode from "qrcode";

const ticketSchema = new mongoose.Schema({
  ticketType: { type: String, required: true },
  price: { type: Number, required: true },
  seatNumber: { type: String },
  ticketCount:{
      type:Number,default:1
  },
  purchaser: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User" 
  },
  event: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Event" 
  },
  purchasedAt: { type: Date, default: Date.now },
  ticketCode: { type: String, unique: true, default: uuidv4 },
  qrCodeImage: { type: String } 
});

ticketSchema.pre("save", async function (next) {
  if (!this.qrCodeImage) {
    try {
      this.qrCodeImage = await QRCode.toDataURL(this.ticketCode);
    } catch (err) {
      return next(err);
    }
  }
  next();
});

export const Ticket = mongoose.model("Ticket", ticketSchema);
