import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        {/* Hero / Home Section */}
        <section id="hero">
          <Hero />
        </section>

        {/* Projects Section */}
        <section id="projects">
          <Projects />
        </section>

        {/* Skills Section */}
        <section id="skills">
          <Skills />
        </section>

        {/* Achievements Section */}
        <section id="achievements">
          <Achievements />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
