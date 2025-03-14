import React, { useState, useRef } from "react";
import "./Header.css";
import { IoClose } from "react-icons/io5";
import { LiaBarsSolid } from "react-icons/lia";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const bottomRef = useRef(null);

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Function to close sidebar when a menu item is clicked
  const handleMenuClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className="header_section">
        {/* Header Section */}
        <div className="headerbar">
          {/* Menu Toggle */}
          <button className="menu-button" onClick={() => setMenuOpen(true)}>
            <LiaBarsSolid className="menubar" />
          </button>

          {/* Name */}
          <div className="name">Hemalatha</div>
        </div>

        {/* Sidebar */}
        {menuOpen && (
          <div className="sidebar">
            {/* Close Button Inside Sidebar */}
            <button className="close-button" onClick={() => setMenuOpen(false)}>
              <IoClose className="close-icon" />
            </button>

            <ul className="menu-list">
              <li>
                <a href="#home" onClick={handleMenuClick}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={handleMenuClick}>
                  About
                </a>
              </li>
              <li>
                <a href="#resume" onClick={handleMenuClick}>
                  Resume
                </a>
              </li>
              <li>
                <a href="#contact" onClick={handleMenuClick}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}

        {/* Main Section */}
        <div className="row" id="home">
          <div className="main_section">
            <h5 className="text">Hello, World.</h5>
            <h1>
              I<span style={{ color: "#CC005F" }}>'</span>m Hemalatha{" "}
              <span style={{ color: "#CC005F" }}>.</span>
            </h1>

            <p className="p_text">
              |<span className="role">Developer</span>|
              <span className="role">Trainer</span>|
              <span className="role">Player</span>|
            </p>

            <div className="more_about">
              <button onClick={scrollToBottom} className="button about">
                More About Me
              </button>
            </div>

            {/* Social Media Icons */}
            <div className="icon_section">
              <a
                href="https://www.linkedin.com/in/hemalatha-gnanavel-778a48325/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="social-media" />
              </a>
              <a
                href="https://github.com/Hemagnanavel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="social-media" />
              </a>
              <a
                href="https://www.instagram.com/hl_littleprincess/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="social-media" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section to Scroll To */}
        <div ref={bottomRef} className="bottom_section"></div>
      </div>
    </>
  );
};

export default Header;
