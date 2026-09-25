import ScrollReveal from "../components/ScrollReveal";

function Skills() {
  return (
    <main className="skills-page">

      {/* Page Header */}
      <section className="skills-hero">

        <ScrollReveal className="skills-header">

          <p className="section-label">
            MY TOOLKIT
          </p>

          <h1>
            Technical <span>Skills</span>
          </h1>

          <p className="skills-subtitle">
            Technologies and technical areas I use to build,
            connect, and solve practical problems.
          </p>

        </ScrollReveal>

      </section>


      {/* Skills Introduction */}
      <section className="skills-intro">

        <ScrollReveal className="skills-intro-content">

          <p className="section-label">
            WHAT I WORK WITH
          </p>

          <h2>
            A practical approach to <span>technology.</span>
          </h2>

          <p>
            My technical skills have developed through hands-on projects,
            development practice, and practical exposure to technology
            infrastructure. I focus on understanding how technologies
            work together rather than learning them in isolation.
          </p>

        </ScrollReveal>

      </section>


      {/* Skills Categories */}
      <section className="skills-section">

        <div className="skills-grid">

          {/* Frontend */}
          <ScrollReveal className="skill-card">

            <div className="skill-card-top">
              <span className="skill-number">
                01
              </span>

              <div className="skill-icon">
                &lt;/&gt;
              </div>
            </div>

            <h3>
              Frontend Development
            </h3>

            <p>
              Building responsive and user-focused interfaces
              for modern web applications.
            </p>

            <div className="skill-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>Vite</span>
            </div>

          </ScrollReveal>


          {/* Backend */}
          <ScrollReveal className="skill-card">

            <div className="skill-card-top">
              <span className="skill-number">
                02
              </span>

              <div className="skill-icon">
                API
              </div>
            </div>

            <h3>
              Backend Development
            </h3>

            <p>
              Developing server-side applications, APIs,
              authentication systems, and application logic.
            </p>

            <div className="skill-tags">
              <span>Node.js</span>
              <span>Express</span>
              <span>REST API</span>
              <span>JWT</span>
              <span>Bcrypt</span>
            </div>

          </ScrollReveal>


          {/* Database */}
          <ScrollReveal className="skill-card">

            <div className="skill-card-top">
              <span className="skill-number">
                03
              </span>

              <div className="skill-icon">
                DB
              </div>
            </div>

            <h3>
              Database
            </h3>

            <p>
              Working with relational databases and connecting
              data storage with backend applications.
            </p>

            <div className="skill-tags">
              <span>PostgreSQL</span>
              <span>SQL</span>
              <span>Database Design</span>
              <span>CRUD</span>
            </div>

          </ScrollReveal>


          {/* Mobile */}
          <ScrollReveal className="skill-card">

            <div className="skill-card-top">
              <span className="skill-number">
                04
              </span>

              <div className="skill-icon">
                📱
              </div>
            </div>

            <h3>
              Mobile Development
            </h3>

            <p>
              Developing cross-platform mobile applications
              with responsive interfaces and backend integration.
            </p>

            <div className="skill-tags">
              <span>Flutter</span>
              <span>Dart</span>
              <span>REST API</span>
              <span>Android</span>
            </div>

          </ScrollReveal>


          {/* Tools */}
          <ScrollReveal className="skill-card">

            <div className="skill-card-top">
              <span className="skill-number">
                05
              </span>

              <div className="skill-icon">
                Git
              </div>
            </div>

            <h3>
              Tools & Workflow
            </h3>

            <p>
              Using modern development tools to manage code,
              projects, testing, and development workflows.
            </p>

            <div className="skill-tags">
              <span>Git</span>
              <span>GitHub</span>
              <span>VS Code</span>
              <span>Postman</span>
              <span>npm</span>
            </div>

          </ScrollReveal>


          {/* Networking */}
          <ScrollReveal className="skill-card">

            <div className="skill-card-top">
              <span className="skill-number">
                06
              </span>

              <div className="skill-icon">
                NET
              </div>
            </div>

            <h3>
              Networking & Infrastructure
            </h3>

            <p>
              Practical understanding of network infrastructure,
              connectivity, and common networking equipment.
            </p>

            <div className="skill-tags">
              <span>Routers</span>
              <span>Switches</span>
              <span>Fiber</span>
              <span>PoE</span>
              <span>Wi-Fi</span>
              <span>Access Points</span>
            </div>

          </ScrollReveal>

        </div>

      </section>


      {/* Closing Section */}
      <section className="skills-closing">

        <ScrollReveal className="skills-closing-content">

          <p className="section-label">
            CONTINUOUS LEARNING
          </p>

          <h2>
            Always <span>building.</span>
          </h2>

          <p>
            Technology keeps changing, so I continue learning by
            building projects, experimenting with new tools, and
            improving the systems I create.
          </p>

        </ScrollReveal>

      </section>

    </main>
  );
}

export default Skills;