import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  age:{
    type:Number,
    required:true
  },
  isHost:{
    type:Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  ticketHistory: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ticket"
    }
  ],
  verificationCode: {
    type: String
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  verificationExpiryTime: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("User", userSchema);
