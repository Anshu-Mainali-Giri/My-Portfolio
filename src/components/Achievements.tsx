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
    category: "Certification",
    date: "2024"
  },
  {
    title: "GCCF Certification",
    description: "GCCF Certification awarded by Google Cloud Skill Boost after successfully completing the official course program.",
    image: gccfImg,
    link: "https://www.credly.com/users/anshu-mainali/badges#credly",
    category: "Cloud Computing",
    date: "2024"
  },
  {
    title: "Agentblazer Innovator",
    description: "Salesforce Trailhead AgentForce Innovator badge, showcasing active learning with 100+ badges earned on Trailhead.",
    image: trailheadImg,
    link: "https://www.salesforce.com/trailblazer/profile",
    category: "Learning Path",
    date: "2024"
  },
];

const Achievements = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      rotateY: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="achievements" className="achievements">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Achievements & Certifications
      </motion.h2>
      
      <motion.div 
        className="achievements-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {achievements.map((ach, idx) => (
          <motion.div
            className="achievement-card"
            key={idx}
            variants={cardVariants}
            whileHover={{ 
              y: -15,
              rotateY: 5,
              scale: 1.03,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div className="achievement-image-container">
              <motion.img 
                src={ach.image} 
                alt={ach.title} 
                className="achievement-image"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 2
                }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.div 
                className="achievement-badge"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  delay: idx * 0.2 + 0.5,
                  type: "spring",
                  stiffness: 200
                }}
              >
                <span className="badge-text">{ach.category}</span>
              </motion.div>
              
              <motion.div 
                className="achievement-date"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.2 + 0.7 }}
              >
                {ach.date}
              </motion.div>
            </motion.div>

            <motion.div className="achievement-content">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 + 0.3 }}
              >
                {ach.title}
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 + 0.4 }}
              >
                {ach.description}
              </motion.p>
              
              <motion.a
                href={ach.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary achievement-btn"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.2 + 0.6 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(0,123,255,0.4)",
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                >
                  View Credential →
                </motion.span>
              </motion.a>
            </motion.div>

            {/* Animated glow effect */}
            <motion.div 
              className="card-glow"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Floating achievement icons */}
      <motion.div 
        className="floating-icons"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {["🏆", "🎖️", "⭐", "🚀"].map((icon, idx) => (
          <motion.div
            key={idx}
            className={`floating-icon icon-${idx + 1}`}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 4 + idx,
              repeat: Infinity,
              ease: "easeInOut",
              delay: idx * 0.5
            }}
          >
            {icon}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Achievements;