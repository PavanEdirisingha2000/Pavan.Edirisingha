import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState(null);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setAlert(null);

    try {
      const templateParams = {
        senderName: formData.name,
        senderEmail: formData.email,
        emailSubject: formData.subject,
        messageContent: formData.message,
        to_email: 'dulakshithapavan@gmail.com'
      };

      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        templateParams,
        'YOUR_USER_ID' // Replace with your EmailJS user ID
      );
      
      setAlert({
        type: 'success',
        message: "Thank you for your message! I've received it and will get back to you soon."
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email sending failed:', error);
      setAlert({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const dismissAlert = () => {
    setAlert(null);
  };

  return (
    <div className="contact-form-wrapper">
      <div className="form-header">
        <h2 className="form-title">Send me a message</h2>
        <p className="form-description">I'd love to hear from you</p>
      </div>

      {alert && (
        <div className={`alert alert-${alert.type}`}>
          <div className="alert-icon">
            <i className={`fas ${alert.type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}`}></i>
          </div>
          <div className="alert-content">
            <h4>{alert.type === 'success' ? 'Success!' : 'Error!'}</h4>
            <p>{alert.message}</p>
          </div>
          <button className="alert-close" onClick={dismissAlert}>
            <i className="fas fa-times"></i>
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">
              <i className="fas fa-user"></i>
              Name *
            </label>
            <input
              type="text"
              name="name"
              className={`form-input ${errors.name ? 'error' : ''}`}
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
            />
            {errors.name && (
              <div className="form-error">
                <i className="fas fa-exclamation-circle"></i>
                {errors.name}
              </div>
            )}
          </div>

          <div className="form-group">
            <label className="form-label">
              <i className="fas fa-envelope"></i>
              Email *
            </label>
            <input
              type="email"
              name="email"
              className={`form-input ${errors.email ? 'error' : ''}`}
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <div className="form-error">
                <i className="fas fa-exclamation-circle"></i>
                {errors.email}
              </div>
            )}
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">
            <i className="fas fa-tag"></i>
            Subject *
          </label>
          <input
            type="text"
            name="subject"
            className={`form-input ${errors.subject ? 'error' : ''}`}
            value={formData.subject}
            onChange={handleChange}
            placeholder="What's this about?"
          />
          {errors.subject && (
            <div className="form-error">
              <i className="fas fa-exclamation-circle"></i>
              {errors.subject}
            </div>
          )}
        </div>

        <div className="form-group">
          <label className="form-label">
            <i className="fas fa-message"></i>
            Message *
          </label>
          <textarea
            name="message"
            className={`form-textarea ${errors.message ? 'error' : ''}`}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project or just say hello..."
            rows="6"
          ></textarea>
          {errors.message && (
            <div className="form-error">
              <i className="fas fa-exclamation-circle"></i>
              {errors.message}
            </div>
          )}
        </div>

        <button type="submit" className="submit-btn" disabled={isSubmitting}>
          <div className="btn-content">
            {isSubmitting ? (
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
          </div>
          <div className="btn-ripple"></div>
        </button>

        <p className="submit-note">
          <i className="fas fa-lock"></i>
          Your information is secure and will never be shared
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
