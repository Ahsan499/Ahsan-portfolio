import React, { useEffect } from "react";
import {
  FaLaravel ,
  FaVuejs,
  FaBootstrap,
  FaDatabase,
  FaPalette,
  FaJs 
} from "react-icons/fa";
import { SiVuetify, SiMicrosoftazure } from "react-icons/si";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; 

gsap.registerPlugin(ScrollTrigger); 

const Services = ({ isDarkMode }) => {
  const skills = [
    { name: "Laravel", icon: <FaLaravel  className="text-blue-400" /> },
    { name: "Vue JS", icon: <FaVuejs className="text-green-400" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-400" /> },
    { name: "Vuetify", icon: <SiVuetify  className="text-teal-400" /> },
    { name: "My SQL", icon: <FaDatabase className="text-orange-400" /> },
    { name: "js", icon: <FaJs  className="text-yellow-400" /> },
    { name: "API Integration", icon: <FaPalette className="text-green-300" /> },
    { name: "Azure", icon: <SiMicrosoftazure className="text-blue-300"/>}
  ];

  useEffect(() => {
    gsap.fromTo(
      ".skill",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".skills-section", 
          start: "top 80%", 
          toggleActions: "play none none reverse", 
        },
      }
    );
  }, []);

  return (
    <div id="services" className={`flex flex-col items-center p-8 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
      <div className="md:w-full text-center">
        <h2 className="text-4xl font-extrabold text-indigo-600 mb-4">
          Services
        </h2>
        <p className="mb-6 text-gray-400 text-center dark:text-gray-700">
        My approach to Website Developer is to create a website that strengthens your company’s brand while ensuring ease of use and simplicity for your audience.
        </p>
      </div>

      <div className="skills-section grid grid-cols-2 md:grid-cols-4 gap-4 w-full text-center">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center skill mb-6">
            <span className="text-4xl mb-2">{skill.icon}</span>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
