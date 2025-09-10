// Tickets.jsx
import React, { useState } from 'react';
import '../CSS/pageCSS/Tickets.css';
import { getTicketdata } from '../BackendData';
import { FaDownload } from "react-icons/fa";
import { FcViewDetails } from "react-icons/fc";


const Tickets = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const ticketData= getTicketdata()

  const tickets = ticketData[activeTab];

  return (
    <div className="tickets-container">
      <header className="tickets-header">
        <div className="user-actions">
          <button className="btn btn-icon">
            <i className="fas fa-bell"></i>
          </button>
          <button className="btn btn-primary">
            <i className="fas fa-user"></i> My Account
          </button>
        </div>
      </header>
      
      <main className="tickets-main">
        <div className="header-section">
          <h1 className="page-title">My Tickets</h1>
          <p className="subtitle">Manage your event experiences</p>
          
          <div className="tabs">
            <button 
              className={`tab ${activeTab === 'upcoming' ? 'active' : ''}`}
              onClick={() => setActiveTab('upcoming')}
            >
              <i className="fas fa-calendar-day"></i> Upcoming Events
            </button>
            <button 
              className={`tab ${activeTab === 'past' ? 'active' : ''}`}
              onClick={() => setActiveTab('past')}
            >
              <i className="fas fa-history"></i> Past Events
            </button>
          </div>
        </div>
        
        <div className="ticket-list">
          {tickets.length > 0 ? (
            tickets.map(ticket => (
              <div key={ticket.id} className="ticket-card">
                <div className="ticket-image" style={{backgroundImage: `url(${ticket.image})`}}>
                  <div className="image-overlay"></div>
                  <div className="event-date">
                    <div className="date-day">{ticket.date.split(' ')[1].replace(',', '')}</div>
                    <div className="date-month">{ticket.date.split(' ')[0]}</div>
                  </div>
                </div>
                
                <div className="ticket-content">
                  <div className="ticket-header">
                    <div className="event-title">{ticket.event}</div>
                    <div className="event-time">{ticket.time}</div>
                  </div>
                  
                  <div className="ticket-details">
                    <div className="detail-row">
                      <div className="detail-item">
                        <i className="fas fa-map-marker-alt"></i>
                        <span>{ticket.venue}</span>
                      </div>
                    </div>
                    
                    <div className="detail-grid">
                      <div className="detail-item">
                        <div className="detail-label">Order Number</div>
                        <div className="detail-value">{ticket.orderNumber}</div>
                      </div>
                      <div className="detail-item">
                        <div className="detail-label">Ticket Holder</div>
                        <div className="detail-value">{ticket.ticketHolder}</div>
                      </div>
                      <div className="detail-item">
                        <div className="detail-label">Seats</div>
                        <div className="detail-value">{ticket.seats}</div>
                      </div>
                      <div className="detail-item">
                        <div className="detail-label">Ticket Type</div>
                        <div className="detail-value">{ticket.ticketType} ({ticket.quantity})</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="ticket-footer">
                    <div className="price-status">
                      <div className="price">${ticket.price.toFixed(2)}</div>
                      <div className={`status ${ticket.status.toLowerCase()}`}>
                        {ticket.status}
                      </div>
                    </div>
                    
                    <div className="ticket-actions">
                      <button className="btn btn-outline btn-sm">
                        <FaDownload/> Download
                      </button>
                      <button className="btn btn-primary btn-sm">
                        <FcViewDetails/> Details
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="ticket-barcode">
                  <img src={ticket.qrCode} alt="" />
                </div>
              </div>
            ))
          ) : (
            <div className="no-tickets">
              <i className="fas fa-ticket-alt"></i>
              <h3>No {activeTab} tickets</h3>
              <p>You don't have any {activeTab} events at this time.</p>
              <button className="btn btn-primary">
                <i className="fas fa-search"></i> Browse Events
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Tickets;