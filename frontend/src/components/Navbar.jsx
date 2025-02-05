import React, { useEffect, useState } from "react";
import { FaLinkedin, FaSquareFacebook, FaSquareGithub } from "react-icons/fa6";
import { LuMenu } from "react-icons/lu";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png.webp";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  // Disable body scroll when the menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }

    // Cleanup function to reset overflow when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Close the menu
  };

  const menu = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Service", path: "/service" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="py-6 border-b border-gray-300 sticky top-0 bg-white z-50 mb-7">
      <nav className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="logo" className="h-10" />{" "}
          {/* Added fixed height for logo */}
        </Link>
        <ul className="hidden md:flex gap-10">
          {menu.map((item, index) => (
            <li key={index}>
              <Link
                className="text-[17px] text-gray-700 hover:text-black transition-colors"
                to={item.path}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden lg:flex items-center gap-4">
          <a
            className="w-10 h-10 border-[1.4px] border-gray-300 hover:border-gray-800 text-gray-700 hover:text-gray-800 transition-colors flex items-center justify-center text-xl rounded-lg"
            href="https://www.facebook.com/coder.rohan1"
            target="_blank"
          >
            <FaSquareFacebook className="text-current" />
          </a>
          <a
            className="w-10 h-10 border-[1.4px] border-gray-300 hover:border-gray-800 text-gray-700 hover:text-gray-800 transition-colors flex items-center justify-center text-xl rounded-lg"
            href="https://www.linkedin.com/in/md-rohanul-haque"
            target="_blank"
          >
            <FaLinkedin className="text-current" />
          </a>
          <a
            className="w-10 h-10 border-[1.4px] border-gray-300 hover:border-gray-800 text-gray-700 hover:text-gray-800 transition-colors flex items-center justify-center text-xl rounded-lg"
            href="https://github.com/Dev-Rohan1"
            target="_blank"
          >
            <FaSquareGithub className="text-current" />
          </a>
        </div>
        <span className="md:hidden cursor-pointer" onClick={toggleMenu}>
          <LuMenu className="text-2xl" />
        </span>
      </nav>

      {/* Responsive Menu */}
      <div
        className={`fixed inset-0 z-50 transition-opacity ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMenu}
      >
        {/* Overlay with a subtle background color */}
        <div
          className={`fixed inset-0  bg-opacity-30 transition-opacity ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        ></div>

        {/* Menu Panel */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()} // Prevent clicks inside the menu from closing it
        >
          <div className="p-6">
            {/* Menu Links */}
            <ul className="space-y-4">
              {menu.map((item, index) => (
                <li key={index}>
                  <Link
                    className="text-[17px] text-gray-700 hover:text-black transition-colors"
                    to={item.path}
                    onClick={closeMenu} // Close the menu when a link is clicked
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Icons */}
            <div className="mt-8 flex items-center gap-4">
              <a
                className="w-10 h-10 border-[1.4px] border-gray-300 hover:border-gray-800 text-gray-700 hover:text-gray-800 transition-colors flex items-center justify-center text-xl rounded-lg"
                href="https://www.facebook.com/coder.rohan1"
                target="_blank"
              >
                <FaSquareFacebook className="text-current" />
              </a>
              <a
                className="w-10 h-10 border-[1.4px] border-gray-300 hover:border-gray-800 text-gray-700 hover:text-gray-800 transition-colors flex items-center justify-center text-xl rounded-lg"
                href="https://www.linkedin.com/in/md-rohanul-haque"
                target="_blank"
              >
                <FaLinkedin className="text-current" />
              </a>
              <a
                className="w-10 h-10 border-[1.4px] border-gray-300 hover:border-gray-800 text-gray-700 hover:text-gray-800 transition-colors flex items-center justify-center text-xl rounded-lg"
                href="https://github.com/Dev-Rohan1"
                target="_blank"
              >
                <FaSquareGithub className="text-current" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
