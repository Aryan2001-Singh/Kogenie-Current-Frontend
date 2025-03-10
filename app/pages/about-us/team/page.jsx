"use client";
import React from "react";
import Image from "next/image";

const TeamCards = () => {
  const team = [
    { 
      name: "Saikat Sengupta", 
      role: "CEO", 
      email: "saikat@kogenie.com",
      img: "/images/team/ceo.jpg",  
      linkedin: "#",
      twitter: "#",
      instagram: "#",
      facebook: "#"
    },
    { 
      name: "Aryan Singh", 
      role: "Full Stack Developer", 
      email: "aryan@kogenie.com",
      img: "/images/team/aryan.jpg",  
      linkedin: "#",
      twitter: "#",
      instagram: "#",
      facebook: "#"
    },
    { 
      name: "Ayushi Shrivastava", 
      role: "Marketing Head", 
      email: "ayushi@kogenie.com",
      img: "/images/team/ayushi.jpg",  
      linkedin: "#",
      twitter: "#",
      instagram: "#",
      facebook: "#"
    },
    { 
      name: "Kumkum Saini", 
      role: "Frontend Developer", 
      email: "kumkum@kogenie.com",
      img: "/images/team/Kumkum.jpg",  
      linkedin: "#",
      twitter: "#",
      instagram: "#",
      facebook: "#"
    }
  ];

  return (
    <section className="w-full bg-gray-50 py-16 px-6 flex flex-col items-center">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
          Our <span className="text-indigo-600">Leadership Team</span>
        </h2>
        <p style={{marginTop:"30px"}}className="text-gray-500 text-md mt-4 max-w-2xl mx-auto">
          We are a team of passionate individuals dedicated to revolutionizing marketing. 
          Meet the people who drive innovation and success at <span className="font-semibold text-indigo-600">Kogenie</span>.
        </p>
      </div>

      {/* Centered Flexbox Container */}
      <div className="w-full flex justify-center">
        <div style={{marginTop:"30px"}} className="flex flex-wrap justify-center gap-6 max-w-5xl">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="relative bg-white shadow-lg rounded-xl overflow-hidden w-[280px] sm:w-[300px] md:w-[320px] h-[450px] flex flex-col justify-between transform transition duration-300 hover:scale-105 hover:shadow-xl group"
            >
              {/* Image Section */}
              <div className="relative w-full h-[250px] overflow-hidden">
                <Image
                  src={member.img}
                  alt={member.name}
                  width={320} 
                  height={250} 
                  className="object-cover w-full h-full rounded-t-xl transition-transform duration-300 group-hover:scale-105"
                
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Details Section */}
              <div 
              style={{
                marginBottom: "30px"
              }}className="p-4 text-center flex-grow flex flex-col justify-center">
                <h3 className="text-md font-semibold text-gray-900">{member.name}</h3>
                <p className="text-sm font-medium text-[#546aec]">{member.role}</p>
                
                {/* Email Section */}
                <a href={`mailto:${member.email}`} className="text-xs text-gray-500 mt-1 hover:underline">
                  {member.email}
                </a>

                {/* Social Icons - Updated Hover Effect */}
                <div className="w-full flex justify-center space-x-4 mt-3">
                  {[
                    { link: member.linkedin, icon: "fab fa-linkedin" },
                    { link: member.twitter, icon: "fab fa-twitter" },
                    { link: member.instagram, icon: "fab fa-instagram" },
                    { link: member.facebook, icon: "fab fa-facebook" }
                  ].map((social, idx) => (
                    <a 
                      key={idx} 
                      href={social.link} 
                      target="_blank" 
                      className="text-gray-600 transition-all transform duration-300 hover:text-[#546aec] hover:scale-125 hover:-translate-y-1"
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>

              {/* Hover Effect on Entire Card */}
              <div 
                className="absolute inset-0 group-hover:bg-black group-hover:bg-opacity-10 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamCards;
