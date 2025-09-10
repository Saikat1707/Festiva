import React, { useState } from 'react';
import '../CSS/pageCSS/Reviews.css';
import { getReviews, getReviewsEvent } from '../BackendData';

const Reviews = () => {
  const [activeEvent, setActiveEvent] = useState('all');
  
  const events = getReviewsEvent()
  const reviews = getReviews()
  
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