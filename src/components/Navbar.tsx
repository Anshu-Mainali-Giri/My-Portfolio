import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "./style.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="navbar-container">
        {/* Left: Logo/Brand */}
        <motion.div 
          className="nav-brand"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <a href="#hero">AM</a>
        </motion.div>

        {/* Center: Navigation Links */}
        <ul className="nav-links">
          {["Home", "Projects", "Skills", "Achievements"].map((item, index) => (
            <motion.li 
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <motion.a 
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            </motion.li>
          ))}
        </ul>

        {/* Right: Social + Resume */}
        <div className="nav-right">
          <motion.a
            href="https://github.com/Anshu-Mainali-Giri"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-social"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fab fa-github"></i>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-social"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fab fa-linkedin"></i>
          </motion.a>

          <motion.a
            href="/Resume.pdf"
            download="Anshu_Resume.pdf"
            className="resume-link"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,123,255,0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            Resume ↓
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
