import { createEvent, deleteEvent, getAllEventForTheUser, getAllEvents, getEventByStatus, getEventDetails, updateEvent, updateEventStatus } from "../DAO/event.dao.js"
import { updateTicket } from "../DAO/ticket.dao.js"
import { badResponse, goodResponse } from "../utils/response.js"

export const createEventController = async (req,res)=>{
    try {
        const {eventTitle,eventDescription,eventPoster,eventDate,ticketDetails} = req.body
        if(!eventTitle || !eventDescription || !eventPoster || 
            !eventDate || !ticketDetails) return badResponse(res,400,"All fields are required")

        const user = req.user
        if(!user) return badResponse(res,400,"User is unauthorized")

        const createdEvent = await createEvent(eventTitle,eventDescription,eventPoster,eventDate,ticketDetails,user._id)
        if(!createdEvent) return badResponse(res,400,"Event not created")
            
        if (!user.isHost) {
            user.isHost = true;
            await user.save();
        }
        return goodResponse(res,200,"event created successfully",createdEvent)
        
    } catch (error) {
        console.log("error in create event controller "+error.message)
        return badResponse(res,400,"Error in creating event")
    }
}

export const getEventController = async (req, res) => {
  try {
    const eventId = req.params.id;

    if (!eventId) return badResponse(res, 400, "Event ID is required");

    const event = await getEventDetails(eventId);

    if (!event) return badResponse(res, 404, "Event not found");

    return goodResponse(res, 200, "Successfully fetched the event", event);
  } catch (error) {
    console.error("❌ Error in getEventController:", error.message);
    return badResponse(res, 500, "Internal server error while fetching event");
  }
};


export const updateEventController = async(req,res)=>{
    try {
        const {eventTitle,eventDescription,eventPoster,eventDate,ticketDetails,ticketStatus} = req.body
        const eventId = req.params.id
        if(!eventId) return badResponse(res,400,"Can not get event id")
        if(!eventTitle || !eventDescription || !eventPoster || 
            !eventDate || !ticketDetails) return badResponse(res,400,"All fields are required")

        const updatedEvent = await updateEvent(eventId,eventTitle,eventDescription,eventPoster,eventDate,ticketDetails)
        if(!updatedEvent) return badResponse(res,400,"Event not updated")

        if(ticketStatus) await updateTicket(updatedEvent._id,ticketStatus)
        return goodResponse(res,200,"Sucessfully update the event ",updatedEvent)

    } catch (error) {
        console.log("Error in update event controller "+error.message)
        return badResponse(res,400,"Error in updating the event ")
    }
}

export const getAllEventController = async (req,res)=>{
    try {
        const events = await getAllEvents()
        if(!events) return badResponse(res,400,"No event present in the DataBase")
        return goodResponse(res,200,"Fetched All events successfully",events)
    } catch (error) {
        console.log(error.message)
        return badResponse(res,400,"Error while fetching all events")
    }
}

export const deleteEventController = async (req,res)=>{
    try {
        const eventId = req.params.id
        if(!eventId) return badResponse(res,400,"Invalid event id")
        const deletedEvent = await deleteEvent(eventId)
        if(!deletedEvent) return badResponse(res,400,"No events present in the database")
        return goodResponse(res,200,"delete event successfully",deletedEvent)
    } catch (error) {
        console.log(error.message)
        return badResponse(res,400,"Error while deleting event")
    }
}

export const updateEventStatusController = async (req,res)=>{
    try {
        const eventId = req.params.id
        if(!eventId) return badResponse(res,400,"Invalid event id")
        const {status} = req.body
        const updatedEvent = await updateEventStatus(eventId,status)
        if(!updatedEvent) return badResponse(res,400,"Error while updating status of event")
        return goodResponse(res,200,"Event status updated successfully",updatedEvent)
    } catch (error) {
        console.log(error.message)
        return badResponse(res,400,"Error in updating the status of the event")
    }
}

export const getEventByStatusController = async (req,res)=>{
    try {
        const status = req.params.status
        if(!status) return badResponse(res,400,"Invalid status provided")
        const evenets = await getEventByStatus(status)
        if(!evenets) return badResponse(res,400,"No Evenents found in this status")
        return goodResponse(res,200,"Fetched event successfully",evenets)
    } catch (error) {
        console.log(error.message)
        return badResponse(res,400,"Error while fetching the events")
    }
}

export const getEventsCreatedByUserController = async (req,res)=>{
    try {
        const user = req.user
        if(!user) return badResponse(res,400,"Unauthorized user")
        const events = await getAllEventForTheUser(user._id)
        return goodResponse(res,200,"Fetch all events",events)
    } catch (error) {
        console.log(error.message)
        return badResponse(res,400,"Error while fetching events for the user")
    }
}