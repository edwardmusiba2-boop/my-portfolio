import ScrollReveal from "../components/ScrollReveal";

function About() {
  return (
    <main className="about-page">

      {/* Page Header */}
      <section className="about-hero">

        <ScrollReveal className="about-header">

          <p className="section-label">
            GET TO KNOW ME
          </p>

          <h1>
            About <span>Me</span>
          </h1>

          <p className="about-subtitle">
            Developer, problem solver, and technology enthusiast
          </p>

        </ScrollReveal>

      </section>


      {/* Main About Content */}
      <section className="about-content">

        <div className="about-grid">

          <ScrollReveal className="about-text">

            <p className="section-label">
              WHO I AM
            </p>

            <h2>
              Turning ideas into practical technology solutions.
            </h2>

            <p>
              I am a software developer interested in building useful,
              reliable, and user-focused applications. My work involves
              both frontend and backend development, with a growing focus
              on designing complete systems rather than isolated pieces
              of software.
            </p>

            <p>
              I work with technologies such as React, Node.js, Express,
              PostgreSQL, Flutter, and Git. I enjoy understanding how
              different parts of a system communicate and turning
              requirements into working applications.
            </p>

            <p>
              Alongside software development, I have practical exposure
              to computer networking and infrastructure. This has helped
              me develop a broader understanding of how software,
              hardware, networks, and users come together to form
              complete technology solutions.
            </p>

          </ScrollReveal>


          {/* Highlight Card */}
          <ScrollReveal className="about-highlight">

            <div className="highlight-icon">
              &lt;/&gt;
            </div>

            <h3>
              Building With Purpose
            </h3>

            <p>
              I focus on learning through real projects, solving
              practical problems, and continuously improving my
              technical skills.
            </p>

          </ScrollReveal>

        </div>

      </section>


      {/* Focus Areas */}
      <section className="focus-section">

        <ScrollReveal className="focus-header">

          <p className="section-label">
            WHAT I FOCUS ON
          </p>

          <h2>
            Areas of <span>Interest</span>
          </h2>

        </ScrollReveal>


        <div className="focus-grid">

          <ScrollReveal className="focus-card">

            <div className="focus-number">
              01
            </div>

            <h3>
              Software Development
            </h3>

            <p>
              Creating modern applications with clean structure,
              responsive interfaces, and maintainable code.
            </p>

          </ScrollReveal>


          <ScrollReveal className="focus-card">

            <div className="focus-number">
              02
            </div>

            <h3>
              Backend Systems
            </h3>

            <p>
              Building APIs, authentication systems, databases,
              and backend services that support real applications.
            </p>

          </ScrollReveal>


          <ScrollReveal className="focus-card">

            <div className="focus-number">
              03
            </div>

            <h3>
              Networking
            </h3>

            <p>
              Understanding and working with network infrastructure,
              connectivity, fiber systems, routers, switches, and
              wireless technologies.
            </p>

          </ScrollReveal>

        </div>

      </section>


      {/* Approach */}
      <section className="approach-section">

        <ScrollReveal className="approach-container">

          <p className="section-label">
            MY APPROACH
          </p>

          <h2>
            Learn. Build. <span>Improve.</span>
          </h2>

          <p>
            I believe the most effective way to grow technically is
            through consistent practice and real-world projects.
            Every project gives me an opportunity to understand a
            problem, build a solution, identify weaknesses, and
            improve the result.
          </p>

        </ScrollReveal>

      </section>

    </main>
  );
}

export default About;