import React from "react";
import { motion } from "framer-motion";
import "./style.css";
import heroImage from "../assets/images/hero-home.jpg"; // full right image

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        {/* Left Half: Text */}
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="hero-title">Hi, I'm Anshu Mainali</h1>
          <p className="hero-subtitle">
            A <strong>Software Engineer</strong> with 2 years in <strong>Salesforce</strong>, 
            now exploring <strong>AI</strong>, <strong>Machine Learning</strong>, 
            and <strong>Full Stack Development</strong> during my <strong>Master’s in IT (AI Specialization)</strong>.<br /><br />
            Turning complex ideas into clean, user-friendly code — one sprint at a time.
          </p>

          <div className="hero-buttons">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#projects"
              className="btn-primary"
            >
              View Projects
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#expertise"
              className="btn-secondary"
            >
              My Expertise
            </motion.a>
          </div>
        </motion.div>

        {/* Right Half: Image */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={heroImage} alt="Anshu Mainali" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
