import React, { useState } from 'react';
import '../CSS/componentsCSS/NavBarCSS.css';
import FestivaLogo from '../assets/FestivaLogo.png';
import { FaHome } from "react-icons/fa";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { DiGhostSmall } from "react-icons/di";
import { FaTicketAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FcAbout } from "react-icons/fc";
import { IoNotifications } from "react-icons/io5";
import { MdOutlineRateReview } from "react-icons/md";

const NavBar = () => {
  const [activeItem, setActiveItem] = useState('home');
  const [isExpanded, setIsExpanded] = useState(false);
  
  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <div 
      className={`Main_Nav_Container ${isExpanded ? 'expanded' : ''}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className='nav_brand_logo'>
        <img src={FestivaLogo} alt="Festiva Logo" className='logo-image' />
        <h2 className='brand-text'>Festiva</h2>
      </div>
      
      <ul className="nav_items">
        <li 
          className={`nav-item ${activeItem === 'home' ? 'active' : ''}`}
          onClick={() => handleItemClick('home')}
        >
          <div className="icon-container">
            <FaHome className="nav-icon" />
          </div>
          <span className="nav-label">Home</span>
          <div className="active-indicator"></div>
        </li>
        <li 
          className={`nav-item ${activeItem === 'explore' ? 'active' : ''}`}
          onClick={() => handleItemClick('explore')}
        >
          <div className="icon-container">
            <DiGhostSmall className="nav-icon" />
          </div>
          <span className="nav-label">Host Event</span>
          <div className="active-indicator"></div>
        </li>
        <li 
          className={`nav-item ${activeItem === 'tickets' ? 'active' : ''}`}
          onClick={() => handleItemClick('tickets')}
        >
          <div className="icon-container">
            <FaTicketAlt className="nav-icon" />
          </div>
          <span className="nav-label">Tickets</span>
          <div className="active-indicator"></div>
        </li>
        <li 
          className={`nav-item ${activeItem === 'profile' ? 'active' : ''}`}
          onClick={() => handleItemClick('profile')}
        >
          <div className="icon-container">
            <CgProfile className="nav-icon" />
          </div>
          <span className="nav-label">Profile</span>
          <div className="active-indicator"></div>
        </li>
        <li 
          className={`nav-item ${activeItem === 'about' ? 'active' : ''}`}
          onClick={() => handleItemClick('about')}
        >
          <div className="icon-container">
            <FcAbout className="nav-icon" />
          </div>
          <span className="nav-label">About</span>
          <div className="active-indicator"></div>
        </li>
        <li 
          className={`nav-item ${activeItem === 'notifications' ? 'active' : ''}`}
          onClick={() => handleItemClick('notifications')}
        >
          <div className="icon-container">
            <IoNotifications className="nav-icon" />
            <span className="notification-badge">3</span>
          </div>
          <span className="nav-label">Notifications</span>
          <div className="active-indicator"></div>
        </li>
        <li 
          className={`nav-item ${activeItem === 'reviews' ? 'active' : ''}`}
          onClick={() => handleItemClick('reviews')}
        >
          <div className="icon-container">
            <MdOutlineRateReview className="nav-icon" />
          </div>
          <span className="nav-label">Reviews</span>
          <div className="active-indicator"></div>
        </li>
        <li 
          className={`nav-item ${activeItem === 'contact' ? 'active' : ''}`}
          onClick={() => handleItemClick('contact')}
        >
          <div className="icon-container">
            <MdOutlineConnectWithoutContact className="nav-icon" />
          </div>
          <span className="nav-label">Contact</span>
          <div className="active-indicator"></div>
        </li>
      </ul>
      
      <div className="nav-footer">
        <div className="theme-indicator">
          <div className="theme-dot"></div>
          <span className=" font-bold">
            Festiva: <span className="text-purple-400">Book Your Event</span>
            </span>

        </div>
      </div>
    </div>
  );
}

export default NavBar;