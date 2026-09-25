import ScrollReveal from "../components/ScrollReveal";

function Certifications() {
  return (
    <main className="certifications-page">

      {/* Hero */}
      <section className="certifications-hero">

        <ScrollReveal className="certifications-header">

          <p className="section-label">
            CONTINUOUS LEARNING
          </p>

          <h1>
            Certifications & <span>Courses</span>
          </h1>

          <p className="certifications-subtitle">
            Professional courses, technical certifications, and
            additional learning that support my development journey.
          </p>

        </ScrollReveal>

      </section>


      {/* Introduction */}
      <section className="certifications-intro">

        <ScrollReveal className="certifications-intro-content">

          <p className="section-label">
            MY LEARNING JOURNEY
          </p>

          <h2>
            Learning beyond the <span>classroom.</span>
          </h2>

          <p>
            Alongside my university studies and practical projects,
            I continue developing my technical skills through online
            courses, certifications, and independent learning.
          </p>

          <p>
            These courses allow me to explore technologies in greater
            depth and apply what I learn to real projects.
          </p>

        </ScrollReveal>

      </section>


      {/* Certificates */}
      <section className="certifications-section">

        <div className="certifications-grid">

          {/* Certificate 01 */}
          <ScrollReveal className="certificate-card">

            <div className="certificate-visual">

              <div className="certificate-placeholder">
                CERTIFICATE
              </div>

            </div>

            <div className="certificate-content">

              <div className="certificate-top">

                <span className="certificate-number">
                  01
                </span>

                <span className="certificate-status">
                  COMPLETED
                </span>

              </div>

              <h3>
                Web Development Course
              </h3>

              <p className="certificate-platform">
                Udemy
              </p>

              <p className="certificate-description">
                Course covering modern web development concepts,
                frontend technologies, and practical development
                techniques.
              </p>

              <div className="certificate-tags">

                <span>Web Development</span>
                <span>JavaScript</span>
                <span>Frontend</span>

              </div>

              <div className="certificate-actions">

                <button className="certificate-link">
                  View Certificate
                  <span>↗</span>
                </button>

              </div>

            </div>

          </ScrollReveal>


          {/* Certificate 02 */}
          <ScrollReveal className="certificate-card">

            <div className="certificate-visual">

              <div className="certificate-placeholder">
                CERTIFICATE
              </div>

            </div>

            <div className="certificate-content">

              <div className="certificate-top">

                <span className="certificate-number">
                  02
                </span>

                <span className="certificate-status">
                  COMPLETED
                </span>

              </div>

              <h3>
                Programming Course
              </h3>

              <p className="certificate-platform">
                SoloLearn
              </p>

              <p className="certificate-description">
                Practical programming course focused on developing
                programming fundamentals and problem-solving skills.
              </p>

              <div className="certificate-tags">

                <span>Programming</span>
                <span>Problem Solving</span>
                <span>Programming Fundamentals</span>

              </div>

              <div className="certificate-actions">

                <button className="certificate-link">
                  View Certificate
                  <span>↗</span>
                </button>

              </div>

            </div>

          </ScrollReveal>


          {/* Certificate 03 */}
          <ScrollReveal className="certificate-card">

            <div className="certificate-visual">

              <div className="certificate-placeholder">
                CERTIFICATE
              </div>

            </div>

            <div className="certificate-content">

              <div className="certificate-top">

                <span className="certificate-number">
                  03
                </span>

                <span className="certificate-status">
                  COMPLETED
                </span>

              </div>

              <h3>
                Networking Fundamentals
              </h3>

              <p className="certificate-platform">
                Online Training
              </p>

              <p className="certificate-description">
                Training focused on fundamental networking concepts,
                connectivity, network devices, and infrastructure.
              </p>

              <div className="certificate-tags">

                <span>Networking</span>
                <span>Routers</span>
                <span>Switches</span>

              </div>

              <div className="certificate-actions">

                <button className="certificate-link">
                  View Certificate
                  <span>↗</span>
                </button>

              </div>

            </div>

          </ScrollReveal>

        </div>

      </section>


      {/* Closing */}
      <section className="certifications-closing">

        <ScrollReveal className="certifications-closing-content">

          <p className="section-label">
            KEEP LEARNING
          </p>

          <h2>
            Skills grow through <span>practice.</span>
          </h2>

          <p>
            Certifications are part of my learning journey, but I
            also focus on applying what I learn through projects,
            experimentation, and practical problem solving.
          </p>

        </ScrollReveal>

      </section>

    </main>
  );
}

export default Certifications;