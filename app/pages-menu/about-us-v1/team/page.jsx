"use client";
import React from "react";
import Image from "next/image";

const TeamCards = () => {
  console.log("✅ TeamCards component rendered!"); // Debugging

  const team = [
    { 
      name: "John Doe", 
      role: "CEO", 
      img: "/images/media/img_12.jpg", 
      email: "john@example.com",
      linkedin: "#",
      twitter: "#",
      instagram: "#",
      facebook: "#"
    },
    { 
      name: "Jane Smith", 
      role: "CTO", 
      img: "/images/team/aryan.jpg", 
      email: "jane@example.com",
      linkedin: "#",
      twitter: "#",
      instagram: "#",
      facebook: "#"
    },
    { 
      name: "Alice Johnson", 
      role: "Designer", 
      img: "/images/team/ayushi.jpg", 
      email: "alice@example.com",
      linkedin: "#",
      twitter: "#",
      instagram: "#",
      facebook: "#"
    },
    { 
      name: "Michael Brown", 
      role: "Marketing Head", 
      img: "/images/team/ceo.jpg", 
      email: "michael@example.com",
      linkedin: "#",
      twitter: "#",
      instagram: "#",
      facebook: "#"
    }
  ];

  return (
    <section className="w-full bg-gray-100 py-16 flex flex-col items-start px-10">
      <h2 className="text-4xl font-bold text-gray-900 mb-10">
        Meet Our <span className="text-indigo-600">Team</span>
      </h2>

      {/* Flexbox for Horizontal Cards (Left-Aligned) */}
      <div className="flex flex-wrap justify-start gap-6 w-full">
        {team.map((member, index) => (
          <div 
            key={index} 
            className="bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl w-[300px] h-[420px]"
          >
            {/* Image Section */}
            <div className="relative w-full h-56">
              <Image
                src={member.img}
                alt={member.name}
                layout="fill"
                className="object-cover"
              />
            </div>

            {/* Details Section */}
            <div className="p-4 text-left">
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
              <p className="text-sm text-gray-600 mt-2">{member.email}</p>

              {/* Social Icons */}
              <div className="flex space-x-4 mt-3">
                <a href={member.linkedin} target="_blank" className="text-gray-600 hover:text-blue-600 text-lg">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href={member.twitter} target="_blank" className="text-gray-600 hover:text-blue-400 text-lg">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href={member.instagram} target="_blank" className="text-gray-600 hover:text-pink-500 text-lg">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href={member.facebook} target="_blank" className="text-gray-600 hover:text-blue-700 text-lg">
                  <i className="fab fa-facebook"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamCards;
