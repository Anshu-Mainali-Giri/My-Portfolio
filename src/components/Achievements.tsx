import { motion } from "framer-motion";
import "./style.css";

// Import images
import salesforceImg from "../assets/images/salesforce-ai.png";
import gccfImg from "../assets/images/gccf.png";
import trailheadImg from "../assets/images/agentblazer-innovator.png";

const achievements = [
  {
    title: "Salesforce AI Associate",
    description: "Certified Salesforce AI Associate obtained directly from Salesforce, demonstrating expertise in AI cloud solutions.",
    image: salesforceImg,
    link: "https://trailhead.salesforce.com/en/credentials/verification/",
  },
  {
    title: "GCCF Certification",
    description: "GCCF Certification awarded by Google Cloud Skill Boost after successfully completing the official course program.",
    image: gccfImg,
    link: "https://www.credly.com/users/anshu-mainali/badges#credly",
  },
  {
    title: "Agentblazer Innovator",
    description: "Salesforce Trailhead AgentForce Innovator badge, showcasing active learning with 100+ badges earned on Trailhead.",
    image: trailheadImg,
    link: "https://www.salesforce.com/trailblazer/profile",
  },
];


const Achievements = () => {
  return (
    <section id="achievements" className="achievements">
      <h2>Achievements</h2>
      <div className="achievements-grid">
        {achievements.map((ach, idx) => (
          <motion.div
            className="achievement-card"
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
          >
            <img src={ach.image} alt={ach.title} className="achievement-image" />
            <h3>{ach.title}</h3>
            <p>{ach.description}</p>
            <a
              href={ach.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              View
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
