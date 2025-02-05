import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import heroImage from "../assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="bg-purple-50 py-12 px-4 sm:px-8 lg:px-16 rounded-2xl mb-6">
      <div className="container mx-auto flex flex-col items-center justify-between lg:flex-row">
        {/* Text Content */}
        <div className="text-center lg:text-left lg:w-1/2">
          <span className="text-xl md:text-2xl text-purple-900 mb-2 font-bold block">
            Hi! I'm Rohan
          </span>

          <TypeAnimation
            key="type-animation" // Unique key to avoid rendering issues
            sequence={[
              "I am a Web Developer",
              1000,
              "I am a Blogger",
              1000,
              "I am a Youtuber",
              1000,
              "I am a Freelancer",
              1000,
            ]}
            speed={50}
            className="font-bold text-2xl sm:text-3xl lg:text-4xl text-purple-600"
            style={{ display: "inline-block" }}
            repeat={Infinity}
          />
          <p className="mt-4 md:text-lg">
            I break down complex user experience problems to create
            integrity-focused solutions that connect billions of people.
          </p>
          <div className="mt-8">
            <Link
              to={"/contact"}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="mt-10 lg:mt-0 md:w-[35%] flex justify-center">
          <img
            src={heroImage}
            alt="Rohanul Haque Rohan"
            className="rounded-2xl shadow-lg w-full max-w-md transition-transform duration-400 ease-in-out transform rotate-0 md:rotate-6 hover:rotate-0 hover:border-4 hover:p-[1px] hover:border-purple-600"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
