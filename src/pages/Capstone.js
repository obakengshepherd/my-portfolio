// src/pages/Capstone.js
import Navbar from "../components/Navbar";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import architectural from "../assets/architectural-diagram.png";
import design from "../assets/system-design.jpeg";
import test from "../assets/testing.png";
import test1 from "../assets/testing1.png";
import test2 from "../assets/testing2.png";
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
            <h2>Capstone Project - InsureClaim</h2>
          </div>

          {/* First Sub-Container (half-height, GitHub on far right) */}
          <div className="project-box half-height">
            <h2>InsureClaim – Full-Stack Insurance SaaS</h2>

            <div className="project-top-content">
              <img
                src={javascriptImg}
                alt="Profile"
                className="project-image"
                onClick={() => openModal(javascriptImg, "Profile")}
                loading="lazy"
              />

              <div className="project-description">
                <p>
                  <strong>InsureClaim</strong> is a full-stack insurance
                  management SaaS platform developed as a Capstone Project. It
                  demonstrates mastery in building a modular, role-based system
                  with <strong>.NET 8 Web API</strong> and{" "}
                  <strong>React 18 (Vite + Tailwind)</strong>. Key features
                  include JWT authentication, policy management, claims
                  workflows, mock payments, and reporting dashboards. This
                  project highlights real-world implementation of{" "}
                  <strong>Clean Architecture</strong>, database engineering,
                  backend automation, and scalable frontend integration.
                </p>
              </div>

              <div className="github-link">
                <a
                  href="https://github.com/obakengshepherd/InsureClaim"
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
          <h2 style={{ marginTop: "1rem" }}>InsureClaim - Behind the Scenes</h2>

          {/* Sub-1 */}
          <div className="project-box stretched">
            <h2>Architectural Diagram</h2>
            <h3>Visuals</h3>
            <div className="sub-content">
              <img
                src={architectural}
                alt="architectural-diagram"
                className="project-image"
                onClick={() =>
                  openModal(architectural, "architectural-diagram")
                }
                loading="lazy"
              />
              <p>
                The architecture follows a multi-layered structure based on{" "}
                <strong>Clean Architecture</strong> principles, separating the
                API, business logic, and data layers. It supports modular growth
                for claims, policies, and analytics modules within the
                InsureClaim SaaS ecosystem.
              </p>
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
              <p>
                The system design document details the database schema,
                workflows, and relationships between core entities, such as
                Users, Policies, Claims, and Payments. It captures data flow,
                CTE-based reporting logic, and endpoint integrations for the
                InsureClaim SaaS backend.
              </p>
            </div>
          </div>

          {/* Sub-3 */}
          <div className="project-box stretched">
            <h2>Test and Coverage Show</h2>
            <h3>Testing</h3>
            <div className="sub-content">
              <p>
                Automated tests using <strong>xUnit</strong> validate API
                endpoints, data integrity, and authentication flows. Unit and
                integration tests ensure stability across modules and support
                consistent performance within the InsureClaim SaaS application.
              </p>
              <img
                src={test}
                alt="testing"
                className="project-image"
                onClick={() => openModal(test, "testing")}
                loading="lazy"
              />
              <img
                src={test}
                alt="testing1"
                className="project-image"
                onClick={() => openModal(test1, "testing1")}
                loading="lazy"
              />
              <img
                src={test}
                alt="testing2"
                className="project-image"
                onClick={() => openModal(test2, "testing2")}
                loading="lazy"
              />
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
