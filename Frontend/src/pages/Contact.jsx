import React, { useState } from 'react';
import '../CSS/pageCSS/Contact.css';

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

  const contactMethods = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      details: 'support@festiva.com',
      description: 'Send us an email anytime',
      action: 'mailto:support@festiva.com'
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 6pm',
      action: 'tel:+15551234567'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Address',
      details: '123 Celebration Lane, Party City, CA 90001',
      description: 'Come visit our office',
      action: 'https://maps.google.com'
    },
    {
      icon: 'fas fa-comments',
      title: 'Live Chat',
      details: 'Available 24/7',
      description: 'Get instant help',
      action: '#chat'
    }
  ];

  const faqs = [
    {
      question: "Do you provide services for both small and large events?",
      answer: "Absolutely! Whether it's an intimate gathering or a large celebration, we offer tailored solutions for every scale."
    },
    {
      question: "Are your services available nationwide?",
      answer: "Currently, we operate in select cities across the country. Check our website or contact support for availability in your area."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers for your convenience."
    },
    {
      question: "Is there a cancellation policy?",
      answer: "Yes, cancellations made at least 72 hours prior to the event are eligible for a full refund. Please refer to our policy for more details."
    },
    {
      question: "Do you offer eco-friendly decoration options?",
      answer: "Yes, we provide sustainable and environmentally-friendly decorations. Ask our team for green event options."
    },
    {
      question: "How do I track my order or event status?",
      answer: "Once your event is confirmed, you will receive a tracking link and updates via email and SMS."
    }
];


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
                  <i className={method.icon}></i>
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
            <div className="social-links">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="Pinterest"><i className="fab fa-pinterest-p"></i></a>
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
                <h3>Message Sent Successfully!</h3>
                <p>We'll get back to you within 24 hours. Thank you for contacting us.</p>
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