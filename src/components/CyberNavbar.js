import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  AiOutlineHome, 
  AiOutlineUser, 
  AiOutlineFundProjectionScreen,
  AiOutlineMail 
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function CyberNavbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (totalScroll / windowHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="cyber-navbar">
      <div className="nav-brand">
        <span className="brand-text">Alex Silva</span>
        <div className="brand-subtitle">Software Engineer</div>
      </div>
      
      <div className="nav-links">
        {[
          { to: "/", icon: <AiOutlineHome />, label: "Home" },
          { to: "/about", icon: <AiOutlineUser />, label: "About" },
          { to: "/project", icon: <AiOutlineFundProjectionScreen />, label: "Projects" },
          { to: "/resume", icon: <CgFileDocument />, label: "Resume" },
          { to: "/contact", icon: <AiOutlineMail />, label: "Contact" }
        ].map((item, index) => (
          <Link 
            key={item.to} 
            to={item.to} 
            className={`nav-link ${location.pathname === item.to ? 'active' : ''}`}
          >
            <div className="nav-icon">{item.icon}</div>
            <span className="nav-label">{item.label}</span>
            <div className="nav-indicator"></div>
          </Link>
        ))}
      </div>
      
      <div className="nav-progress">
        <div className="progress-circle">
          <svg viewBox="0 0 36 36" className="circular-chart">
            <path className="circle-bg"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path 
              className="circle"
              strokeDasharray={`${scrollProgress}, 100`}
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
}

export default CyberNavbar;
