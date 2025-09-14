import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import pythonImg from '../assets/Python.jpeg';
import csharpImg from '../assets/Csharp.jpeg';
import javascriptImg from '../assets/JavaScript.png';
import antiSleep from '../assets/anti-sleep.jpeg';

function Projects() {
  const projects = [
    {
      title: "Python Project",
      image: pythonImg,
      link: "/python",
      description: "Full-Stack Django Application with REST API + AI Features",
    },
    {
      title: "C# Project",
      image: csharpImg,
      link: "/csharp",
      description: "Enterprise-Grade ASP.NET Core MVC + Web API Application with Authentication, Payment Integration, and Cloud Deployment",
    },
    {
      title: "JavaScript Project",
      image: javascriptImg,
      link: "/javascript",
      description: "Full MERN-Stack (MongoDB, Express.js, React, Node.js) or Node.js + TypeScript Real-Time Collaboration Platform with GraphQL, Authentication, and Deployment",
    },
    {
      title: "AI-Powered Anti-Sleep Glasses",
      image: antiSleep,
      link: "/project361",
      description: "Designed AI-driven glasses that monitor eye and head movements to prevent accidents. Integrated with vehicle dashboards for seamless alert delivery.",
    },
  ];

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
          <div className="projects-header">
            <h2>
              <Link to="/projects">Projects</Link>
            </h2>
          </div>

          <div className="inner-containers">
            {projects.map((project, index) => (
              <div key={index} className="project-box">
                <h3>{project.title}</h3>
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <p>{project.description}</p>
                <div>
                  <Link to={project.link} className="btn-orange">
                    View
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <section className="even-more-projects">
            <Link to="/EvenMoreProjects">Even More Projects →</Link>
          </section>
        </div>
      </main>

      {/* Contact Me Section */}
            <section id="contact" className="contact-container">
              <h2>Contact Me</h2>
              <div className="contact-items">
                <div><FaPhone aria-hidden="true" /> <span>067 630 8354</span></div>
                <div><FaEnvelope aria-hidden="true" /> <span>obakengtsaagane@gmail.com</span></div>
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
}

export default Projects;
