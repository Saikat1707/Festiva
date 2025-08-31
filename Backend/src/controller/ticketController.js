import { addAttendee, addTicketToEvent } from '../DAO/event.dao'
import { purchaseTicket } from '../DAO/ticket.dao'
import { addTicket } from '../DAO/user.dao.js'
import {badResponse, goodResponse} from '../utils/response.js'


export const purchaseTicketController = async (req, res) => {
  try {
    const { ticketType, price, seatNumber, ticketCount } = req.body;
    const purchaser = req.user;
    const { id: eventId } = req.params;

    if (!ticketType || !price || !seatNumber || !ticketCount) {
      return badResponse(res, 400, "All fields are required");
    }
    if (!purchaser || !eventId) {
      return badResponse(res, 400, "Purchaser or event id not found");
    }

    // Create ticket
    const ticket = await purchaseTicket(ticketType,price,seatNumber,ticketCount,purchaser,
      eventId,Date.now());

    // Update user with ticket
    const user = await addTicket(purchaser._id, ticket._id);

    // Update event with attendee and ticket
    await addAttendee(eventId, user._id);
    await addTicketToEvent(eventId, ticket._id);

    return goodResponse(res, 200, "Ticket purchased successfully", ticket);
  } catch (error) {
    console.error(error.message);
    return badResponse(res, 500, "Error while purchasing ticket");
  }
};


