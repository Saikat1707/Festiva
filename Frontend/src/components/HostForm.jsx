import React, { useState } from 'react';
import '../CSS/componentsCSS/HostForm.css';
import { getCategories, getEventTypes, getTimeZones } from '../BackendData';

const HostForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Basic Information
    eventTitle: '',
    eventType: '',
    category: '',
    description: '',
    
    // Date & Time
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: '',
    timezone: 'UTC',
    
    // Location
    venueType: 'physical',
    venueName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    onlineUrl: '',
    
    // Tickets
    tickets: [
      {
        type: 'General Admission',
        price: '',
        quantity: '',
        description: ''
      }
    ]
  });

  const eventTypes = getEventTypes()
  const categories = getCategories()
  const timezones = getTimeZones()

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle ticket changes
  const handleTicketChange = (index, field, value) => {
    const updatedTickets = [...formData.tickets];
    updatedTickets[index][field] = value;
    setFormData({
      ...formData,
      tickets: updatedTickets
    });
  };

  // Add a new ticket type
  const addTicket = () => {
    setFormData({
      ...formData,
      tickets: [
        ...formData.tickets,
        {
          type: 'General Admission',
          price: '',
          quantity: '',
          description: ''
        }
      ]
    });
  };

  // Remove a ticket type
  const removeTicket = (index) => {
    if (formData.tickets.length > 1) {
      const updatedTickets = [...formData.tickets];
      updatedTickets.splice(index, 1);
      setFormData({
        ...formData,
        tickets: updatedTickets
      });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Event created:', formData);
    alert('Event created successfully!');
  };

  // Go to next step
  const nextStep = () => {
    setStep(step + 1);
  };

  // Go to previous step
  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="host-container">
      <div className="host-header">
        <h1>Create Your Event</h1>
        <p>Fill in the details below to create and publish your event</p>
      </div>

      <div className="progress-bar">
        <div className="progress-steps">
          <div className={`step ${step >= 1 ? 'active' : ''}`}>
            <span className="step-number">1</span>
            <span className="step-label">Basic Info</span>
          </div>
          <div className={`step ${step >= 2 ? 'active' : ''}`}>
            <span className="step-number">2</span>
            <span className="step-label">Date & Time</span>
          </div>
          <div className={`step ${step >= 3 ? 'active' : ''}`}>
            <span className="step-number">3</span>
            <span className="step-label">Location</span>
          </div>
          <div className={`step ${step >= 4 ? 'active' : ''}`}>
            <span className="step-number">4</span>
            <span className="step-label">Tickets</span>
          </div>
          <div className={`step ${step >= 5 ? 'active' : ''}`}>
            <span className="step-number">5</span>
            <span className="step-label">Review</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="event-form">
        {step === 1 && (
          <div className="form-step">
            <h2>Basic Information</h2>
            <div className="form-group">
              <label htmlFor="eventTitle">Event Title *</label>
              <input
                type="text"
                id="eventTitle"
                name="eventTitle"
                value={formData.eventTitle}
                onChange={handleInputChange}
                required
                placeholder="Enter a title for your event"
              />
            </div>

            <div className="form-group">
              <label htmlFor="eventType">Event Type *</label>
              <select
                id="eventType"
                name="eventType"
                value={formData.eventType}
                onChange={handleInputChange}
                required
              >
                <option value="">Select event type</option>
                {eventTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="category">Category *</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
              >
                <option value="">Select category</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="description">Description *</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows="5"
                placeholder="Describe your event in detail..."
              ></textarea>
            </div>

            <div className="form-actions">
              <button type="button" onClick={nextStep} className="btn-primary">
                Next: Date & Time
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="form-step">
            <h2>Date & Time</h2>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="startDate">Start Date *</label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="startTime">Start Time *</label>
                <input
                  type="time"
                  id="startTime"
                  name="startTime"
                  value={formData.startTime}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="endDate">End Date *</label>
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="endTime">End Time *</label>
                <input
                  type="time"
                  id="endTime"
                  name="endTime"
                  value={formData.endTime}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="timezone">Timezone *</label>
              <select
                id="timezone"
                name="timezone"
                value={formData.timezone}
                onChange={handleInputChange}
                required
              >
                {timezones.map(tz => (
                  <option key={tz} value={tz}>{tz}</option>
                ))}
              </select>
            </div>

            <div className="form-actions">
              <button type="button" onClick={prevStep} className="btn-secondary">
                Back
              </button>
              <button type="button" onClick={nextStep} className="btn-primary">
                Next: Location
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="form-step">
            <h2>Location</h2>
            
            <div className="form-group">
              <label>Venue Type *</label>
              <div className="radio-group">
                <label className="radio-option">
                  <input
                    type="radio"
                    name="venueType"
                    value="physical"
                    checked={formData.venueType === 'physical'}
                    onChange={handleInputChange}
                  />
                  <span>Physical Location</span>
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="venueType"
                    value="online"
                    checked={formData.venueType === 'online'}
                    onChange={handleInputChange}
                  />
                  <span>Online Event</span>
                </label>
              </div>
            </div>

            {formData.venueType === 'physical' ? (
              <>
                <div className="form-group">
                  <label htmlFor="venueName">Venue Name *</label>
                  <input
                    type="text"
                    id="venueName"
                    name="venueName"
                    value={formData.venueName}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter venue name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="address">Address *</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    placeholder="Street address"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="city">City *</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="state">State/Province *</label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="zipCode">ZIP/Postal Code *</label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="country">Country *</label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              </>
            ) : (
              <div className="form-group">
                <label htmlFor="onlineUrl">Event URL *</label>
                <input
                  type="url"
                  id="onlineUrl"
                  name="onlineUrl"
                  value={formData.onlineUrl}
                  onChange={handleInputChange}
                  required
                  placeholder="https://example.com/event"
                />
              </div>
            )}

            <div className="form-actions">
              <button type="button" onClick={prevStep} className="btn-secondary">
                Back
              </button>
              <button type="button" onClick={nextStep} className="btn-primary">
                Next: Tickets
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="form-step">
            <h2>Tickets</h2>
            <p>Set up your ticketing options for this event</p>
            
            {formData.tickets.map((ticket, index) => (
              <div key={index} className="ticket-form">
                <div className="ticket-header">
                  <h3>Ticket Type #{index + 1}</h3>
                  {formData.tickets.length > 1 && (
                    <button 
                      type="button" 
                      onClick={() => removeTicket(index)}
                      className="btn-remove"
                    >
                      Remove
                    </button>
                  )}
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor={`ticketType-${index}`}>Ticket Type *</label>
                    <input
                      type="text"
                      id={`ticketType-${index}`}
                      value={ticket.type}
                      onChange={(e) => handleTicketChange(index, 'type', e.target.value)}
                      required
                      placeholder="General Admission, VIP, etc."
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor={`ticketPrice-${index}`}>Price ($) *</label>
                    <input
                      type="number"
                      id={`ticketPrice-${index}`}
                      min="0"
                      step="0.01"
                      value={ticket.price}
                      onChange={(e) => handleTicketChange(index, 'price', e.target.value)}
                      required
                      placeholder="0.00"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor={`ticketQuantity-${index}`}>Quantity *</label>
                    <input
                      type="number"
                      id={`ticketQuantity-${index}`}
                      min="1"
                      value={ticket.quantity}
                      onChange={(e) => handleTicketChange(index, 'quantity', e.target.value)}
                      required
                      placeholder="100"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor={`ticketDescription-${index}`}>Description</label>
                    <input
                      type="text"
                      id={`ticketDescription-${index}`}
                      value={ticket.description}
                      onChange={(e) => handleTicketChange(index, 'description', e.target.value)}
                      placeholder="What's included in this ticket"
                    />
                  </div>
                </div>
              </div>
            ))}

            <button type="button" onClick={addTicket} className="btn-add">
              + Add Another Ticket Type
            </button>

            <div className="form-actions">
              <button type="button" onClick={prevStep} className="btn-secondary">
                Back
              </button>
              <button type="button" onClick={nextStep} className="btn-primary">
                Next: Review
              </button>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="form-step">
            <h2>Review Your Event</h2>
            <p>Please review all the information before publishing your event</p>
            
            <div className="review-section">
              <h3>Basic Information</h3>
              <div className="review-item">
                <strong>Event Title:</strong> {formData.eventTitle}
              </div>
              <div className="review-item">
                <strong>Event Type:</strong> {formData.eventType}
              </div>
              <div className="review-item">
                <strong>Category:</strong> {formData.category}
              </div>
              <div className="review-item">
                <strong>Description:</strong> {formData.description}
              </div>
            </div>

            <div className="review-section">
              <h3>Date & Time</h3>
              <div className="review-item">
                <strong>Starts:</strong> {formData.startDate} at {formData.startTime} ({formData.timezone})
              </div>
              <div className="review-item">
                <strong>Ends:</strong> {formData.endDate} at {formData.endTime} ({formData.timezone})
              </div>
            </div>

            <div className="review-section">
              <h3>Location</h3>
              {formData.venueType === 'physical' ? (
                <>
                  <div className="review-item">
                    <strong>Venue:</strong> {formData.venueName}
                  </div>
                  <div className="review-item">
                    <strong>Address:</strong> {formData.address}, {formData.city}, {formData.state} {formData.zipCode}, {formData.country}
                  </div>
                </>
              ) : (
                <div className="review-item">
                  <strong>Online Event URL:</strong> {formData.onlineUrl}
                </div>
              )}
            </div>

            <div className="review-section">
              <h3>Tickets</h3>
              {formData.tickets.map((ticket, index) => (
                <div key={index} className="review-item">
                  <strong>{ticket.type}:</strong> ${ticket.price} ({ticket.quantity} available)
                  {ticket.description && <div className="ticket-desc">{ticket.description}</div>}
                </div>
              ))}
            </div>

            <div className="form-actions">
              <button type="button" onClick={prevStep} className="btn-secondary">
                Back
              </button>
              <button type="submit" className="btn-primary">
                Create Event
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default HostForm;