// src/TeamSection.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; // Removed Navigation
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // This can be kept if you use other Swiper features
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa"; // Social icons
import image from "../assets/about.jpg"; // Ensure this path is correct

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      role: "Frontend Developer",
      image:
        "https://t3.ftcdn.net/jpg/06/32/91/32/360_F_632913287_pyej35IPG2tnAcqVxlD5QGlsJKUAYMhP.jpg",
      social: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        twitter: "https://twitter.com",
      },
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Backend Developer",
      image:
        "https://media.istockphoto.com/id/606633352/photo/senior-developer-at-work.jpg?s=612x612&w=0&k=20&c=rOWVowwjHzYPsjrjhiQdwk_sfXOqhdmnrk5aY821FWg=",
      social: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        twitter: "https://twitter.com",
      },
    },
    {
      id: 3,
      name: "Alice Johnson",
      role: "UI/UX Designer",
      image:
        "https://media.istockphoto.com/id/1265176370/photo/portrait-of-a-confident-young-businessman.jpg?s=612x612&w=0&k=20&c=Hr5Rn3WlBied-o4Qu2LiRc6wP_eHI8UMG9rl1v-_a9s=",
      social: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        twitter: "https://twitter.com",
      },
    },
    {
      id: 4,
      name: "Rohan",
      role: "Full Stack Developer",
      image: image,
      social: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        twitter: "https://twitter.com",
      },
    },
  ];

  return (
    <section className="bg-purple-50 py-12 px-4 sm:px-8 lg:px-16 rounded-2xl mb-6">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
          Our Developer Team
        </h2>
        <span className="block h-1 w-25 bg-blue-600 rounded-full mx-auto mb-10"></span>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination", // Custom pagination container
            type: "bullets", // Use bullets for pagination
          }}
          // Removed the navigation property
          modules={[Autoplay, Pagination]} // Removed Navigation from modules
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="relative"
        >
          {teamMembers.map((member) => (
            <SwiperSlide key={member.id}>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-all hover:scale-105 hover:shadow-xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-purple-200"
                />
                <h3 className="text-2xl font-bold text-purple-900">
                  {member.name}
                </h3>
                <p className="text-purple-600 mb-4">{member.role}</p>

                {/* Social Icons */}
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-900 transition-colors"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-900 transition-colors"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-900 transition-colors"
                  >
                    <FaTwitter size={24} />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Pagination */}
          <div className="swiper-pagination !relative !mt-8 !bottom-0" />

          {/* Removed Custom Navigation Arrows */}
        </Swiper>
      </div>
    </section>
  );
};

export default Team;
