import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import "./style.css";
import heroImage from "../assets/images/hero-home.jpg";

const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        {/* Left Half: Text */}
        <motion.div
          className="hero-text"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="hero-title"
            variants={itemVariants}
          >
            Hi, I'm{" "}
            <motion.span 
              className="gradient-text"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              Anshu Mainali
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            variants={itemVariants}
          >
            A <strong>Software Engineer</strong> with 2 years in <strong>Salesforce</strong>, 
            now exploring <strong>AI</strong>, <strong>Machine Learning</strong>, 
            and <strong>Full Stack Development</strong> during my <strong>Master's in IT (AI Specialization)</strong>.
            <br /><br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              Turning complex ideas into clean, user-friendly code — one sprint at a time.
            </motion.span>
          </motion.p>

          <motion.div 
            className="hero-buttons"
            variants={itemVariants}
          >
            <motion.a
              href="#projects"
              className="btn-primary"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 30px rgba(0,123,255,0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="#skills"
              className="btn-secondary"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(108,117,125,0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              My Skills
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Half: Image */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
        >
          <motion.img 
            src={heroImage} 
            alt="Anshu Mainali"
            whileHover={{ 
              scale: 1.02,
              rotateY: -2,
              transition: { duration: 0.3 }
            }}
          />
          
          {/* Floating elements */}
          <motion.div 
            className="floating-element floating-1"
            animate={{ 
              y: [-10, 10, -10],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          <motion.div 
            className="floating-element floating-2"
            animate={{ 
              y: [10, -10, 10],
              rotate: [0, -5, 0]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;