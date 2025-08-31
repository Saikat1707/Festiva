import { Ticket } from "../models/ticket.model.js";
import { v4 as uuidv4 } from "uuid";

export const purchaseTicket = async (
  ticketType,price,seatNumber,ticketCount,purchaser,event,purchasedAt) => {
  try {
    const ticketCode = `TICKET-${uuidv4()}`;
    const ticket = await Ticket.create({
      ticketType,price,seatNumber,ticketCount,purchaser,event,purchasedAt,ticketCode
    });
    return ticket;
  } catch (error) {
    console.error("createTicket Error:", error.message);
    throw new Error("Error while creating the ticket DAO");
  }
};

export const getTicketById = async (id) => {
  try {
    const ticket = await Ticket.findById(id).populate("purchaser event");
    if (!ticket) throw new Error("Invalid ticket ID provided");

    return ticket;
  } catch (error) {
    console.error("getTicketById Error:", error.message);
    throw new Error("Error while fetching ticket by ID DAO");
  }
};

export const getTicketByUser = async (userId) => {

  try {
    const tickets = await Ticket.find({ purchaser: userId }).populate("event purchaser");

    if (tickets.length === 0) throw new Error("No tickets purchased yet");

    return tickets;
  } catch (error) {
    console.error("getTicketByUser Error:", error.message);
    throw new Error("Error while fetching tickets for user DAO");
  }
};


export const getTicketsByEvent = async (eventId) => {
  try {
    const tickets = await Ticket.find({ event: eventId }).populate("purchaser");
    return tickets;
  } catch (error) {
    console.error("getTicketsByEvent Error:", error.message);
    throw new Error("Error while fetching tickets for event DAO");
  }
};

export const updateTicket = async (ticketId, updateData) => {
  try {
    const ticket = await Ticket.findByIdAndUpdate(ticketId, updateData, {
      new: true, // return updated ticket
      runValidators: true // ensure schema validation
    });

    if (!ticket) throw new Error("Ticket not found");

    return ticket;
  } catch (error) {
    console.error("updateTicket Error:", error.message);
    throw new Error("Error while updating ticket DAO");
  }
};

export const deleteTicket = async (ticketId) => {
  try {
    const ticket = await Ticket.findByIdAndDelete(ticketId);

    if (!ticket) throw new Error("Ticket not found");

    return ticket;
  } catch (error) {
    console.error("deleteTicket Error:", error.message);
    throw new Error("Error while deleting ticket DAO");
  }
};

export const getAllTickets = async () => {
  try {
    const tickets = await Ticket.find().populate("purchaser event");
    return tickets;
  } catch (error) {
    console.error("getAllTickets Error:", error.message);
    throw new Error("Error while fetching all tickets DAO");
  }
};
