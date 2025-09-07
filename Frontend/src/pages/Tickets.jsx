// Tickets.jsx
import React, { useState } from 'react';
import '../CSS/pageCSS/Tickets.css';

const Tickets = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  // Sample ticket data
  const ticketData = {
    upcoming: [
      {
        id: 1,
        event: "Coldplay: Music of the Spheres World Tour",
        date: "June 15, 2023",
        time: "7:30 PM",
        venue: "Madison Square Garden, New York",
        orderNumber: "TH-7582943",
        ticketHolder: "John Doe (johndoe@example.com)",
        seats: "Section 102, Row E, Seats 12-13",
        ticketType: "Standard Admission",
        quantity: 2,
        price: 249.98,
        status: "Confirmed",
        image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      },
      {
        id: 2,
        event: "Hamilton - Broadway Musical",
        date: "July 22, 2023",
        time: "2:00 PM",
        venue: "Richard Rodgers Theatre, New York",
        orderNumber: "TH-7625489",
        ticketHolder: "John Doe (johndoe@example.com)",
        seats: "Orchestra, Row C, Seat 105",
        ticketType: "Premium",
        quantity: 1,
        price: 199.00,
        status: "Confirmed",
        image: "https://images.unsplash.com/photo-1501281667305-0d4e0ab15754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      }
    ],
    past: [
      {
        id: 3,
        event: "Local Art Festival",
        date: "August 5, 2022",
        time: "10:00 AM",
        venue: "City Park, Central Area",
        orderNumber: "TH-7698321",
        ticketHolder: "John Doe (johndoe@example.com)",
        seats: "General Admission",
        ticketType: "Weekend Pass",
        quantity: 4,
        price: 120.00,
        status: "Completed",
        image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
      }
    ]
  };

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
                        <i className="fas fa-ticket-alt"></i> Transfer
                      </button>
                      <button className="btn btn-outline btn-sm">
                        <i className="fas fa-download"></i> Download
                      </button>
                      <button className="btn btn-primary btn-sm">
                        <i className="fas fa-eye"></i> Details
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="ticket-barcode">
                  <div className="barcode">
                    <div className="barcode-line"></div>
                    <div className="barcode-line"></div>
                    <div className="barcode-line"></div>
                    <div className="barcode-line"></div>
                    <div className="barcode-line"></div>
                    <div className="barcode-line"></div>
                    <div className="barcode-line"></div>
                    <div className="barcode-line"></div>
                  </div>
                  <div className="barcode-number">{ticket.orderNumber}</div>
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