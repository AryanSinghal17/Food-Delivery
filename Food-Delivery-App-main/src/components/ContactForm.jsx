import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! We have received your message.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
         <div className="form-group mb-3">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-control"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />
      </div>

      {/* Email Field */}
      <div className="form-group mb-3">
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-control"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
      </div>

      {/* Message Field */}
      <div className="form-group mb-3">
        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          className="form-control"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message..."
          required
        />
      </div>

      {/* Submit Button */}
      <button type="submit" className="btn btn-warning w-100">
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;
