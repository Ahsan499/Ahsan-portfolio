import React from "react";
import image from './Images/me.jpeg';
import Typing from 'react-typing-effect';

const Portfolio = () => {
  const services = [
    "Web Developer",
    "Freelancer",
  ];

  return (
    <div id="#" className="relative flex flex-col items-center justify-center min-h-screen">
      <img
        className="absolute top-0 left-0 right-0 mx-auto  bg-cover  w-full  h-full  "
        src={image}
        alt="Mustehsan Ali"
      />
      <div className="hidden lg:block absolute -bottom-1/4 right-0 left-0 mx-auto w-big h-big bg-indigo-900 rounded-full -z-10"></div>
      <div className="absolute top-1/3 left-5 text-xl sm:left-10 sm:text-4xl mt-24 md:left-1/4 md:text-6xl lg:left-5 xl:left-35 xl:text-7xl font-bold">
        <span className="text-gray-400">Ahsan Taqweem</span>
        <br/>
        <Typing
          text={services}
          speed={50}
          eraseSpeed={50}
          eraseDelay={2000}
          typingDelay={1000}
          className="text-red-500"
        />
      </div>
      <div className="hidden lg:flex flex-col gap-5 rounded-md shadow-lg absolute top-0 bottom-0 m-auto right-5 bg-white dark:bg-slate-900 dark:shadow-slate-800 p-6 h-fit w-1/4 mt-28 mb-6">
        <h1 className="text-3xl font-bold text-indigo-900">Hi, I'm Ahsan Taqweem</h1>
        <p className="text-gray-400 dark:text-red-300">
          I am a Senior Full Stack Developer with 2 years of experience in
          building robust and scalable real-time applications. Throughout my
          career, I have successfully delivered projects in diverse industries,
          including logistics, which has provided me with in-depth knowledge of
          the domain.
        </p>
        <a
          className="bg-indigo-600 text-white text-center text-xl px-3 py-2 rounded-md font-semibold w-fit"
          href="#contact"
        >
          Hire Me
        </a>
      </div>
    </div>
  );
};

export default Portfolio;