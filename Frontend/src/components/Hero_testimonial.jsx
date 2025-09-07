import React from 'react'
import '../CSS/componentsCSS/HeroTestimonial.css'
const Hero_testimonial = () => {
      const testimonials = [
    {
      name: "Saikat Bera",
      role: "Event Organizer",
      image: "https://i.pinimg.com/736x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg",
      review: "This platform made organizing my event seamless. Everything from bookings to attendee management worked like magic!"
    },
    {
      name: "Ananya Gupta",
      role: "Event Enthusiast",
      image: "https://i.pinimg.com/736x/d6/7a/4a/d67a4aa9749dba2a18f4f8797f230c71.jpg",
      review: "I discovered amazing events in my city that I wouldn’t have known about otherwise. Love the clean design and smooth experience!"
    },
    {
      name: "Rahul Sharma",
      role: "Conference Speaker",
      image: "https://i.pinimg.com/736x/45/5a/46/455a46b3e051d8f5c80be1e7459a9455.jpg",
      review: "The ticketing process was super smooth for my session. Attendees appreciated the easy booking system. Highly recommended!"
    },
    {
      name: "Sneha Roy",
      role: "Music Festival Attendee",
      image: "https://i.pinimg.com/736x/96/23/a7/9623a7a85020710bd5ca33b608ff0c5d.jpg",
      review: "I booked tickets for a concert in just a few clicks. The reminders and event updates were very helpful!"
    }
  ];

  return (
    <>
        <h2>What Our Users Say</h2>
        <div className="testimonials-grid">
          {testimonials.map(event =>(
            <div className="testimonial">
              <div className="testimonial-text">
                {event.review}
              </div>
              <div className="testimonial-author">
                <img src={event.image} alt="Sarah Smith" />
                <div>
                  <h4>{event.name}</h4>
                  <p>{event.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
    </>
  )
}

export default Hero_testimonial