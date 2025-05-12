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
  const [isHovered, setIsHovered] = useState(false);

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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send message");

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Error submitting contact form:", err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {submitted && (
        <p className="text-green-600 mb-4">✅ Thanks! We’ll get back to you soon.</p>
      )}
      {error && <p className="text-red-600 mb-4">{error}</p>}

      <div className="row controls space-y-6">
        <div className="col-12">
          <label htmlFor="name" className="text-gray-700 font-medium block mb-1">
            Name*
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Who are we chatting with?"
            required
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#4a5abb] transition-all"
          />
        </div>

        <div className="col-12">
          <label htmlFor="email" className="text-gray-700 font-medium block mb-1">
            Email*
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Where can we reach you?"
            required
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#4a5abb] transition-all"
          />
        </div>

        <div className="col-12">
          <label htmlFor="message" className="text-gray-700 font-medium block mb-1">
            Message*
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us what’s on your mind..."
            required
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#4a5abb] transition-all"
          ></textarea>
        </div>

        <div className="col-12">
          <button
            type="submit"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              backgroundColor: isHovered ? "#3c4a99" : "#4a5abb",
              transition: "background-color 0.3s ease",
            }}
            className="w-full text-white py-3 rounded-md text-lg font-semibold"
          >
            SEND MESSAGE
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm4;
