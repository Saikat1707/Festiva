import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterestP, FaChevronRight, FaPaperPlane, FaCcVisa, FaCcMastercard, FaCcAmex, FaCcPaypal, FaCcApplePay } from 'react-icons/fa';
import { GiPartyPopper } from 'react-icons/gi';
import '../CSS/componentsCSS/Footer.css';
import logo from '../assets/FestivaLogo.png'
const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with: ${email}`);
    setEmail('');
  };

  return (
    <footer className="festiva-footer">
      <div className="footer-wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
        </svg>
      </div>
      
      <div className="festiva-footer-container">
        <div className="footer-main-content">
          <div className="footer-brand">
            <div className="logo-container">
              <div className="logo-icon">
                <img src={logo} alt="" />
              </div>
              <h2>Festiva</h2>
            </div>
            <p className="tagline">Celebrate every moment with us.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="#" aria-label="Pinterest"><FaPinterestP /></a>
            </div>
          </div>

          <div className="footer-links-container">
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><a href="#"><FaChevronRight />About Us</a></li>
                <li><a href="#"><FaChevronRight />Careers</a></li>
                <li><a href="#"><FaChevronRight />Blog</a></li>
                <li><a href="#"><FaChevronRight />Press</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Support</h4>
              <ul>
                <li><a href="#"><FaChevronRight />Help Center</a></li>
                <li><a href="#"><FaChevronRight />Contact Support</a></li>
                <li><a href="#"><FaChevronRight />Guidelines</a></li>
                <li><a href="#"><FaChevronRight />FAQs</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Legal</h4>
              <ul>
                <li><a href="#"><FaChevronRight />Privacy Policy</a></li>
                <li><a href="#"><FaChevronRight />Terms of Service</a></li>
                <li><a href="#"><FaChevronRight />Cookie Policy</a></li>
                <li><a href="#"><FaChevronRight />Licensing</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Newsletter</h4>
              <p>Subscribe to get special offers and event updates</p>
              <form onSubmit={handleSubscribe} className="subscribe-form">
                <div className="input-group">
                  <input 
                    type="email"
                    placeholder="Your email address" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit">
                    <FaPaperPlane />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {new Date().getFullYear()} Festiva. All rights reserved.</p>
            <div className="payment-methods">
              <FaCcVisa />
              <FaCcMastercard />
              <FaCcAmex />
              <FaCcPaypal />
              <FaCcApplePay />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
