
"use client";
import React from "react";


const Map2 = () => {
  return (
    <div className="map-area-two h-100 w-100">
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            className="gmap_iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7010.029145088238!2d77.2522938!3d28.539281699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3d9e075d3c7%3A0x5475450898f498f3!2sBlock%20K%201%2C%20Chittaranjan%20Park%2C%20New%20Delhi%2C%20Delhi%20110019!5e0!3m2!1sen!2sin!4v1729490611510!5m2!1sen!2sin"
            width="600"
            height="400"
            style={{ border: 0 }} // Corrected the style attribute to an object
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default Map2;