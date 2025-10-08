import { motion } from "framer-motion";
import "./style.css";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["Html", "JavaScript", "TypeScript", "TailwindCSS"],
  },
  {
    title: "Backend & Languages",
    skills: ["Python", "PHP", "Java", "SQL"],
  },
  {
    title: "Salesforce",
    skills: ["Apex", "Visualforce", "Lightning Web Component", "Aura Component", "Flow"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2>Skills</h2>

        {/* === SKILLS SECTION === */}
        <div className="skills-cards-container">
          {skillCategories.map((category, index) => (
            <motion.div
              className="skill-card"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    className="skill-item"
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
                    }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
