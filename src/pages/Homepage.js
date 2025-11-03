import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import profilePic from "../assets/profile.jpeg"; // replace with your image
import resumePDF from "../assets/resume.pdf"; // replace with your resume file
import {
  FaJsSquare,
  FaDatabase,
  FaReact,
  FaGithub,
  FaServer,
  FaCloud,
  FaPhone,
  FaEnvelope,
  FaTools,
  FaWindows,
  FaMicrosoft,
  FaLinkedin,
} from "react-icons/fa";

import {
  SiDotnet,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiEslint,
  SiJsonwebtokens,
  SiChartdotjs,
  SiHeroku, // Removed SiMicrosoftazure
  SiVercel,
} from "react-icons/si";
import javascriptImg from "../assets/JavaScript.png";
import antiSleep from "../assets/anti-sleep.jpeg";

const Homepage = () => {
  const [activeTab, setActiveTab] = useState("Languages");

  const skillsData = {
    Languages: [
      { icon: <FaMicrosoft />, name: "  C# (.NET 8)" },
      { icon: <FaJsSquare />, name: "  JavaScript (ES6+)" },
      { icon: <FaDatabase />, name: "  SQL" },
      { icon: <FaDatabase />, name: "  NoSQL (MongoDB)" },
    ],
    Frameworks: [
      { icon: <SiDotnet />, name: "  ASP.NET Core 8" },
      { icon: <SiDotnet />, name: "  Entity Framework Core" },
      { icon: <SiExpress />, name: "  Express.js" },
      { icon: <FaReact />, name: "  React (Hooks, Context)" },
      { icon: <FaServer />, name: "  REST APIs, GraphQL, WebSockets" },
      {
        icon: <FaServer />,
        name: "  Authentication & Authorization (JWT, OAuth2, Identity Core)",
      },
      { icon: <SiMongodb />, name: "  Mongoose" },
      { icon: <SiJsonwebtokens />, name: "JWT" },
      { icon: <SiChartdotjs />, name: "Chart.js/Recharts" },
    ],
    Tools: [
      { icon: <FaWindows />, name: "  Windows Development Environment" },
      { icon: <FaMicrosoft />, name: "  Microsoft Development Tools" },
      { icon: <FaGithub />, name: "  Git / GitHub" },
      { icon: <SiPostman />, name: "  Postman" },
      { icon: <SiMongodb />, name: "  MongoDB Compass" },
      { icon: <SiEslint />, name: "  ESLint / Prettier" },
      { icon: <FaTools />, name: "VS Code" },
      { icon: <FaTools />, name: "xUnit" },
      { icon: <FaTools />, name: "Serilog" },
    ],

    Platforms: [
      { icon: <SiHeroku />, name: "  Render" },
      { icon: <SiVercel />, name: "  Vercel / Netlify" },
      { icon: <SiMongodb />, name: "  MongoDB Atlas" },
      {
        icon: <FaDatabase />,
        name: "  SQL Server (EF Core Migrations, LINQ, Views)",
      },
      { icon: <FaGithub />, name: "  GitHub Pages / GitHub Actions CI/CD" },
      { icon: <FaCloud />, name: "HTTPS" },
    ],
  };

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-left">
          <img src={profilePic} alt="Profile" className="profile-img" />
        </div>

        <div className="hero-center">
          <h1>Software Developer</h1>
          <h3>Web Development | Databases</h3>
          <div className="hero-buttons">
            <a href="#projects" className="btn-orange">
              My Work
            </a>
            <a href={resumePDF} download className="btn-orange">
              Resume
            </a>
          </div>
        </div>

        <div className="hero-right">
          <p>📍 Pretoria, Gauteng, South Africa</p>
          <p>✉️ obakengtsaagane@gmail.com</p>
          <p>📞 067 630 8354</p>
          <div className="social-icons">
            <a
              href="https://github.com/obakengshepherd"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/obakeng-tsaagane-307544244"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container">
        <h2>My Skills</h2>

        {/* Tab Headings */}
        <div className="skills-tabs">
          {Object.keys(skillsData).map((category) => (
            <h3
              key={category}
              className={`tab ${activeTab === category ? "active" : ""}`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </h3>
          ))}
        </div>

        {/* Active Tab Content */}
        <ul className="skills-list">
          {skillsData[activeTab].map((skill, index) => (
            <li key={index}>
              <span className="skill-icon">{skill.icon}</span>
              {skill.name}
            </li>
          ))}
        </ul>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container projects-section">
          <div className="projects-header">
            <Link to="/EvenMoreProjects">
              <h2>Projects</h2>
            </Link>
          </div>

          <div className="inner-containers">
            <div className="project-box">
              <h3>Capstone Project</h3>
              <img
                src={javascriptImg}
                alt="JavaScript Projects"
                className="project-image"
              />
              <Link to="/capstone" className="btn-orange">
                View
              </Link>
            </div>

            <div className="project-box">
              <h3>AI-Powered Anti-Sleep Glasses</h3>
              <img
                src={antiSleep}
                alt="Project 361"
                className="project-image"
              />
              <Link to="/project361" className="btn-orange">
                View
              </Link>
            </div>
          </div>
        </div>
      </section>

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
              onMouseOver={(e) => (e.target.style.color = "#f97316")}
              onMouseOut={(e) => (e.target.style.color = "white")}
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
              onMouseOver={(e) => (e.target.style.color = "#f97316")}
              onMouseOut={(e) => (e.target.style.color = "white")}
            >
              <FaGithub aria-hidden="true" /> <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
