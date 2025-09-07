import React, { useState } from 'react';
import '../CSS/pageCSS/Reviews.css';

const Reviews = () => {
  const [activeEvent, setActiveEvent] = useState('all');
  
  // Sample events data
  const events = [
    {
      id: 'all',
      name: 'All Events',
      description: 'See reviews from all Festiva events'
    },
    {
      id: 'music-fest-2023',
      name: 'Summer Music Festival 2023',
      description: 'Annual music festival featuring top artists',
      date: 'July 15-17, 2023',
      location: 'Central Park, New York'
    },
    {
      id: 'food-fair-2023',
      name: 'International Food Fair',
      description: 'Culinary experience with global cuisines',
      date: 'August 5-6, 2023',
      location: 'Downtown Plaza, Chicago'
    },
    {
      id: 'tech-summit-2023',
      name: 'Tech Innovation Summit',
      description: 'Showcasing the latest in technology',
      date: 'September 12-14, 2023',
      location: 'Convention Center, San Francisco'
    },
    {
      id: 'art-exhibition-2023',
      name: 'Modern Art Exhibition',
      description: 'Contemporary artworks from emerging artists',
      date: 'October 1-31, 2023',
      location: 'Metropolitan Museum, Boston'
    },
    {
      id: 'sports-championship-2023',
      name: 'National Sports Championship',
      description: 'Competition featuring various sports',
      date: 'November 10-12, 2023',
      location: 'City Stadium, Los Angeles'
    },
    {
      id: 'winter-gala-2023',
      name: 'Winter Charity Gala',
      description: 'Elegant evening for a good cause',
      date: 'December 2, 2023',
      location: 'Grand Hotel, Miami'
    }
  ];

  // Sample reviews data for different events
  const reviews = [
    {
      id: 1,
      name: "Alex Rivera",
      rating: 5,
      date: "2023-11-15",
      title: "Unforgettable music experience!",
      content: "The Summer Music Festival was absolutely incredible. The sound quality, artist lineup, and overall organization were top-notch. Can't wait for next year!",
      event: "music-fest-2023",
      verified: true
    },
    {
      id: 2,
      name: "Sophie Williams",
      rating: 4,
      date: "2023-11-10",
      title: "Amazing culinary journey",
      content: "The International Food Fair was a delight. So many diverse cuisines to try. The Mexican and Thai food stalls were my favorites!",
      event: "food-fair-2023",
      verified: true
    },
    {
      id: 3,
      name: "Marcus Johnson",
      rating: 5,
      date: "2023-11-05",
      title: "Tech that will change the world",
      content: "The Tech Innovation Summit showcased some mind-blowing innovations. The VR experiences and AI demonstrations were particularly impressive.",
      event: "tech-summit-2023",
      verified: true
    },
    {
      id: 4,
      name: "Lisa Chen",
      rating: 4,
      date: "2023-10-28",
      title: "Inspiring art collection",
      content: "The Modern Art Exhibition featured some truly thought-provoking pieces. The curation was excellent and the artists were very talented.",
      event: "art-exhibition-2023",
      verified: false
    },
    {
      id: 5,
      name: "David Miller",
      rating: 5,
      date: "2023-10-20",
      title: "Thrilling sports competition",
      content: "The National Sports Championship was packed with excitement. The athletes were incredible and the atmosphere was electric throughout.",
      event: "sports-championship-2023",
      verified: true
    },
    {
      id: 6,
      name: "Emma Thompson",
      rating: 3,
      date: "2023-10-15",
      title: "Good but crowded",
      content: "The Winter Charity Gala was beautiful but extremely crowded. It was hard to move around and enjoy the exhibits properly.",
      event: "winter-gala-2023",
      verified: true
    },
    {
      id: 7,
      name: "Ryan Park",
      rating: 5,
      date: "2023-10-10",
      title: "Best music festival ever!",
      content: "The lineup at the Summer Music Festival was incredible. The headliners put on an amazing show and the food vendors were great too.",
      event: "music-fest-2023",
      verified: true
    },
    {
      id: 8,
      name: "Nina Patel",
      rating: 4,
      date: "2023-10-05",
      title: "Delicious food experience",
      content: "The International Food Fair had so many options. I particularly enjoyed the Italian and Japanese sections. Will definitely come back next year.",
      event: "food-fair-2023",
      verified: true
    }
  ];

  // Calculate average rating
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  // Filter reviews based on selected event
  const filteredReviews = activeEvent === 'all' 
    ? reviews 
    : reviews.filter(review => review.event === activeEvent);

  // Get current event details
  const currentEvent = events.find(event => event.id === activeEvent);

  // Render star ratings
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <span key={i} className={i < rating ? "star filled" : "star"}>★</span>
    ));
  };

  return (
    <div className="reviews-page">
      <div className="reviews-hero">
        <div className="hero-content">
          <h1>Event Reviews</h1>
          <p>See what attendees are saying about Festiva events</p>
          <div className="average-display text-black">
            <div className="overall-rating text-black">
              <span className="rating-value">{averageRating.toFixed(1)}</span>
              <div className="rating-stars">{renderStars(Math.round(averageRating))}</div>
              <span className="rating-text">from {reviews.length} reviews</span>
            </div>
          </div>
        </div>
      </div>

      <div className="reviews-container">
        <div className="reviews-sidebar">
          <div className="events-list">
            <h3>Festiva Events</h3>
            <div className="event-items">
              {events.map(event => (
                <div 
                  key={event.id}
                  className={`event-item ${activeEvent === event.id ? 'active' : ''}`}
                  onClick={() => setActiveEvent(event.id)}
                >
                  <h4>{event.name}</h4>
                  <p>{event.description}</p>
                  {event.date && (
                    <div className="event-meta">
                      <span className="event-date text-white">{event.date}</span>
                      <span className="event-location">{event.location}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="reviews-content">
          <div className="reviews-header border bg-amber-300">
            <h2>{currentEvent?.name} Reviews</h2>
            <p>{currentEvent?.description}</p>
            {currentEvent?.date && (
              <div className="event-details">
                <span className="event-date text-white">{currentEvent.date}</span>
                <span className="event-location">{currentEvent.location}</span>
              </div>
            )}
          </div>

          <div className="reviews-grid">
            {filteredReviews.map(review => (
              <div key={review.id} className="review-card">
                <div className="card-header">
                  <div className="reviewer-info">
                    <div className="reviewer-avatar">
                      {review.name.charAt(0)}
                    </div>
                    <div className="reviewer-details">
                      <div className="reviewer-name">{review.name}</div>
                      <div className="review-date">{new Date(review.date).toLocaleDateString()}</div>
                    </div>
                  </div>
                  <div className="review-rating">
                    {renderStars(review.rating)}
                  </div>
                </div>
                
                <h3 className="review-title">{review.title}</h3>
                <p className="review-content">{review.content}</p>
                
                <div className="card-footer">
                  {review.verified && <span className="verified-badge">Verified Attendee</span>}
                </div>
              </div>
            ))}
          </div>

          {filteredReviews.length === 0 && (
            <div className="no-reviews">
              <div className="event-icon">🎉</div>
              <h3>No reviews yet for this event</h3>
              <p>Check out other events or check back later for reviews</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reviews;