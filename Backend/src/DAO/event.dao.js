import { Event } from "../models/event.model.js"


export const createEvent = async (eventTitle,eventDescription,eventPoster,eventDate,ticketDetails
    ,createdBy
)=>{
    try {
        const eventCreated = await Event.create({
            eventTitle,eventDescription,eventPoster,eventDate,ticketDetails,createdBy
        })
        return eventCreated
    } catch (error) {
        console.log(error.message)
        throw new Error("Error while creating the event")
    }
}

export const getEventDetails = async (eventId) => {
  try {
    const event = await Event.findById(eventId)
      .populate("createdBy", "userName email") 
      .populate("attendees", "userName email")
      .populate("tickets");

    if (!event) {
      throw new Error("Event not found");
    }

    return event;
  } catch (error) {
    console.error("❌ Error in getEventDetails:", error.message);
    throw new Error("Error while fetching event");
  }
};


export const updateEvent = async (
  eventId,
  eventTitle,
  eventDescription,
  eventPoster,
  eventDate,
  ticketDetails
) => {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      eventId,
      {
        eventTitle,
        eventDescription,
        eventPoster,
        eventDate,
        ticketDetails
      },
      { new: true, runValidators: true }
    );

    if (!updatedEvent) {
      throw new Error("Event not found");
    }

    return updatedEvent;
  } catch (error) {
    console.error("❌ Error in updateEvent:", error.message);
    throw new Error("Error while updating the event");
  }
};
