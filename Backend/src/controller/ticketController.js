import { addAttendee, addTicketToEvent } from '../DAO/event.dao.js'
import { makeEntryOfPayment } from '../DAO/payment.dao.js';
import { deleteTicket, getAllTickets, getTicketById, getTicketByUser, getTicketsByEvent, purchaseTicket, updateTicket } from '../DAO/ticket.dao.js'
import { addTicket } from '../DAO/user.dao.js'
import {badResponse, goodResponse} from '../utils/response.js'


export const purchaseTicketController = async (req, res) => {
  try {
    const { ticketType, price, seatNumber, ticketCount,amount,currency,paymentMethod,order_id,
    payment_id,bank,wallet,vpa,email,contact} = req.body;
    const purchaser = req.user;
    const { id: eventId } = req.params;

    if (!ticketType || !price || !seatNumber || !ticketCount) {
      return badResponse(res, 400, "All fields are required");
    }
    if (!purchaser || !eventId) {
      return badResponse(res, 400, "Purchaser or event id not found");
    }
    if(!amount || !currency || !paymentMethod || !order_id || 
    !payment_id || !bank || !wallet || !vpa || !email || !contact){
      return badResponse(res,400,"All fields are required")
    }

    // Create ticket
    const ticket = await purchaseTicket(ticketType,price,seatNumber,ticketCount,purchaser,
      eventId,Date.now());

    // make the payment entry 
    const paymentEntry = await makeEntryOfPayment(purchaser._id,ticket._id,amount,currency,paymentMethod,order_id,
    payment_id,bank,wallet,vpa,email,contact)

    // Update user with ticket
    const user = await addTicket(purchaser._id, ticket._id);

    // Update event with attendee and ticket
    await addAttendee(eventId, user._id);
    await addTicketToEvent(eventId, ticket._id);

    return goodResponse(res, 200, "Ticket purchased successfully", {ticket,paymentEntry});
  } catch (error) {
    console.error(error.message);
    return badResponse(res, 500, "Error while purchasing ticket");
  }
};

export const getTicketByIdController = async (req,res) =>{
    try {
        const ticketId = req.params.id
        if(!ticketId) return badResponse(res,400,"Invalid id provided")
        const ticket = await getTicketById(ticketId)
        if(!ticket) return badResponse(res,400,"Ticket not found")
        return goodResponse(res,200,"fetched ticket successfully",ticket)
    } catch (error) {
        console.log(error.message)
        return badResponse(res,400,"Error while fetching ticket by id")
    }
}


export const getTicketsByUserIdController = async (req,res)=>{
    try {
        const user = req.user
        if(!user) return badResponse(res,400,"user is not authenticated")
        const tickets = await getTicketByUser(user._id)
        if(!tickets) return badResponse(res,400,"No ticket found")
        return goodResponse(res,200,"Fetched tickets successfully",tickets)
    } catch (error) {
        console.log(error.message)
        return badResponse(res,400,"Error while fetching tickets for the user")
    }
}

export const getTicketByEventIdController = async (req,res)=>{
    try {
        const eventId = req.params.id
        if(!eventId) return badResponse(res,400,"Invalid id provided")
        const tickets = await getTicketsByEvent(eventId)
        if(!tickets) return badResponse(res,400,"Tickets not found for this event")
        return goodResponse(res,200,"Fetched tickets successfully",tickets)
    } catch (error) {
        console.log(error.message)
        return badResponse(res,400,"Error while fetching tickets")
    }
}

// export const updateTicketController = async (req,res)=>{
//     try {
//         const eventId = req.params.id
//         if(!eventId) return badResponse(res,400,"Invalid ticket id")
//         const {ticketStatus} = req.body
//         const ticket = await updateTicket(eventId,ticketStatus)
//         if(!ticket) return badResponse(res,400,"No ticket found")
//         return goodResponse(res,200,"Ticket updated successfully",ticket)
//     } catch (error) {
//         console.log(error.message)
//         return badResponse(res,400,"Error while updating ticket")
//     }
// }

// export const deleteTicketController = async (req,res)=>{
//     try {
//         const ticketId = req.params.id
//         if(!ticketId) return badResponse(res,400,"Invalid ticket id")
//         const ticket = await deleteTicket(ticketId)
//         if(!ticket) return badResponse(res,400,"Ticket not found")
//         return goodResponse(res,200,"Ticket Deleted successfully",ticket)
//     } catch (error) {
//         console.log(error.message)
//         return badResponse(res,400,"Error while deleting the ticket")
//     }
// }

export const getAllTicketController = async ( req,res)=>{
    try {
        const tickets = await getAllTickets()
        if(!tickets) return badResponse(res,400,"No tickets found")
        return goodResponse(res,200,"Fetched tickets successfully",tickets)
    } catch (error) {
        console.log(error.message)
        return badResponse(res,400,"Error while fetching all the tickets")
    }
}