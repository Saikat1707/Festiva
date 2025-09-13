import React, { useState } from 'react';
import '../CSS/pageCSS/Contact.css';
import { getContactMethod, getFaqs } from '../BackendData';
import { VscActivateBreakpoints } from "react-icons/vsc";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    urgency: 'normal'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      console.log("form submitted")
      const {data} = formData
      console.log(data)
      console.log(formData)
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          urgency: 'normal'
        });
      }, 3000);
    }, 1500);
  };

  const contactMethods = getContactMethod()
  const faqs = getFaqs()

  return (
    <div className="contact-container">
      <div className="contact-hero">
        <div className="hero-content">
          <h1>Get in Touch</h1>
          <p>We're here to help you celebrate. Reach out for any inquiries or support!</p>
        </div>
        <div className="hero-visual">
          <div className="floating-icon">
            <i className="fas fa-envelope-open-text"></i>
          </div>
        </div>
      </div>

      <div className="contact-content">
        <div className="contact-details">
          <h2>Our Contact Information</h2>
          <p className="section-description">Feel free to reach out through any of these channels. Our team is ready to assist you.</p>
          
          <div className="contact-methods">
            {contactMethods.map((method, index) => (
              <a 
                href={method.action} 
                className="contact-method-card"
                key={index}
                target={method.action.includes('http') ? '_blank' : '_self'}
                rel={method.action.includes('http') ? 'noopener noreferrer' : ''}
              >
                <div className="method-icon">
                  <VscActivateBreakpoints/>
                </div>
                <div className="method-content">
                  <h3>{method.title}</h3>
                  <p className="method-detail">{method.details}</p>
                  <p className="method-description">{method.description}</p>
                </div>
                <div className="method-action">
                  <i className="fas fa-arrow-right"></i>
                </div>
              </a>
            ))}
          </div>

          <div className="social-section">
            <h3>Follow Us</h3>
            <div className="social-links flex gap-2">
              <a href="#" aria-label="Facebook" className='text-3xl'> <FaFacebook/> </a>
              <a href="#" aria-label="Instagram" className='text-3xl'><FaSquareInstagram/></a>
              <a href="#" aria-label="Twitter" className='text-3xl'><FaSquareXTwitter/></a>
              <a href="#" aria-label="Linkedin" className='text-3xl'><FaLinkedin/></a>
            </div>
          </div>
        </div>

        <div className="contact-form-section">
          <div className="contact-form-container">
            <h2>Send Us a Message</h2>
            <p className="section-description">Fill out the form below and we'll get back to you as soon as possible.</p>
            
            {isSubmitted ? (
              <div className="success-message">
                <div className="success-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <h3 className='text-black'>Message Sent Successfully!</h3>
                <p className='text-black'>We'll get back to you within 24 hours. Thank you for contacting us.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="input-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="email">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="input-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="input-group">
                  <label htmlFor="urgency">Urgency</label>
                  <select 
                    id="urgency" 
                    name="urgency" 
                    value={formData.urgency}
                    onChange={handleChange}
                  >
                    <option value="low">Low</option>
                    <option value="normal">Normal</option>
                    <option value="high">High</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>
                
                <div className="input-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className={`submit-btn ${isLoading ? 'loading' : ''}`}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i>
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane"></i>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;