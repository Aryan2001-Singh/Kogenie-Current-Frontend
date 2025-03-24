"use client";
import React, { useState } from "react";

const ContactForm4 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("https://api.kogenie.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } 
    catch (err) {
      console.error("Error submitting contact form:", err); // Log the error
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {submitted && (
        <p className="text-green-600 mb-4">✅ Thanks! We’ll get back to you soon.</p>
      )}
      {error && (
        <p className="text-red-600 mb-4">{error}</p>
      )}
      <div className="row controls">
        <div className="col-12">
          <div className="input-group-meta form-group mb-30">
            <label className="text-gray-700 font-medium">Name*</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Who are we chatting with?"
              required
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#4a5abb] transition-all"
            />
          </div>
        </div>

        <div className="col-12">
          <div className="input-group-meta form-group mb-30">
            <label className="text-gray-700 font-medium">Email*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Where can we reach you?"
              required
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#4a5abb] transition-all"
            />
          </div>
        </div>

        <div className="col-12">
          <div className="input-group-meta form-group mb-30">
            <label className="text-gray-700 font-medium">Message*</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us what’s on your mind..."
              required
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#4a5abb] transition-all"
            ></textarea>
          </div>
        </div>

        <div className="col-12">
          <button
            type="submit"
            className="w-full bg-[#4a5abb] text-white py-3 rounded-md text-lg font-semibold hover:bg-[#3c4a99] transition-all duration-300"
          >
            SEND MESSAGE
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm4;