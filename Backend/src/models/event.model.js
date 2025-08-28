import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  eventTitle: { type: String, required: true },
  eventDescription: { type: String, required: true },
  eventPoster: { type: String, required: true },
  eventDate: { type: Date, required: true },
  ticketDetails: [
    {
      ticketType: String,
      ticketPrice: Number
    }
  ],
  createdBy: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User", 
    required: true 
  },
  attendees: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  tickets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ticket"
    }
  ],
  eventStatus:{
    type:String,
    enum:["pending","accepted","rejected"],
    default:"pending"
  }
}, { timestamps: true }); 

export const Event = mongoose.model("Event", eventSchema);
