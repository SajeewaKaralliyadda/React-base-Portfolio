import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_8dzzytq", // Replace
        "template_6wtdt7n", // Replace
        form.current,
        "1-pZ3f4PEFNrrpeSQ" // Replace
      )
      .then(
        () => {
          setMessage("✅ Message sent successfully!");
          setLoading(false);
          form.current.reset();
        },
        () => {
          setMessage("❌ Failed to send message. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen px-6 md:px-20 py-16 bg-gray-900 text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-10 text-center">
        Contact Me
      </h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-lg space-y-4">
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows="5"
          className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition">
          {loading ? "Sending..." : "Send Message"}
        </button>

        {message && <p className="text-center mt-3 text-sm">{message}</p>}
      </form>
    </section>
  );
};

export default Contact;
