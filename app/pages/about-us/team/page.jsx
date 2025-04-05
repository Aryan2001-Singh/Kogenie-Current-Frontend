"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const TeamCards = () => {
  const team = [
    {
      name: "Saikat Sengupta",
      role: "CEO",
      email: "saikat@kogenie.com",
      img: "/images/team/ceo.jpg",
      linkedin:
        "https://www.linkedin.com/in/saikat-sengupta-875083119?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      instagram:
        "https://www.instagram.com/doobie_fly26?igsh=Y2xlMGxrNjZjdTZh",
    },
    {
      name: "Aryan Singh",
      role: "Full Stack Developer",
      email: "aryan@kogenie.com",
      img: "/images/team/aryan.jpg",
      linkedin:
        "https://www.linkedin.com/in/aryan-singh-3772b6214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      instagram:
        "https://www.instagram.com/____iamaryan____?igsh=eWRsbW9wemI5dHZm",
    },
    {
      name: "Ayushi Shrivastava",
      role: "Marketing Head",
      email: "ayushi@kogenie.com",
      img: "/images/team/ayushi.jpg",
      linkedin: "https://www.linkedin.com/in/aayushi-shrivastava-361614211/",
      instagram:
        "https://www.instagram.com/hikarinoinochi?igsh=azVxbWI0Z2Rjc2xo",
    },
    {
      name: "Kumkum Saini",
      role: "Frontend Developer",
      email: "kumkum@kogenie.com",
      img: "/images/team/Kumkum.jpg",
      linkedin:
        "https://www.linkedin.com/in/kumkum-saini-322a08244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      instagram:
        "https://www.instagram.com/ks_dahiya28?igsh=MTdqdDBndDRlMzdqaA%3D%3D&utm_source=qr",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-br from-white via-indigo-50 to-indigo-100 py-20 px-6 flex flex-col items-center">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
          Our <span className="text-indigo-600">Leadership Team</span>
        </h2>
        <p className="text-gray-500 text-md mt-4 mb-6 max-w-2xl mx-auto">
          We are a team of passionate individuals dedicated to revolutionizing
          marketing. Meet the people who drive innovation and success at{" "}
          <span className="font-semibold text-indigo-600">Kogenie</span>.
        </p>
      </div>

      {/* Grid Layout with scroll animation */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-7xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {team.map((member, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center overflow-hidden shadow-xl transition-transform duration-300 w-[300px] h-[360px] bg-white group"
          >
            {/* Image Container with hover zoom effect */}
            <div className="w-full h-full overflow-hidden relative group">
              <Image
                src={member.img}
                alt={member.name}
                width={300}
                height={360}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              />

              {/* Glass Overlay Info Section */}
              <div className="absolute bottom-0 w-full text-center px-4 py-3 bg-white/20 backdrop-blur-lg border-t border-white/40 rounded-b-xl ">
                <h3 className="text-base font-semibold text-black drop-shadow-sm">
                  {member.name}
                </h3>
                <p className="text-sm text-indigo-100 font-medium drop-shadow-sm">
                  {member.role}
                </p>
                <a
                  href={`mailto:${member.email}`}
                  className="text-sm text-indigo-600 mt-1 inline-block drop-shadow-sm underline transition duration-300 hover:text-white hover:opacity-100 hover:font-medium"
                >
                  {member.email}
                </a>

                <div className="flex justify-center space-x-4 mt-2 text-black text-[20px] drop-shadow-sm">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-indigo-300 transition-all duration-300 transform hover:scale-110"
                  >
                    <i className="fab fa-linkedin" />
                  </a>
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-indigo-300 transition-all duration-300 transform hover:scale-110"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default TeamCards;
