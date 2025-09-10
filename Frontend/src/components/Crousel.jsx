import React, { useState, useEffect, useRef } from 'react';
import '../CSS/componentsCSS/Crousel.css';
import { getEventInfo } from '../BackendData';
const Crousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);

  const eventInfo = getEventInfo()

  // Auto-advance the carousel
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === eventInfo.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [eventInfo.length, isPaused]);

  // Swipe handling
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let startX = 0;
    let endX = 0;
    let isSwiping = false;

    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
      isSwiping = true;
      setIsPaused(true);
    };

    const handleTouchMove = (e) => {
      if (!isSwiping) return;
      endX = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      if (!isSwiping) return;
      isSwiping = false;

      const diffX = startX - endX;
      const swipeThreshold = 50;

      if (Math.abs(diffX) > swipeThreshold) {
        if (diffX > 0) {
          // Swipe left - next
          setCurrentIndex(currentIndex === eventInfo.length - 1 ? 0 : currentIndex + 1);
        } else {
          // Swipe right - previous
          setCurrentIndex(currentIndex === 0 ? eventInfo.length - 1 : currentIndex - 1);
        }
      }

      setTimeout(() => setIsPaused(false), 5000);
    };

    carousel.addEventListener('touchstart', handleTouchStart);
    carousel.addEventListener('touchmove', handleTouchMove);
    carousel.addEventListener('touchend', handleTouchEnd);

    return () => {
      carousel.removeEventListener('touchstart', handleTouchStart);
      carousel.removeEventListener('touchmove', handleTouchMove);
      carousel.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentIndex, eventInfo.length]);

  return (
    <div className="carousel-container">
      <div className="carousel flex" ref={carouselRef}>
        <div className="carousel-track">
          <img
            src={eventInfo[currentIndex].url}
            alt={eventInfo[currentIndex].title}
          />
        </div>

        <div className="eventTexts">
          <h2>{eventInfo[currentIndex].title}</h2>
          <p className="description">{eventInfo[currentIndex].description}</p>
          <div className="event-details">
            <p><strong>Location:</strong> {eventInfo[currentIndex].location}</p>
            <p><strong>Date:</strong> {eventInfo[currentIndex].date}</p>
            <p><strong>Time:</strong> {eventInfo[currentIndex].time}</p>
            <p><strong>Organizer:</strong> {eventInfo[currentIndex].organizer}</p>
            <p><strong>Contact:</strong> <a href={`mailto:${eventInfo[currentIndex].contact}`}>{eventInfo[currentIndex].contact}</a></p>
          </div>
          <button>Book Now</button>
        </div>


        <div className="carousel-indicators">
          {eventInfo.map((event, index) => (
            <div
              key={event.id}
              className={index === currentIndex ? "indicator active" : "indicator"}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Crousel;
