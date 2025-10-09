import "./style.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left: Navigation Links */}
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#achievements">Achievements</a></li>
        </ul>

        {/* Right: Social + Resume */}
        <div className="nav-right">
          <a
            href="https://github.com/Anshu-Mainali-Giri"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-social"
          >
            <i className="fab fa-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-social"
          >
            <i className="fab fa-linkedin"></i>
          </a>

          <a
            href="/Resume.pdf"
            download="Anshu_Resume.pdf"
            className="resume-link"
          >
            Resume ↓
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
