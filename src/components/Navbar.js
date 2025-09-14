// src/components/Navbar.js
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const isHomepage = location.pathname === "/";

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // close mobile menu when route changes
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} role="navigation">
      <div className="navbar-left">
        <Link to="/" className="nav-link" aria-label="Home">Home</Link>
      </div>

      {/* Desktop links */}
      <div className="navbar-right">
        {isHomepage ? (
          <>
            <a href="#skills" className="nav-link">Skills</a>
            <a
              href="#projects"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                const projectsSection = document.getElementById("projects");
                if (projectsSection) projectsSection.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Projects
            </a>
            <a href="#contact" className="nav-link">Contact Me</a>
          </>
        ) : (
          <>
            <a href="#contact" className="nav-link">Contact Me</a>
          </>
        )}
      </div>

      {/* Hamburger */}
      <button
        className="hamburger"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span className={`bar ${menuOpen ? "open" : ""}`}></span>
        <span className={`bar ${menuOpen ? "open" : ""}`}></span>
        <span className={`bar ${menuOpen ? "open" : ""}`}></span>
      </button>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`} role="menu">
        {isHomepage ? (
          <>
            <a href="#skills" className="nav-link" onClick={() => setMenuOpen(false)}>Skills</a>
            <a
              href="#projects"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                const projectsSection = document.getElementById("projects");
                if (projectsSection) projectsSection.scrollIntoView({ behavior: "smooth" });
                setMenuOpen(false);
              }}
            >
              Projects
            </a>
            <a href="#contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact Me</a>
          </>
        ) : (
          <>
            <a href="#contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact Me</a>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
