// src/Footer.js
import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-8 lg:px-16 rounded-tl-lg rounded-tr-lg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-purple-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-purple-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-purple-400 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="hover:text-purple-400 transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-purple-400 transition-colors"
                >
                  Contact
                </a>
              </li>
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
                <a
                  href="mailto:rohanul.cse@gmail.com"
                  className="hover:text-purple-400 transition-colors"
                >
                  dev.rohan2024@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+8801234567890"
                  className="hover:text-purple-400 transition-colors"
                >
                  +8801707474429 or +8801896486337
                </a>
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
