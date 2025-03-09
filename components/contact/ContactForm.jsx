import React from "react";

const ContactForm4 = () => {
  return (
    <form action="#">
      <div className="messages" />
      <div className="row controls">
        {/* Name Field */}
        <div className="col-12">
          <div className="input-group-meta form-group mb-30">
            <label className="text-gray-700 font-medium">Name*</label>
            <input
              type="text"
              placeholder="Who are we chatting with?"
              name="name"
              required
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#4a5abb] transition-all"
            />
          </div>
        </div>

        {/* Email Field */}
        <div className="col-12">
          <div className="input-group-meta form-group mb-30">
            <label className="text-gray-700 font-medium">Email*</label>
            <input
              type="email"
              placeholder="Where can we reach you?"
              name="email"
              required
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#4a5abb] transition-all"
            />
          </div>
        </div>

        {/* Message Field */}
        <div className="col-12">
          <div className="input-group-meta form-group mb-30">
            <label className="text-gray-700 font-medium">Message*</label>
            <textarea
              placeholder="Tell us what’s on your mind..."
              name="message"
              required
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#4a5abb] transition-all"
            ></textarea>
          </div>
        </div>

        {/* ✅ Styled Send Button */}
        <div className="col-12">
          <button
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
