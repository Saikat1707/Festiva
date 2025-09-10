import React, { useState } from 'react';
import '../CSS/pageCSS/HostEvent.css';
import HostForm from '../components/HostForm';
import { getHostEvents } from '../BackendData';
import { FaDotCircle, FaEdit, FaEye } from 'react-icons/fa';

const Host = () => {
  const [isFirstEvent, setIsFirstEvent] = useState(false);
  const hostedEvents = getHostEvents()

  return (
    <div className="host-page">
      <div className="host-hero">
        <div className="host-hero-content">
          <h1>Become a Festiva Host</h1>
          <p>Share your passion, create unforgettable experiences, and earn money</p>
          {isFirstEvent ? (
            <button 
              className="cta-button"
              onClick={() => document.getElementById('host-process').scrollIntoView({ behavior: 'smooth' })}
            >
              Create Your First Event
            </button>
          ) : (
            <button 
              className="cta-button"
              onClick={() => document.getElementById('event-creation').scrollIntoView({ behavior: 'smooth' })}
            >
              Host New Event
            </button>
          )}
        </div>
      </div>

      <div className="host-container">
        {isFirstEvent ? (
          // First-time host view
          <div className="first-host-view">
            <div className="host-process" id="host-process">
              <h2>How Festiva Hosting Works</h2>
              <div className="process-steps">
                <div className="process-step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h3>Create Your Event</h3>
                    <p>Fill out our simple event form with details about your event, tickets, and schedule.</p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h3>Verification Process</h3>
                    <p>Our team reviews your event to ensure it meets quality standards and guidelines.</p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h3>Get a Dedicated Supervisor</h3>
                    <p>We assign a Festiva expert to help you promote and manage your event successfully.</p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h3>Go Live & Sell Tickets</h3>
                    <p>Once verified, your event goes live and tickets become available for purchase.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="platform-benefits">
              <h2>Why Host with Festiva?</h2>
              <div className="benefits-grid">
                <div className="benefit-card">
                  <div className="benefit-icon">🎯</div>
                  <h3>Targeted Marketing</h3>
                  <p>We promote your event to thousands of potential attendees in our network.</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">💳</div>
                  <h3>Secure Payment Processing</h3>
                  <p>We handle all transactions securely with multiple payment options.</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">📊</div>
                  <h3>Analytics Dashboard</h3>
                  <p>Track ticket sales, attendance, and revenue in real-time.</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">🛡️</div>
                  <h3>Event Insurance</h3>
                  <p>All events are covered by our cancellation protection policy.</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">📱</div>
                  <h3>Mobile Check-in</h3>
                  <p>Use our app for quick attendee check-in and management.</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">🌐</div>
                  <h3>Global Reach</h3>
                  <p>Reach attendees from around the world with our platform.</p>
                </div>
              </div>
            </div>

            <div className="pricing-info">
              <h2>Transparent Pricing</h2>
              <div className="pricing-card">
                <div className="pricing-header">
                  <h3>Platform Fee</h3>
                  <div className="fee-amount">10% per ticket</div>
                </div>
                <div className="pricing-details">
                  <p>Our fee includes:</p>
                  <ul>
                    <li>Payment processing</li>
                    <li>Customer support</li>
                    <li>Marketing & promotion</li>
                    <li>Event management tools</li>
                    <li>24/7 platform access</li>
                  </ul>
                  <p className="note">No hidden costs. You keep 90% of each ticket sale.</p>
                </div>
              </div>
            </div>

            <div className="event-creation-section" id="event-creation">
              <h2>Ready to Create Your First Event?</h2>
              <p>Fill out the form below to get started. Our team will contact you within 24 hours after submission.</p>
              <div className="event-form">
                {/* HostForm component would go here */}
                <div className="demo-form">
                  <h3>Event Creation Form</h3>
                  <HostForm/>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="AlreadyHost">
            <div className="host-dashboard">
              <div className="dashboard-header">
                <h2>Your Host Dashboard</h2>
                <button
                  className="new-event-btn"
                  onClick={() => {
                    document.querySelector(".eventForm")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  + New Event
                </button>
              </div>
              
              <div className="stats-overview">
                <div className="stat-card">
                  <h3>Total Events</h3>
                  <div className="stat-number">5</div>
                </div>
                <div className="stat-card">
                  <h3>Total Attendees</h3>
                  <div className="stat-number">1,245</div>
                </div>
                <div className="stat-card">
                  <h3>Total Revenue</h3>
                  <div className="stat-number">$18,560</div>
                </div>
                <div className="stat-card">
                  <h3>Upcoming Events</h3>
                  <div className="stat-number">2</div>
                </div>
              </div>
              
             <div className="EventHistory">
              <div className="events-header">
                <h3>Your Events</h3>
                <div className="events-filter">
                  <select className="filter-select">
                    <option value="all">All Events</option>
                    <option value="upcoming">Upcoming</option>
                    <option value="past">Past</option>
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                  </select>
                  <div className="search-box">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <input type="text" placeholder="Search events..." />
                  </div>
                </div>
              </div>
              
              <div className="events-table-container">
                <div className="events-table">
                  <div className="table-header">
                    <div className="header-cell event-name">Event Name</div>
                    <div className="header-cell">Date</div>
                    <div className="header-cell">Status</div>
                    <div className="header-cell">Attendees</div>
                    <div className="header-cell">Revenue</div>
                    <div className="header-cell actions">Actions</div>
                  </div>
                  
                  <div className="table-body">
                    {hostedEvents.map(event => (
                      <div key={event.id} className="table-row">
                        <div className="table-cell event-cell">
                          <div className="event-info">
                            <div className="event-name">{event.title}</div>
                            <div className="event-category">Technology</div>
                          </div>
                        </div>
                        
                        <div className="table-cell date-cell">
                          <div className="date-display">
                            <div className="date-day">{event.date.split(' ')[1].replace(',', '')}</div>
                            <div className="date-month">{event.date.split(' ')[0]}</div>
                            <div className="date-year">{event.date.split(' ')[2]}</div>
                          </div>
                        </div>
                        
                        <div className="table-cell status-cell">
                          <span className={`status-badge ${event.status.toLowerCase()}`}>
                            <span className="status-dot"></span>
                            {event.status}
                          </span>
                        </div>
                        
                        <div className="table-cell attendees-cell">
                          <div className="attendees-display">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>{event.attendees}</span>
                          </div>
                        </div>
                        
                        <div className="table-cell revenue-cell">
                          <div className="revenue-display">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 1V23M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>{event.revenue}</span>
                          </div>
                        </div>
                        
                        <div className="table-cell actions-cell">
                          <div className="action-buttons">
                            <button className="action-btn edit-btn" title="Edit Event">
                              <FaEdit className='text-3xl'/>
                            </button>
                            <button className="action-btn view-btn" title="View Event">
                              <FaEye className='text-3xl'/>
                            </button>
                            <button className="action-btn more-btn" title="More Options">
                              <FaDotCircle className='text-3xl'/>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="table-footer">
                  <div className="rows-info">Showing {hostedEvents.length} of 5 events</div>
                  <div className="pagination">
                    <button className="pagination-btn disabled">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    <span className="pagination-page">Page 1 of 1</span>
                    <button className="pagination-btn disabled">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            </div>
            
            <div className="eventForm">
              <div className="demo-form">
                <h3>Event Creation Form</h3>
                <HostForm/>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Host;