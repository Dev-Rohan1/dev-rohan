// src/components/About.js
import React from "react";
import { Link } from "react-router-dom";
import profileImage from "../assets/about.jpg"; // Ensure the path is correct

const About = () => {
  return (
    <section
      id="about"
      className="py-12 px-4 sm:px-8 lg:px-16 bg-purple-50 rounded-2xl mb-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:gap-16 items-center justify-between">
          {/* Image Section */}
          <div className="lg:mt-0 flex justify-center">
            <img
              src={profileImage}
              alt="Rohanul Haque Rohan"
              className="rounded-2xl shadow-lg w-[330px] h-[400px] object-cover transition-transform duration-400 ease-in-out transform rotate-0 md:rotate-6 hover:rotate-0 hover:border-4 hover:p-[1px] hover:border-purple-600"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-2/3 text-center md:text-left mt-10 md:mt-0">
            <h2 className="text-4xl font-bold text-gray-800 mb-2">About Me</h2>
            <span className="block h-1 w-20 bg-blue-600 rounded-full mb-8 m-auto md:m-0 "></span>
            <p className="text-lg text-gray-600 mb-4 mt-6">
              Hello! I'm a passionate web developer with experience in building
              responsive and user-friendly websites. I specialize in React JS,
              JavaScript, Node Js, Express Js, Mongodb and modern web
              technologies. I love turning ideas into reality through code.
            </p>
            <p className="text-lg text-gray-600 block">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or enjoying the outdoors.
            </p>
            <Link
              to={"/contact"}
              className="bg-purple-600 mt-5 text-white inline-block px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
