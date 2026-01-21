import './App.css';
import { ReactComponent as React } from './icons/react-svgrepo-com.svg';
import { ReactComponent as Typescript } from './icons/typescript-icon-svgrepo-com.svg';
import { ReactComponent as NextJs } from './icons/next-dot-js-svgrepo-com.svg';
import { ReactComponent as Python } from './icons/python-svgrepo-com.svg';
import { ReactComponent as Javascript } from './icons/javascript-svgrepo-com.svg';
import { ReactComponent as Ruby } from './icons/rails-svgrepo-com.svg';
import { ReactComponent as GitHub } from './icons/github-svgrepo-com.svg';
import { ReactComponent as Linkedin } from './icons/linkedin-svgrepo-com.svg';
import { ReactComponent as Download } from './icons/download-minimalistic-svgrepo-com.svg';
import pdf from "./Sofia Stephenson - CV 2026 (1).pdf";
import { useState, useEffect } from 'react';

const scrollToSection = (e, sectionId) => {
  e.preventDefault();
  const element = document.querySelector(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export default function App() {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">Sofia Stephenson</div>
          <div className="nav-links">
            <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')}>Home</a>
            <a href="#about" onClick={(e) => scrollToSection(e, '#about')}>About</a>
            <a href="#skills" onClick={(e) => scrollToSection(e, '#skills')}>Skills</a>
            <a href="#projects" onClick={(e) => scrollToSection(e, '#projects')}>Projects</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-content">
          <div className="hero-image">
            <div className="image-wrapper">
              <img 
                src="/ed2ce59c-49d4-4294-9552-f15d813efd20-compressed.png" 
                alt="Sofia Stephenson" 
                className="portrait-img"
              />
            </div>
          </div>
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="gradient-text">Sofia Stephenson</span>
            </h1>
            <h2 className="hero-subtitle">Frontend AI Engineer</h2>
            <p className="hero-description">
              Building beautiful, scalable applications with React, TypeScript, and AI-powered solutions
            </p>
            <div className="hero-cta">
              <a 
                href="#projects" 
                className="btn btn-primary"
                onClick={(e) => scrollToSection(e, '#projects')}
              >
                View My Work
              </a>
              <a 
                href={pdf} 
                download="Sofia Stephenson - CV 2026 (1).pdf"
                className="btn btn-secondary"
              >
                <Download className="btn-icon" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`about-section ${isVisible.about ? 'visible' : ''}`}>
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p className="about-intro">
                I am a highly experienced Frontend engineer with expertise in AI Machine Learning. 
                I build beautiful, scalable, mobile-first React, TypeScript, JavaScript and Next.js 
                applications, as well as intelligent chatbots, train models, and intelligent 
                synthesizes of data.
              </p>
              <div className="about-details">
                <h3>Professional Experience</h3>
                <p>
                  As a Frontend and AI engineer, I have developed super-intelligent chatbots for 
                  my company's customer service needs and for my own personal projects. I deliver 
                  high-performance, user-centric features using React, modernized legacy systems 
                  with TypeScript, and collaborate closely with cross-functional teams to deliver 
                  fast, measurable outcomes.
                </p>
                <p>
                  My work includes designing robust A/B testing experiments, building and iterating 
                  on user-facing flows, integrating headless CMS systems, and modernizing core 
                  codebases to enable long-term scalability. I am passionate about creating engaging, 
                  interactive experiences, driving data-informed UX improvements, and delivering 
                  reliable, high-quality products for global audiences.
                </p>
              </div>
            </div>
            <div className="about-image">
              <img 
                src="/—Pngtree—human brain neural network connections_21128488.png" 
                alt="Neural Network" 
                className="neural-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`skills-section ${isVisible.skills ? 'visible' : ''}`}>
        <div className="container">
          <h2 className="section-title">Technologies & Skills</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <React className="skill-icon" />
              <h3>React</h3>
            </div>
            <div className="skill-card">
              <Typescript className="skill-icon" />
              <h3>TypeScript</h3>
            </div>
            <div className="skill-card">
              <NextJs className="skill-icon" />
              <h3>Next.js</h3>
            </div>
            <div className="skill-card">
              <Javascript className="skill-icon" />
              <h3>JavaScript</h3>
            </div>
            <div className="skill-card">
              <Python className="skill-icon" />
              <h3>Python</h3>
            </div>
            <div className="skill-card">
              <Ruby className="skill-icon" />
              <h3>Ruby on Rails</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`projects-section ${isVisible.projects ? 'visible' : ''}`}>
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <a 
                href="https://huggingface.co/spaces/sgandsteph1/ChatDegrassTyson" 
                target="_blank" 
                rel="noreferrer"
                className="project-link"
              >
                <div className="project-image">
                  <img 
                    src="/Screenshot 2025-12-01 at 14.09.44.png" 
                    alt="ChatDegrassTyson" 
                  />
                  <div className="project-overlay">
                    <span className="project-link-text">View Project →</span>
                  </div>
                </div>
                <div className="project-info">
                  <h3>ChatDegrassTyson</h3>
                  <p>
                    A super intelligent science chatbot trained on YouTube videos of the podcast 
                    "StarCast" by Neil Degrasse Tyson. Built with Python, Langchain, Whisper, 
                    Pinecone DB, OpenAI, and deployed through Gradio and Huggingface.
                  </p>
                </div>
              </a>
            </div>

            <div className="project-card">
              <a 
                href="https://www.spreadshirt.de/" 
                target="_blank" 
                rel="noreferrer"
                className="project-link"
              >
                <div className="project-image">
                  <img 
                    src="/Screenshot 2026-01-19 at 17.56.17.png" 
                    alt="SpreadShirt" 
                  />
                  <div className="project-overlay">
                    <span className="project-link-text">View Project →</span>
                  </div>
                </div>
                <div className="project-info">
                  <h3>SpreadShirt Homepage</h3>
                  <p>
                    Built with React.js, Next.js, TypeScript, SCSS, and Freemarker.
                  </p>
                </div>
              </a>
            </div>

            <div className="project-card">
              <a 
                href="https://www.spreadshop.de/" 
                target="_blank" 
                rel="noreferrer"
                className="project-link"
              >
                <div className="project-image">
                  <img 
                    src="/Screenshot 2025-12-21 at 17.00.36.png" 
                    alt="Spreadshop" 
                  />
                  <div className="project-overlay">
                    <span className="project-link-text">View Project →</span>
                  </div>
                </div>
                <div className="project-info">
                  <h3>Spreadshop Homepage</h3>
                  <p>
                    Built with React.js, Next.js, TypeScript, SCSS, and Amplience Headless CMS.
                  </p>
                </div>
              </a>
            </div>

            <div className="project-card">
              <a 
                href="https://playportfolio.sofiastephengineer.com/" 
                target="_blank" 
                rel="noreferrer"
                className="project-link"
              >
                <div className="project-image">
                  <img 
                    src="/Screenshot 2025-12-21 at 16.03.26.png" 
                    alt="Portfolio" 
                  />
                  <div className="project-overlay">
                    <span className="project-link-text">View Project →</span>
                  </div>
                </div>
                <div className="project-info">
                  <h3>Sofia Stephenson Play Portfolio</h3>
                  <p>
                    A single page React.js App, built with SCSS, SCSS animations, Hostinger Web Server.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`contact-section ${isVisible.contact ? 'visible' : ''}`}>
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <p className="contact-email">Email: sgandsteph@gmail.com</p>
            <div className="social-links">
              <a 
                href="https://www.linkedin.com/in/sofiags/" 
                target="_blank" 
                rel="noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <Linkedin className="social-icon" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://github.com/steph-crypt" 
                target="_blank" 
                rel="noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <GitHub className="social-icon" />
                <span>GitHub</span>
              </a>
              <a 
                href={pdf} 
                download="Sofia Stephenson - CV 2026 (1).pdf"
                className="social-link"
                aria-label="Download Resume"
              >
                <Download className="social-icon" />
                <span>Resume</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Sofia Stephenson. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
