import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Journey from "./Images/journey.png";
import Vr from "./Images/vr.png";
import AMG from "./Images/amg.png";
import misbar from "./Images/misbar.png";
import online from "./Images/onlinecourse.png";
import dashboard from "./Images/fishdashboard.png";
import fish from "./Images/fish.png";
import baseerat from "./Images/baseerat.png";
import uoh from './Images/uoh.jpg'
import welcome from "./Images/welcome.png";
import room from "./Images/room.png";
import qts from "./Images/image.png";
import Modal from "./Modal";

gsap.registerPlugin(ScrollTrigger);

const ImageGallery = ({ isDarkMode }) => {
  const imagesRef = useRef([]);
  const headingRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    // { src: welcome, name: "Al Faisal Space Management" },
    { src: Journey, name: "Journey Xtreme" },
    // { src: qts, name: "Qts Team Solution" },
    // { src: misbar, name: "Misbar Build" },
    // { src: fish, name: "Fish Farm" },
    // { src: room, name: "Al Faisal Space Management" },
    // { src: uoh, name: "University of Haripur Admission Portal" },
    // { src: baseerat, name: "Baseerat Academy" },
    { src: AMG, name: "AMG Dashboard" },
    // { src: dashboard, name: "Fish Farm Dashboard" },
    { src: Vr, name: "Virtual Reality Tours" },
    { src: online, name: "Online Course Website" },
  ];

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    imagesRef.current.forEach((image) => {
      gsap.fromTo(
        image,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: image,
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play none none reverse",
            scrub: true,
          },
        }
      );
    });
  }, []);

  const openModal = (index) => {
    setSelectedImage(projects[index].src);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
    setSelectedImage(projects[(currentIndex + 1) % projects.length].src);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
    setSelectedImage(
      projects[(currentIndex - 1 + projects.length) % projects.length].src
    );
  };

  return (
    <div
      id="works"
      className={`relative pt-10 ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <h2 ref={headingRef} className="text-center text-5xl text-indigo-600 font-bold pb-2">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {projects.map((project, index) => (
          <div
            key={index}
            ref={(el) => (imagesRef.current[index] = el)}
            className="relative w-full h-80 overflow-hidden rounded-lg shadow-lg cursor-pointer"
            onClick={() => openModal(index)}
          >
            <img
              src={project.src}
              alt={project.name}
              className="object-cover w-full h-full transition-transform duration-500"
            />
            <div
              className={`absolute bottom-0 left-0 w-full p-2 ${
                isDarkMode ? "bg-black bg-opacity-50" : "bg-gray-300"
              } text-center`}
            >
              <span className={isDarkMode ? "text-white" : "text-black"}>
                {project.name}
              </span>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <Modal
          image={selectedImage}
          onClose={closeModal}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </div>
  );
};

export default ImageGallery;
