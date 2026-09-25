import ScrollReveal from "../components/ScrollReveal";

function Projects() {
  return (
    <main className="projects-page">

      {/* Page Header */}
      <section className="projects-hero">

        <ScrollReveal className="projects-header">

          <p className="section-label">
            MY WORK
          </p>

          <h1>
            Featured <span>Projects</span>
          </h1>

          <p className="projects-subtitle">
            A selection of projects where I turn ideas and
            real-world requirements into working technology solutions.
          </p>

        </ScrollReveal>

      </section>


      {/* Introduction */}
      <section className="projects-intro">

        <ScrollReveal className="projects-intro-content">

          <p className="section-label">
            WHAT I BUILD
          </p>

          <h2>
            From idea to <span>working system.</span>
          </h2>

          <p>
            I enjoy building projects that combine user interfaces,
            backend services, databases, and practical problem solving.
            Each project gives me an opportunity to apply what I have
            learned and improve my development process.
          </p>

        </ScrollReveal>

      </section>


      {/* Projects */}
      <section className="projects-section">

        <div className="projects-grid">

          {/* PJ Kennel */}
          <ScrollReveal className="project-card featured-project">

            <div className="project-visual">

              <div className="project-visual-content">

                <span className="project-category">
                  FULL-STACK APPLICATION
                </span>

                <div className="project-symbol">
                  PJ
                </div>

                <h3>
                  PJ Kennel
                </h3>

              </div>

            </div>


            <div className="project-content">

              <div className="project-heading">

                <span className="project-number">
                  01
                </span>

                <span className="project-status">
                  IN DEVELOPMENT
                </span>

              </div>

              <h3>
                PJ Kennel Management System
              </h3>

              <p>
                A full-stack platform designed to manage pet listings,
                customer orders, authentication, notifications, and
                administrative operations for a kennel business.
              </p>


              <div className="project-features">

                <span>Authentication</span>
                <span>Pet Management</span>
                <span>Orders</span>
                <span>Notifications</span>
                <span>Admin Panel</span>

              </div>


              <div className="project-tech">

                <span>React</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>PostgreSQL</span>

              </div>


              <div className="project-actions">

                <a
                  href="#"
                  className="project-link primary-link"
                  onClick={(e) => e.preventDefault()}
                >
                  View Case Study
                  <span>→</span>
                </a>

              </div>

            </div>

          </ScrollReveal>


            {/* School Management System */}
            <ScrollReveal className="project-card">

            <div className="project-visual study-visual">

                <div className="project-visual-content">

                <span className="project-category">
                    SCHOOL MANAGEMENT SYSTEM
                </span>

                <div className="project-symbol">
                    SM
                </div>

                <h3>
                    School Management
                </h3>

                </div>

            </div>


            <div className="project-content">

                <div className="project-heading">

                <span className="project-number">
                    02
                </span>

                <span className="project-status">
                    COMPLETED
                </span>

                </div>

                <h3>
                School Management System
                </h3>

                <p>
                A web-based school management system designed to help
                organize and manage essential school operations through
                a centralized digital platform.
                </p>


                <div className="project-features">

                <span>Student Management</span>
                <span>School Administration</span>
                <span>Digital Records</span>
                <span>Responsive UI</span>

                </div>


                <div className="project-tech">

                <span>React</span>
                <span>Vite</span>
                <span>JavaScript</span>
                <span>CSS</span>

                </div>


                <div className="project-actions">

                <a
                    href="https://school-management-sable-kappa-53.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link primary-link"
                >
                    Live Demo
                    <span>↗</span>
                </a>

                </div>

            </div>

            </ScrollReveal>


          {/* EcoBin */}
          <ScrollReveal className="project-card">

            <div className="project-visual ecobin-visual">

              <div className="project-visual-content">

                <span className="project-category">
                  MOBILE APPLICATION
                </span>

                <div className="project-symbol">
                  EB
                </div>

                <h3>
                  EcoBin
                </h3>

              </div>

            </div>


            <div className="project-content">

              <div className="project-heading">

                <span className="project-number">
                  03
                </span>

                <span className="project-status">
                  PROJECT CONCEPT
                </span>

              </div>

              <h3>
                EcoBin Waste Collection
              </h3>

              <p>
                A mobile-based waste collection platform designed to
                connect customers with drivers and provide location-based
                waste pickup services.
              </p>


              <div className="project-features">

                <span>Location Tracking</span>
                <span>Driver Management</span>
                <span>Pickup Requests</span>
                <span>Real-Time Updates</span>

              </div>


              <div className="project-tech">

                <span>Flutter</span>
                <span>Node.js</span>
                <span>PostgreSQL</span>
                <span>Socket.IO</span>

              </div>


              <div className="project-actions">

                <a
                  href="#"
                  className="project-link secondary-link"
                  onClick={(e) => e.preventDefault()}
                >
                  Project Details
                  <span>→</span>
                </a>

              </div>

            </div>

          </ScrollReveal>

        </div>

      </section>


      {/* Project Philosophy */}
      <section className="projects-closing">

        <ScrollReveal className="projects-closing-content">

          <p className="section-label">
            HOW I BUILD
          </p>

          <h2>
            Real problems. <span>Real solutions.</span>
          </h2>

          <p>
            My goal is not simply to write code. I aim to understand
            the problem first, design a practical solution, build it,
            test it, and continuously improve the result.
          </p>

        </ScrollReveal>

      </section>

    </main>
  );
}

export default Projects;