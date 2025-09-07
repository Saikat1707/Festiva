import React, { useState, useEffect, useRef } from 'react';
import '../CSS/componentsCSS/Crousel.css';

const Crousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);
  
  const images = [
    {
      id: 1,
      url: "https://plus.unsplash.com/premium_photo-1710522706751-c2f0c76cc5fd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNpbmVtYXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Festiva Opening Night",
      description: "A dazzling start with lights, music, and celebrations."
    },
    {
      id: 2,
      url: "https://plus.unsplash.com/premium_photo-1667425092311-80658bb0c05f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNpbmVtYXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Food & Fun",
        description: "Relish mouth-watering dishes and joyful moments."
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3JpY2tldHxlbnwwfHwwfHx8MA%3D%3D",
        title: "Grand Finale",
    description: "An unforgettable ending with fireworks and performances."
    },
    {
      id: 4,
      url: "https://plus.unsplash.com/premium_photo-1685094987286-fa4ce5edd55c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRhbmNlcnxlbnwwfHwwfHx8MA%3D%3D",
     title: "Cultural Performances",
    description: "Experience the fusion of traditions, dance, and art."
    }
  ];

  // Auto-advance the carousel when not paused
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    
    return () => clearInterval(interval);
  }, [images.length, isPaused]);

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
          setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
        } else {
          // Swipe right - previous
          setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
        }
      }
      
      // Resume auto-scrolling after a delay
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
  }, [currentIndex, images.length]);

  return (
    <div className="carousel-container">
      <div className="carousel" ref={carouselRef}>
        <div className="carousel-track">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={index === currentIndex ? "carousel-slide active" : "carousel-slide"}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <img src={image.url} alt={image.title} className="carousel-image" />
              <div className="carousel-content">
                <h3>{image.title}</h3>
                <p>{image.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="carousel-indicators">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={index === currentIndex ? "indicator active" : "indicator"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Crousel;