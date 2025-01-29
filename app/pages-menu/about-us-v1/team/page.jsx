"use client";
import React from "react";
import Image from "next/image";
const TeamCards = () => {
  const team = [
    { 
      name: "John Doe", 
      role: "CEO", 
      img: "/images/team/ceo.jpg", 
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
    },
    { 
      name: "Emily Davis", 
      role: "Lead Developer", 
      img: "/images/team/aryan.jpg", 
      email: "emily@example.com",
      linkedin: "#",
      twitter: "#",
      instagram: "#",
      facebook: "#"
    },
    { 
      name: "David Wilson", 
      role: "Product Manager", 
      img: "/images/team/ayushi.jpg", 
      email: "david@example.com",
      linkedin: "#",
      twitter: "#",
      instagram: "#",
      facebook: "#"
    },
  ];

  return (
    <div className="container mx-auto py-16 px-6">
      <h2 className="text-center text-4xl font-extrabold mb-12 text-gray-900">
        Meet Our <span className="text-indigo-600">Team</span>
      </h2>

      {/* 3-column grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {team.map((member, index) => (
          <div 
            key={index} 
            className="relative group overflow-hidden rounded-xl shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-xl border border-transparent hover:border-indigo-500"
          >
            {/* Background Image with Overlay */}
            <div className="relative w-full h-[340px] rounded-xl overflow-hidden">
              <Image
                src={member.img}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Blue Overlay */}
              <div className="absolute inset-0 bg-indigo-700 opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
            </div>

            {/* Name & Role */}
            <div className="absolute bottom-5 left-5 right-5 text-white text-center transition-opacity duration-500 group-hover:opacity-0">
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-sm text-gray-200">{member.role}</p>
            </div>

            {/* Hover Effect: Additional Details */}
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 bg-indigo-900 bg-opacity-85 transition-opacity duration-500 p-6 rounded-xl">
              <h3 className="text-white text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-300 text-sm mb-2">{member.role}</p>
              <p className="text-gray-400 text-sm mb-3">{member.email}</p>

              {/* Social Media Links */}
              <div className="flex space-x-5 mt-2">
                <a href={member.linkedin} target="_blank" className="text-white text-xl hover:text-blue-400 transition duration-300">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href={member.twitter} target="_blank" className="text-white text-xl hover:text-blue-400 transition duration-300">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href={member.instagram} target="_blank" className="text-white text-xl hover:text-pink-400 transition duration-300">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href={member.facebook} target="_blank" className="text-white text-xl hover:text-blue-500 transition duration-300">
                  <i className="fab fa-facebook"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Responsive Styling */}
      <style jsx>{`
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        }

        @media (max-width: 1024px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .grid {
            grid-template-columns: repeat(1, 1fr);
          }
        }
      `}</style>
    </div>
  );
};

export default TeamCards;
