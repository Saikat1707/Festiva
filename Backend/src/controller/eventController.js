import { createEvent, getEventDetails, updateEvent } from "../DAO/event.dao.js"
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
        const {eventTitle,eventDescription,eventPoster,eventDate,ticketDetails} = req.body
        const eventId = req.params.id
        if(!eventId) return badResponse(res,400,"Can not get event id")
        if(!eventTitle || !eventDescription || !eventPoster || 
            !eventDate || !ticketDetails) return badResponse(res,400,"All fields are required")

        const updatedEvent = await updateEvent(eventId,eventTitle,eventDescription,eventPoster,eventDate,ticketDetails)
        if(!updatedEvent) return badResponse(res,400,"Event updated")
        return goodResponse(res,200,"Sucessfully update the event ",updatedEvent)

    } catch (error) {
        console.log("Error in update event controller "+error.message)
        return badResponse(res,400,"Error in updating the event ")
    }
}