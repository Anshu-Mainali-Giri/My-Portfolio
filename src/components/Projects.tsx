import { motion } from "framer-motion";
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
  },
  {
    name: "Online Store",
    description: "An online shopping website built using HTML, CSS, and PHP with cart functionality, product filters, and responsive design.",
    code: "https://github.com/Anshu-Mainali-Giri/Online-Store",
    demo: "#",
    image: onlineStoreImg,
  },
  {
    name: "AgentHire",
    description: "A Salesforce project (Ongoing) built with AgentForce to automate HR hiring workflows, candidate tracking, and onboarding processes.",
    code: "https://github.com/Anshu-Mainali-Giri/AgentHire",
    demo: "#",
    image: agentHireImg,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            {/* Project Image */}
            {project.image && (
              <img
                src={project.image}
                alt={project.name}
                className="project-image"
              />
            )}

            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="project-buttons">
              <motion.a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
              >
                View Code
              </motion.a>
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
              >
                Live Demo
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
