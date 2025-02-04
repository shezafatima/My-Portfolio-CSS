
"use client";

import { useState } from "react";
import "../../styles/navbar.css"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <span className="navbar-brand">Sheza Fatima</span>

        {/* Desktop Menu */}
        <div className="navbar-menu-container" id="navbar-default">
          <div className={`navbar-menu ${isOpen ? "block" : "hidden"}`}>
            <ul className="desktoplinks">
              <li className="text-[#7E22CE]">
                <a href="/" className="home-link" aria-current="page">
                  Home
                </a>
              </li>
              <li>
                <a href="#About">
                  About
                </a>
              </li>
              <li>
                <a href="#Skills">
                  Skills
                </a>
              </li>
              <li>
                <a href="#Services">
                  Services
                </a>
              </li>
              <li>
                <a href="#Projects">
                  Projects
                </a>
              </li>
              <li>
                <a href="#Contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <div className="mobile-toggle">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-9 h-9"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-links">
            <a href="/">Home</a>
            <a href="#About">About</a>
            <a href="#Services">Services</a>
            <a href="#Skills">Skills</a>
            <a href="#Projects">Projects</a>
            <a href="#Contact">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
