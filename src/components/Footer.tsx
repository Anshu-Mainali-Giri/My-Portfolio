import { motion } from "framer-motion";
import "./style.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { 
      name: "GitHub", 
      url: "https://github.com/Anshu-Mainali-Giri", 
      icon: "fab fa-github" 
    },
    { 
      name: "LinkedIn", 
      url: "https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit", 
      icon: "fab fa-linkedin" 
    },
    { 
      name: "Email", 
      url: "mailto:anshu.mainali@example.com", 
      icon: "fas fa-envelope" 
    }
  ];

  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="footer-container">
        <motion.div 
          className="footer-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {/* Brand/Logo */}
          <motion.div 
            className="footer-brand"
            whileHover={{ scale: 1.05 }}
          >
            <h3>Anshu Mainali</h3>
            <p>Software Engineer & AI Enthusiast</p>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="footer-social"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p>Let's Connect</p>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: 0.7 + index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.3,
                    rotate: 10,
                    color: "#007bff"
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className={link.icon}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="footer-links"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <p>Quick Links</p>
            <div className="quick-links">
              {["Home", "Projects", "Skills", "Achievements"].map((link, index) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ 
                    x: 5,
                    color: "#007bff"
                  }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div 
          className="footer-divider"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        />

        {/* Copyright */}
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.p
            animate={{ 
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            &copy; {currentYear} Anshu Mainali. All rights reserved.
          </motion.p>
          
          <motion.p 
            className="footer-tagline"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
          >
          </motion.p>
        </motion.div>

        {/* Animated background elements */}
        <motion.div 
          className="footer-bg-element footer-bg-1"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="footer-bg-element footer-bg-2"
          animate={{
            rotate: [360, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </motion.footer>
  );
};

export default Footer;