// src/pages/Project361.js
import Navbar from "../components/Navbar";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import Media1 from "../assets/Media1.mp4";
import architectureImg from "../assets/system-architecture.png";
import systemDesignImg from "../assets/system-design-diagram.png";
import prototypeImg from "../assets/3d-glasses-prototype.jpg";
import ImageModal from "../components/ImageModal";
import { useState, useEffect } from "react";

function Project361() {
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
            <h2>AI-Powered Anti-Sleep Glasses</h2>
          </div>

          {/* First Sub-Container (half-height) */}
          <div className="project-box stretched">
            <h3>IoT | Embedded AI | Computer Vision | Safety Innovation</h3>

            <div className="sub-content">
              <img
                src={prototypeImg}
                alt="3D Prototype of Anti-Sleep Glasses"
                className="project-image"
                onClick={() =>
                  openModal(prototypeImg, "3D Prototype of Anti-Sleep Glasses")
                }
                loading="lazy"
              />

              <div className="project-description">
                <p>
                  AI-powered wearable glasses that detect driver fatigue in real
                  time using eye-blink and head-movement tracking, it issues
                  instant alerts through buzzers.
                </p>
              </div>
            </div>

            {/* Separator */}
            <h2 style={{ marginTop: "1rem" }}>
              AI-Powered Anti-Sleep Glasses - Behind the Scenes
            </h2>

            {/* Sub-1 */}
            <div className="project-box stretched">
              <h2>Architectural Diagram</h2>
              <h3>System Blueprint - Visuals</h3>

              <div className="sub-content">
                <img
                  src={architectureImg}
                  alt="System Architecture Diagram"
                  className="project-image"
                  onClick={() =>
                    openModal(architectureImg, "System Architecture")
                  }
                  loading="lazy"
                />

                <p>
                  Data from sensors is processed locally on the device and
                  streamed from the Arduino, through the AI model, to the
                  database for live visualization with sub-200 ms latency.
                </p>
              </div>
            </div>

            {/* Sub-2 */}
            <div className="project-box stretched">
              <h2>System Design Document</h2>
              <h3>Implementation Insights - Documentation</h3>

              <div className="sub-content">
                <img
                  src={systemDesignImg}
                  alt="System Design"
                  className="project-image"
                  onClick={() => openModal(systemDesignImg, "System Design")}
                  loading="lazy"
                />

                <p>
                  Designed with an embedded client-server architecture where the
                  glasses perform edge inference, and the dashboard handles
                  analytics and alert management.
                </p>
              </div>
            </div>

            {/* Sub-3 */}
            <div className="project-box stretched">
              <h2>Test and Coverage Show</h2>
              <h3>Testing</h3>
              <div className="sub-content">
                <p>
                  Tested under diverse conditions, achieving over 90% accuracy
                  and sub-200 ms response time. Below is a demo video showcasing
                  real-time detection and alert activation.
                </p>

                {/* Neat embedded video with playback controls */}
                <video
                  className="project-video"
                  controls
                  preload="metadata"
                  style={{
                    width: "100%",
                    maxWidth: "720px",
                    borderRadius: "10px",
                    marginTop: "1rem",
                    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <source src={Media1} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Tech Stack */}
            <section className="tech-stack" style={{ marginTop: "2rem" }}>
              <h2>Technology Stack</h2>
              <ul style={{ listStyleType: "disc", marginLeft: "2rem" }}>
                <li>
                  <strong>Hardware:</strong> ESP32, Arduino UNO R4, MPU6050, IR
                  sensors, buzzer
                </li>
                <li>
                  <strong>Software:</strong> Python, TensorFlow Lite, Arduino
                  IDE, VS Code, SQL Server Management System
                </li>
                <li>
                  <strong>Communication:</strong> Data Pipelines in Python AI
                  Model
                </li>
                <li>
                  <strong>Machine Learning:</strong> CNN + LSTM Hybrid Model for
                  Fatigue Detection
                </li>
                <li>
                  <strong>Dashboard:</strong> Python GUI (Tkinter / PyQt) for
                  visualization
                </li>
              </ul>
            </section>
            <p>
              In this group project of 9, My part was to develop a live
              end-to-end IoT Python pipeline that streams sensor data into SQL
              Server’s AntiSleepIOTDB that I also created, enabling live
              dashboards, persistent logging, and drowsiness analytics in SSMS
              for a scalable, queryable, persistent data lake for high-frequency
              sensor streams.
            </p>
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

export default Project361;
