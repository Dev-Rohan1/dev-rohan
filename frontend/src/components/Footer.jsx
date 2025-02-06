import React, { useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-8 lg:px-16 rounded-tl-lg rounded-tr-lg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", to: "/" },
                { name: "About", to: "/about" },
                { name: "Services", to: "/service" },
                { name: "Blog", to: "/blog" },
                { name: "Contact", to: "/contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={() => handleLinkClick(link.to)}
                    className={`${
                      activeLink === link.to
                        ? "text-purple-500"
                        : "hover:text-purple-400 transition-colors"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/coder.rohan1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 flex items-center justify-center rounded-full hover:bg-purple-600 transition-colors"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/md-rohanul-haque"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 flex items-center justify-center rounded-full hover:bg-purple-600 transition-colors"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href="https://github.com/Dev-Rohan1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 flex items-center justify-center rounded-full hover:bg-purple-600 transition-colors"
              >
                <FaGithub className="text-xl" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li>
                <span>dev.rohan2024@gmail.com</span>
              </li>
              <li>
                <span>+8801707474429 or +8801896486337</span>
              </li>
              <li>
                <p>Boro Hasimpur, Chiribondor, Dinajpur, Bangladesh</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} All rights reserved by
            <b className="ml-1">Rohan</b>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
