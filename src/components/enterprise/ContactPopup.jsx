import { useState } from "react";
import emailjs from "@emailjs/browser";

function ContactPopup({ onClose }) {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    contact: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        "service_sbt736e",
        "template_egp94xk",
        formData,
        "foYfPnBsIZhNYNNl-",
      );
      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    /* Backdrop */
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      {/* Popup card */}
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black text-2xl font-bold transition"
        >
          x
        </button>

        {/* Header */}
        <h2 className="text-2xl font-black text-black mb-1">Talk to us</h2>
        <p className="text-gray-400 text-sm mb-6">
          Fill in your details and we'll get back to you shortly.
        </p>

        {/* Success state */}
        {status === "success" ? (
          <div className="text-center py-10">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-xl font-bold text-black mb-2">Message Sent!</h3>
            <p className="text-gray-400 text-sm">
              We've received your inquiry and will get back to you soon.
            </p>
            <button
              onClick={onClose}
              className="mt-6 bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Name */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Full Name *
              </label>
              <input
                type="text"
                name="from_name"
                required
                value={formData.from_name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Email Address *
              </label>
              <input
                type="email"
                name="from_email"
                required
                value={formData.from_email}
                onChange={handleChange}
                placeholder="john@company.com"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition"
              />
            </div>

            {/* Contact */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Contact Number *
              </label>
              <input
                type="tel"
                name="contact"
                required
                value={formData.contact}
                onChange={handleChange}
                placeholder="+1 98XXX XXXXX"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Summary of your need *
              </label>
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us briefly what you're looking for..."
                rows={4}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition resize-none"
              />
            </div>

            {/* Error message */}
            {status === "error" && (
              <p className="text-red-500 text-sm">
                Something went wrong. Please try again.
              </p>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-orange-500 text-white font-semibold py-3 rounded-full hover:bg-orange-600 transition disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ContactPopup;
