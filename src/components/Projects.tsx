import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import "./style.css";

// Import images
import twitterBotImg from "../assets/images/twitter-bot.png";
import onlineStoreImg from "../assets/images/online-store.png";
import agentHireImg from "../assets/images/agenthire.png";

const projects = [
  {
    name: "Twitter Bot Detection",
    description: "A Machine Learning and Django-based web app that detects spam or bot accounts on Twitter using user activity and profile features.",
    code: "https://github.com/Anshu-Mainali-Giri/Twitter-Bot-Detection",
    demo: "https://twitter-bot-detection-0rmm.onrender.com/bot/",
    image: twitterBotImg,
    tech: ["Python", "Django", "ML", "Scikit-learn"]
  },
  {
    name: "Online Store",
    description: "An online shopping website built using PHP, MySQL and featuring a sleek Bootstrap 5 frontend with custom animations.",
    code: "https://github.com/Anshu-Mainali-Giri/Online-Store",
    demo: "https://elite-shop.infinityfree.me/Online-Store/",
    image: onlineStoreImg,
    tech: ["HTML", "CSS", "PHP", "MySQL"]
  },
  {
    name: "AgentHire",
    description: "A Salesforce project (Ongoing) built with AgentForce to automate HR hiring workflows, candidate tracking, and onboarding processes.",
    code: "https://github.com/Anshu-Mainali-Giri/AgentHire",
    demo: "#",
    image: agentHireImg,
    tech: ["Salesforce", "AgentForce", "Apex", "LWC"]
  },
];

const Projects = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="projects">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </motion.h2>
      
      <motion.div 
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            variants={cardVariants}
            whileHover={{ 
              y: -10,
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            {/* Project Image */}
            <motion.div className="project-image-container">
              <motion.img
                src={project.image}
                alt={project.name}
                className="project-image"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="project-overlay"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div className="tech-stack">
                  {project.tech.map((tech, idx) => (
                    <motion.span 
                      key={idx} 
                      className="tech-tag"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div className="project-content">
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {project.name}
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {project.description}
              </motion.p>
              
              <motion.div 
                className="project-buttons"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <motion.a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 8px 25px rgba(0,123,255,0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fab fa-github"></i> Code
                </motion.a>
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 8px 25px rgba(108,117,125,0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-external-link-alt"></i> Demo
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;