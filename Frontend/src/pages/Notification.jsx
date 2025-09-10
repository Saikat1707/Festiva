import React, { useState } from 'react';
import '../CSS/pageCSS/Notification.css';
import { FaDeleteLeft } from 'react-icons/fa6';
import { MdDelete } from "react-icons/md";
import { FaEye } from 'react-icons/fa';

const Notification = () => {
  // Sample notification data
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Order Confirmed",
      message: "Your decoration order #FES-1234 has been confirmed.",
      time: "2 minutes ago",
      read: false,
      type: "order"
    },
    {
      id: 2,
      title: "Special Offer",
      message: "Get 20% off on party supplies this weekend!",
      time: "1 hour ago",
      read: false,
      type: "promotion"
    },
    {
      id: 3,
      title: "Event Reminder",
      message: "Your friend's birthday party is in 3 days.",
      time: "5 hours ago",
      read: true,
      type: "reminder"
    },
    {
      id: 4,
      title: "Delivery Update",
      message: "Your order #FES-1234 is out for delivery.",
      time: "Yesterday",
      read: false,
      type: "order"
    },
    {
      id: 5,
      title: "New Feature",
      message: "Check out our new party planning tool!",
      time: "2 days ago",
      read: true,
      type: "system"
    }
  ]);

  const [filter, setFilter] = useState('all');

  const markAsRead = (id) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };


  const deleteNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  const filteredNotifications = filter === 'all' 
    ? notifications 
    : notifications.filter(notification => 
        filter === 'unread' ? !notification.read : notification.type === filter
      );

  const unreadCount = notifications.filter(notification => !notification.read).length;

  return (
    <div className="notification-container ">
      <div className="notification-header">
        <div className="notification-title">
          <h2>Notifications</h2>
          {unreadCount > 0 && <span className="badge">{unreadCount}</span>}
        </div>
      </div>

      <div className="notification-filters">
        <button 
          className={filter === 'all' ? 'filter-btn active' : 'filter-btn'} 
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className={filter === 'unread' ? 'filter-btn active' : 'filter-btn'} 
          onClick={() => setFilter('unread')}
        >
          Unread
        </button>
        <button 
          className={filter === 'order' ? 'filter-btn active' : 'filter-btn'} 
          onClick={() => setFilter('order')}
        >
          Orders
        </button>
        <button 
          className={filter === 'promotion' ? 'filter-btn active' : 'filter-btn'} 
          onClick={() => setFilter('promotion')}
        >
          Promotions
        </button>
      </div>
      
      <div className="notification-list">
        {filteredNotifications.length === 0 ? (
          <div className="empty-notifications">
            <div className="empty-icon">
              <i className="far fa-bell"></i>
            </div>
            <p>No notifications found</p>
            <small>You're all caught up!</small>
          </div>
        ) : (
          filteredNotifications.map(notification => (
            <div 
              key={notification.id} 
              className={`notification-item ${notification.read ? 'read' : 'unread'}`}
            >
              <div className="notification-icon">
                {notification.type === 'order' && <i className="fas fa-shopping-bag"></i>}
                {notification.type === 'promotion' && <i className="fas fa-percent"></i>}
                {notification.type === 'reminder' && <i className="fas fa-calendar"></i>}
                {notification.type === 'system' && <i className="fas fa-cog"></i>}
              </div>
              
              <div className="notification-content">
                <div className="notification-header-row">
                  <h4>{notification.title}</h4>
                  <div className="notification-buttons">
                    {!notification.read && (
                      <button 
                        className="mark-read-btn"
                        onClick={() => markAsRead(notification.id)}
                        aria-label="Mark as read"
                      >
                      <FaEye className='text-2xl'/>
                      </button>
                    )}
                    <button 
                      className="delete-btn"
                      onClick={() => deleteNotification(notification.id)}
                      aria-label="Delete notification"
                    >
                    <MdDelete className='text-2xl'/>
                    </button>
                  </div>
                </div>
                <p>{notification.message}</p>
                <span className="notification-time">{notification.time}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Notification;