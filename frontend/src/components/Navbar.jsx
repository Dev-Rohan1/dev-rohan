import React, { useEffect, useState } from "react";
import { FaLinkedin, FaSquareFacebook, FaSquareGithub } from "react-icons/fa6";
import { LuMenu } from "react-icons/lu";
import { NavLink } from "react-router-dom"; // Use NavLink instead of Link
import logo from "../assets/logo.png.webp";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
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
        <NavLink to="/">
          <img src={logo} alt="logo" className="h-10" />
        </NavLink>
        <ul className="hidden md:flex gap-10">
          {menu.map((item, index) => (
            <li key={index}>
              <NavLink
                className={({ isActive }) =>
                  `text-[17px] transition-colors ${
                    isActive ? "text-black font-semibold" : "text-gray-700"
                  } hover:text-black`
                }
                to={item.path}
              >
                {item.name}
              </NavLink>
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
        <div
          className={`fixed inset-0 bg-opacity-30 transition-opacity ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        ></div>

        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6">
            <ul className="space-y-4">
              {menu.map((item, index) => (
                <li key={index}>
                  <NavLink
                    className={({ isActive }) =>
                      `text-[17px] transition-colors ${
                        isActive ? "text-black font-semibold" : "text-gray-700"
                      } hover:text-black`
                    }
                    to={item.path}
                    onClick={closeMenu}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>

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
