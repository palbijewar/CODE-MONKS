import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    submitted: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message
      };

      const serviceID = 'service_ng24ag5';
      const templateID = 'template_3kbvmgq';
      const userID = '73ou3IKRF1gzsNzsx';

      await emailjs.send(serviceID, templateID, templateParams, userID);

      setFormData((prevData) => ({
        ...prevData,
        submitted: true
      }));
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-form">
        <h2>Contact Us</h2>
        {!formData.submitted ? (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        ) : (
          <p className="success-message">Your message has been sent successfully!</p>
        )}
      </div>
    </div>
  );
}
