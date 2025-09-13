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
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const [activeItem, setActiveItem] = useState('home');
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/auth"); // Navigate to auth page
  }

  // Navigate to route on item click
  const handleItemClick = (itemName) => {
    setActiveItem(itemName);

    switch(itemName){
      case 'home': navigate('/'); break;
      case 'explore': navigate('/host'); break;
      case 'tickets': navigate('/ticket'); break;
      case 'profile': navigate('/profile'); break;
      case 'about': navigate('/about'); break;
      case 'notifications': navigate('/notification'); break;
      case 'reviews': navigate('/reviews'); break;
      case 'contact': navigate('/contact'); break;
      default: break;
    }
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
          <div className="icon-container"><FaHome className="nav-icon" /></div>
          <span className="nav-label">Home</span>
        </li>

        <li 
          className={`nav-item ${activeItem === 'explore' ? 'active' : ''}`}
          onClick={() => handleItemClick('explore')}
        >
          <div className="icon-container"><DiGhostSmall className="nav-icon" /></div>
          <span className="nav-label">Host Event</span>
        </li>

        <li 
          className={`nav-item ${activeItem === 'tickets' ? 'active' : ''}`}
          onClick={() => handleItemClick('tickets')}
        >
          <div className="icon-container"><FaTicketAlt className="nav-icon" /></div>
          <span className="nav-label">Tickets</span>
        </li>

        <li 
          className={`nav-item ${activeItem === 'profile' ? 'active' : ''}`}
          onClick={() => handleItemClick('profile')}
        >
          <div className="icon-container"><CgProfile className="nav-icon" /></div>
          <span className="nav-label">Profile</span>
        </li>

        <li 
          className={`nav-item ${activeItem === 'about' ? 'active' : ''}`}
          onClick={() => handleItemClick('about')}
        >
          <div className="icon-container"><FcAbout className="nav-icon" /></div>
          <span className="nav-label">About</span>
        </li>

        <li 
          className={`nav-item ${activeItem === 'notifications' ? 'active' : ''}`}
          onClick={() => handleItemClick('notifications')}
        >
          <div className="icon-container"><IoNotifications className="nav-icon" />
            <span className="notification-badge">3</span>
          </div>
          <span className="nav-label">Notifications</span>
        </li>

        <li 
          className={`nav-item ${activeItem === 'reviews' ? 'active' : ''}`}
          onClick={() => handleItemClick('reviews')}
        >
          <div className="icon-container"><MdOutlineRateReview className="nav-icon" /></div>
          <span className="nav-label">Reviews</span>
        </li>

        <li 
          className={`nav-item ${activeItem === 'contact' ? 'active' : ''}`}
          onClick={() => handleItemClick('contact')}
        >
          <div className="icon-container"><MdOutlineConnectWithoutContact className="nav-icon" /></div>
          <span className="nav-label">Contact</span>
        </li>

        <li className={`nav-item`} onClick={handleLogout}>
          <div className="icon-container"><IoIosLogOut className="nav-icon" /></div>
          <span className="nav-label">Log Out</span>
        </li>
      </ul>
      
      <div className="nav-footer">
        <div className="theme-indicator">
          <div className="theme-dot"></div>
          <span className="font-bold">
            Festiva: <span className="text-purple-400">Book Your Event</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
