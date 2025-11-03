// src/pages/Capstone.js
import Navbar from "../components/Navbar";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import architectural from "../assets/architectural-diagrams.png";
import design from "../assets/system-design.jpeg";
import test from "../assets/testing.webp";
import javascriptImg from "../assets/JavaScript.png";
import ImageModal from "../components/ImageModal";
import { useState, useEffect } from "react";

function Capstone() {
  // Add state for the modal
  const [modalImage, setModalImage] = useState({
    isOpen: false,
    url: "",
    alt: "",
  });

  // Prevent scroll when modal is open
  useEffect(() => {
    if (modalImage.isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [modalImage.isOpen]);

  // Handler to open modal
  const openModal = (imageUrl, altText) => {
    setModalImage({ isOpen: true, url: imageUrl, alt: altText });
  };

  // Handler to close modal
  const closeModal = () => {
    setModalImage({ isOpen: false, url: "", alt: "" });
  };

  return (
    <div className="homepage">
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-center">
          <h1>Software Developer</h1>
          <h3>Web Development | Databases</h3>
        </div>
      </section>

      <main>
        <div className="container projects-section">
          {/* Project Title */}
          <div className="projects-header">
            <h2>Capstone Project</h2>
          </div>

          {/* First Sub-Container (half-height, GitHub on far right) */}
          <div className="project-box half-height">
            <h2>Project Title</h2>

            <div className="project-top-content">
              <img
                src={javascriptImg}
                alt="Profile"
                className="profile-img"
                onClick={() => openModal(javascriptImg, "Profile")}
                loading="lazy"
              />

              <div className="project-description">
                <p>
                  Showcases mastery of Node.js backend, asynchronous
                  programming, Websockets for real-time collaboration, GraphQL
                  APIs, authentication with JWT, database management (SQL &
                  NoSQL), TypeScript usage, and deployment. Reflects modern
                  JavaScript ecosystem and frontend-backend integration.
                </p>
              </div>

              <div className="github-link">
                <a
                  href="https://github.com/obakengshepherd/InsurancePlatform"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Repository"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "#f97316")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "white")}
                >
                  <FaGithub size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Separator */}
          <h2 style={{ marginTop: "1rem" }}>
            Project Title - Behind the Scenes
          </h2>

          {/* Sub-1 */}
          <div className="project-box stretched">
            <h2>Architectural Diagram</h2>
            <h3>Visuals</h3>
            <div className="sub-content">
              <img
                src={architectural}
                alt="architectural-diagrams"
                className="project-image"
                onClick={() =>
                  openModal(architectural, "architectural-diagrams")
                }
                loading="lazy"
              />
              <p>Mini description about the architecture diagram visuals.</p>
            </div>
          </div>

          {/* Sub-2 */}
          <div className="project-box stretched">
            <h2>System Design Document</h2>
            <h3>Documentation</h3>
            <div className="sub-content">
              <img
                src={design}
                alt="system-design"
                className="project-image"
                onClick={() => openModal(design, "system-design")}
                loading="lazy"
              />
              <p>Mini description about the system design documentation.</p>
            </div>
          </div>

          {/* Sub-3 */}
          <div className="project-box stretched">
            <h2>Test and Coverage Show</h2>
            <h3>Testing</h3>
            <div className="sub-content">
              <img
                src={test}
                alt="testing"
                className="project-image"
                onClick={() => openModal(test, "testing")}
                loading="lazy"
              />
              <p>Mini description about testing and coverage results.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Add the modal component */}
      <ImageModal
        isOpen={modalImage.isOpen}
        imageUrl={modalImage.url}
        altText={modalImage.alt}
        onClose={closeModal}
      />

      {/* Contact Me Section */}
      <section id="contact" className="contact-container">
        <h2>Contact Me</h2>
        <div className="contact-items">
          <div>
            <FaPhone aria-hidden="true" /> <span>067 630 8354</span>
          </div>
          <div>
            <FaEnvelope aria-hidden="true" />{" "}
            <span>obakengtsaagane@gmail.com</span>
          </div>
          <div>
            <a
              href="https://linkedin.com/in/obakeng-tsaagane-307544244"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              style={{
                color: "white",
                textDecoration: "none",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#f97316")}
              onMouseOut={(e) => (e.currentTarget.style.color = "white")}
            >
              <FaLinkedin aria-hidden="true" /> <span>LinkedIn</span>
            </a>
          </div>
          <div>
            <a
              href="https://github.com/obakengshepherd"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              style={{
                color: "white",
                textDecoration: "none",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#f97316")}
              onMouseOut={(e) => (e.currentTarget.style.color = "white")}
            >
              <FaGithub aria-hidden="true" /> <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Capstone;
