import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const SERVICE_ID = "service_8dzzytq"; // Replace
    const TEMPLATE_TO_YOU = "template_6wtdt7n"; // Replace
    const TEMPLATE_CONFIRM = "template_tvzrqyl"; // Replace
    const PUBLIC_KEY = "1-pZ3f4PEFNrrpeSQ"; // Replace

    // Send email to you
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_TO_YOU, form.current, PUBLIC_KEY)
      .then(() => {
        // Send confirmation to sender
        emailjs
          .sendForm(SERVICE_ID, TEMPLATE_CONFIRM, form.current, PUBLIC_KEY)
          .then(() => {
            setIsSuccess(true);
            setModalMessage(
              "✅ Your message has been sent successfully! A confirmation email is on its way to your inbox."
            );
            setModalOpen(true);
            setLoading(false);
            form.current.reset();
          })
          .catch(() => {
            setIsSuccess(false);
            setModalMessage(
              "⚠️ Message sent, but we couldn’t send the confirmation email."
            );
            setModalOpen(true);
            setLoading(false);
          });
      })
      .catch(() => {
        setIsSuccess(false);
        setModalMessage("❌ Failed to send message. Please try again later.");
        setModalOpen(true);
        setLoading(false);
      });
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
      </form>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4 z-50">
          <div className="bg-gray-800 rounded-lg p-6 max-w-sm w-full shadow-lg">
            <h3
              className={`text-lg font-bold mb-4 ${
                isSuccess ? "text-green-400" : "text-red-400"
              }`}>
              {isSuccess ? "Success!" : "Oops!"}
            </h3>
            <p className="text-gray-300 mb-6">{modalMessage}</p>
            <button
              onClick={() => setModalOpen(false)}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
