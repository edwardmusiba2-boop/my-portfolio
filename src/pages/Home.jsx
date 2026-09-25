import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";

function Home() {
  return (
    <main className="home-page">

      {/* =========================
          HERO SECTION
      ========================= */}

      <section className="hero">

        <div className="hero-container">

          <div className="hero-content">

            <p className="hero-intro">
              Hello, I'm
            </p>

            <h1>
              Edward <span>Musiba</span>
            </h1>

            <h2>
              Software Developer & Networking Enthusiast
            </h2>

            <p className="hero-description">
              I build modern web applications, backend systems, and
              practical technology solutions. I also have hands-on
              experience working with computer networks and infrastructure.
            </p>

            <div className="hero-buttons">

              <Link to="/projects" className="btn btn-primary">
                View My Projects
              </Link>

              <Link to="/contact" className="btn btn-secondary">
                Contact Me
              </Link>

            </div>

          </div>

            <div className="hero-visual">

            <div className="hero-photo-frame">

                <img
                src="/images/profile.jpeg"
                alt="Edward Musiba"
                className="hero-photo"
                />

            </div>

            </div>

        </div>

      </section>


      {/* =========================
          INTRODUCTION SECTION
      ========================= */}

      <section className="home-intro">

        <ScrollReveal className="home-intro-content">

          <p className="section-label">
            A LITTLE ABOUT ME
          </p>

          <h2>
            Building, learning, and <span>growing.</span>
          </h2>

          <p>
            I am a university student and aspiring software developer
            with an interest in creating practical technology solutions.
            My learning journey combines software development, backend
            systems, databases, mobile applications, and computer
            networking.
          </p>

          <p>
            I enjoy taking an idea, understanding the problem behind it,
            and turning it into a working system. Through personal
            projects and practical experience, I continue developing
            both my technical knowledge and problem-solving abilities.
          </p>

          <Link to="/about" className="home-text-link">
            More About Me
            <span>→</span>
          </Link>

        </ScrollReveal>

      </section>


      {/* =========================
          WHAT I DO
      ========================= */}

      <section className="home-focus">

        <div className="home-focus-container">

          <ScrollReveal className="home-focus-header">

            <p className="section-label">
              WHAT I DO
            </p>

            <h2>
              Areas I <span>work with.</span>
            </h2>

          </ScrollReveal>


          <div className="home-focus-grid">

            <ScrollReveal className="home-focus-card">

              <div className="home-focus-number">
                01
              </div>

              <div className="home-focus-icon">
                &lt;/&gt;
              </div>

              <h3>
                Web Development
              </h3>

              <p>
                Creating responsive and modern web interfaces using
                technologies such as React, JavaScript, HTML, and CSS.
              </p>

            </ScrollReveal>


            <ScrollReveal className="home-focus-card">

              <div className="home-focus-number">
                02
              </div>

              <div className="home-focus-icon">
                API
              </div>

              <h3>
                Backend Development
              </h3>

              <p>
                Building APIs, authentication systems, application
                logic, and database-driven backend services.
              </p>

            </ScrollReveal>


            <ScrollReveal className="home-focus-card">

              <div className="home-focus-number">
                03
              </div>

              <div className="home-focus-icon">
                NET
              </div>

              <h3>
                Networking
              </h3>

              <p>
                Developing practical knowledge of routers, switches,
                fiber connectivity, wireless networks, PoE, and
                network infrastructure.
              </p>

            </ScrollReveal>

          </div>

        </div>

      </section>


      {/* =========================
          PROJECT CTA
      ========================= */}

      <section className="home-project-cta">

        <ScrollReveal className="home-project-cta-content">

          <p className="section-label">
            CURRENTLY BUILDING
          </p>

          <h2>
            Turning ideas into <span>real projects.</span>
          </h2>

          <p>
            From management systems to mobile application concepts,
            I use projects as a way to apply what I learn and develop
            practical software engineering skills.
          </p>

          <Link to="/projects" className="btn btn-primary">
            Explore My Projects
          </Link>

        </ScrollReveal>

      </section>


      {/* =========================
          FOOTER
      ========================= */}

      <footer className="site-footer">

        <div className="footer-container">

          <div className="footer-brand">

            <Link to="/" className="footer-logo">
              Edward Musiba
            </Link>

            <p>
              Software developer and networking enthusiast
              continuously learning and building practical
              technology solutions.
            </p>

          </div>


          <div className="footer-links">

            <h3>
              Quick Links
            </h3>

            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/certifications">Certifications</Link>
            <Link to="/contact">Contact</Link>

          </div>


          <div className="footer-social">

            <h3>
              Connect With Me
            </h3>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a href="mailto:your-email@example.com">
              Email
            </a>

          </div>

        </div>


        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Edward Musiba. All rights reserved.
          </p>

          <p>
            Built with React & Vite
          </p>

        </div>

      </footer>

    </main>
  );
}

export default Home;