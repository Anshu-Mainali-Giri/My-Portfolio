import { motion } from "framer-motion";
import "./style.css";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML", "JavaScript", "TypeScript", "React", "TailwindCSS"],
    icon: "🎨"
  },
  {
    title: "Backend & Languages",
    skills: ["Python", "PHP", "Java", "SQL", "Node.js"],
    icon: "⚙️"
  },
  {
    title: "Salesforce",
    skills: ["Apex", "Visualforce", "Lightning Web Component", "Aura Component", "Flow"],
    icon: "☁️"
  },
  {
    title: "AI & Machine Learning",
    skills: ["Scikit-learn", "TensorFlow", "Pandas", "NumPy", "Data Analysis"],
    icon: "🤖"
  }
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>

        <motion.div 
          className="skills-cards-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              className="skill-card"
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                rotateY: 5,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="skill-header"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <motion.span 
                  className="skill-icon"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    repeatDelay: 3,
                    delay: index * 0.5
                  }}
                >
                  {category.icon}
                </motion.span>
                <h3>{category.title}</h3>
              </motion.div>
              
              <motion.div 
                className="skills-list"
                initial="hidden"
                animate="visible"
                transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
              >
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    className="skill-item"
                    variants={skillVariants}
                    whileHover={{
                      scale: 1.15,
                      rotate: [0, -2, 2, 0],
                      boxShadow: "0 10px 30px rgba(0,115,230,0.3)",
                      backgroundColor: "#007bff",
                      color: "#ffffff",
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated background elements */}
        <motion.div 
          className="skills-bg-element skills-bg-1"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="skills-bg-element skills-bg-2"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [0, -180, -360]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </section>
  );
};

export default Skills;