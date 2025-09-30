import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
  AiOutlineFile,
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlineClose
} from "react-icons/ai";

function FloatingNav() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = totalScroll / windowHeight;
      setScrollProgress(scroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", icon: AiOutlineHome, label: "Home", id: "home" },
    { path: "/about", icon: AiOutlineUser, label: "About", id: "about" },
    { path: "/project", icon: AiOutlineFundProjectionScreen, label: "Projects", id: "projects" },
    { path: "/resume", icon: AiOutlineFile, label: "Resume", id: "resume" },
    { path: "/contact", icon: AiOutlineMail, label: "Contact", id: "contact" }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Floating Navigation */}
      <div className="floating-nav">
        <div className="nav-progress" style={{ transform: `scaleX(${scrollProgress})` }}></div>
        
        <div className="nav-items">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.id}
                to={item.path}
                className={`nav-item ${isActive(item.path) ? 'active' : ''}`}
                data-tooltip={item.label}
              >
                <Icon />
                <span className="nav-ripple"></span>
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
        <div className="mobile-nav-content">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.id}
                to={item.path}
                className={`mobile-nav-item ${isActive(item.path) ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                <Icon />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default FloatingNav;
