import React, { useState, useEffect } from "react";
import GlassCard from "../ReusableUiComponents/GlassCard";
import FormField from "../ReusableUiComponents/FormField";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    alert("Message functionality would be implemented with a backend service");
    console.log("Form data:", formData);
  };

  return (
    <GlassCard>
      <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
      <div className="space-y-6">
        <FormField
          label="Name"
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <FormField
          label="Email"
          type="email"
          name="email"
          placeholder="your.email@example.com"
          value={formData.email}
          onChange={handleChange}
        />
        <FormField
          label="Subject"
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
        />
        <div>
          <label className="block text-white/80 mb-2">Message</label>
          <textarea
            name="message"
            rows={5}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all resize-none"
            placeholder="Your message..."
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-xl text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300">
          Send Message
        </button>
      </div>
    </GlassCard>
  );
};

export default ContactForm;
