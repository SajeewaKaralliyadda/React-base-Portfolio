import React, { useState } from "react";
import emailjs from "emailjs-com";
import GlassCard from "../ReusableUiComponents/GlassCard";
import FormField from "../ReusableUiComponents/FormField";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage("");

    emailjs
      .send(
        "service_8dzzytq", //EmailJS Service ID
        "template_pbq33nn", //EmailJS Template ID
        {
          form_name: formData.name,
          form_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "1-pZ3f4PEFNrrpeSQ" //EmailJS Public Key
      )
      .then(
        (result) => {
          setStatusMessage("✅ Message sent successfully!");
          setIsSending(false);
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          setStatusMessage("❌ Failed to send message. Try again.");
          setIsSending(false);
        }
      );
  };

  return (
    <GlassCard>
      <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormField
          label="Name"
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <FormField
          label="Email"
          type="email"
          name="email"
          placeholder="your.email@example.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <FormField
          label="Subject"
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
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
            required
          />
        </div>
        <button
          type="submit"
          disabled={isSending}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-xl text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 disabled:opacity-50">
          {isSending ? "Sending..." : "Send Message"}
        </button>
        {statusMessage && (
          <p className="text-center text-sm text-white/80 mt-4">
            {statusMessage}
          </p>
        )}
      </form>
    </GlassCard>
  );
};

export default ContactForm;
