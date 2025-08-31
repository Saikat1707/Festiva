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

export const getAllEvents = async () => {
  try {
    return await Event.find()
      .populate("createdBy", "userName email")
      .populate("attendees", "userName email")
      .populate("tickets");
  } catch (error) {
    console.error("❌ Error in getAllEvents:", error.message);
    throw new Error("Error while fetching all events");
  }
};

export const deleteEvent = async (eventId) => {
  try {
    const deletedEvent = await Event.findByIdAndDelete(eventId);
    if (!deletedEvent) throw new Error("Event not found");
    return deletedEvent;
  } catch (error) {
    console.error("❌ Error in deleteEvent:", error.message);
    throw new Error("Error while deleting event");
  }
};

export const addAttendee = async (eventId, userId) => {
  try {
    const event = await Event.findByIdAndUpdate(
      eventId,
      { $addToSet: { attendees: userId } }, // avoids duplicates
      { new: true }
    ).populate("attendees", "userName email");

    if (!event) throw new Error("Event not found");
    return event;
  } catch (error) {
    console.error("❌ Error in addAttendee:", error.message);
    throw new Error("Error while adding attendee");
  }
};

export const removeAttendee = async (eventId, userId) => {
  try {
    const event = await Event.findByIdAndUpdate(
      eventId,
      { $pull: { attendees: userId } },
      { new: true }
    ).populate("attendees", "userName email");

    if (!event) throw new Error("Event not found");
    return event;
  } catch (error) {
    console.error("❌ Error in removeAttendee:", error.message);
    throw new Error("Error while removing attendee");
  }
};


export const updateEventStatus = async (eventId, status) => {
  try {
    if (!["pending", "accepted", "rejected"].includes(status)) {
      throw new Error("Invalid status value");
    }

    const event = await Event.findByIdAndUpdate(
      eventId,
      { eventStatus: status },
      { new: true }
    );

    if (!event) throw new Error("Event not found");
    return event;
  } catch (error) {
    console.error("❌ Error in updateEventStatus:", error.message);
    throw new Error("Error while updating event status");
  }
};



export const addTicketToEvent = async (eventId, ticketId) => {
  try {
    const event = await Event.findByIdAndUpdate(
      eventId,
      { $push: { tickets: ticketId } },
      { new: true }
    ).populate("tickets");

    if (!event) throw new Error("Event not found");
    return event;
  } catch (error) {
    console.error("❌ Error in addTicketToEvent:", error.message);
    throw new Error("Error while adding ticket to event");
  }
};



export const getEventByStatus = async (status) => {
  try {
    const events = await Event.find({ eventStatus: status })
      .populate("createdBy", "userName email")
      .populate("attendees", "userName email")
      .populate("tickets");

    return events;
  } catch (error) {
    console.error("Error fetching events by status:", error.message);
    throw new Error("Failed to fetch events by status");
  }
};
