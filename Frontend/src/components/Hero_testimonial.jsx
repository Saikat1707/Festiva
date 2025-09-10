import React from 'react'
import '../CSS/componentsCSS/HeroTestimonial.css'
import { getTestimonialsInfo } from '../BackendData'
const Hero_testimonial = () => {
  const testimonials = getTestimonialsInfo()
  return (
    <>
        <h2>What Our Users Say</h2>
        <div className="testimonials-grid">
          {testimonials.map(event =>(
            <div className="testimonial" key={event.id}>
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