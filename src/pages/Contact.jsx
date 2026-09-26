import { useState } from "react";
import ScrollReveal from "../components/ScrollReveal";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Contact() {
    const [formData, setFormData] = useState({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const [status, setStatus] = useState({
  type: "",
  message: "",
});

const [sending, setSending] = useState(false);

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  setSending(true);
  setStatus({
    type: "",
    message: "",
  });

  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to send message.");
    }

    setStatus({
      type: "success",
      message: "Your message has been sent successfully.",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

  } catch (error) {

    setStatus({
      type: "error",
      message: error.message || "Something went wrong. Please try again.",
    });

  } finally {
    setSending(false);
  }
};
  return (
    <main className="contact-page">

      {/* =========================
          HERO
      ========================= */}

      <section className="contact-hero">

        <ScrollReveal className="contact-header">

          <p className="section-label">
            GET IN TOUCH
          </p>

          <h1>
            Let's <span>Connect</span>
          </h1>

          <p className="contact-subtitle">
            Have a project idea, a question, or simply want to
            connect? I'd be happy to hear from you.
          </p>

        </ScrollReveal>

      </section>


      {/* =========================
          CONTACT CONTENT
      ========================= */}

      <section className="contact-section">

        <div className="contact-container">

          {/* Contact Information */}

          <ScrollReveal className="contact-info">

            <p className="section-label">
              CONTACT INFORMATION
            </p>

            <h2>
              Let's start a <span>conversation.</span>
            </h2>

            <p className="contact-description">
              Whether you want to discuss a project, technology,
              collaboration, or simply connect with me, feel free
              to reach out.
            </p>


            <div className="contact-details">

              <div className="contact-item">

                <div className="contact-icon">
                <Mail size={22} strokeWidth={2} />
                </div>
                <div>
                <span>Email</span>
                <a
                    href="mailto:edwardmusiba2@gmail.com"
                    className="contact-link"
                >
                    edwardmusiba2@gmail.com
                </a>
                </div>

                </div>


                <div className="contact-item">

                <div className="contact-icon">
                    <FaGithub size={22} />
                </div>

                <div>
                    <span>GitHub</span>
                    <a
                    href="https://github.com/edwardmusiba2-boop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                    >
                    github.com/edwardmusiba2-boop
                    </a>
                </div>

                </div>


                <div className="contact-item">

                <div className="contact-icon">
                    <FaLinkedinIn size={22} />
                </div>

                <div>
                    <span>LinkedIn</span>
                    <a
                    href="https://www.linkedin.com/in/edward-musiba-49b97a330/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                    >
                    linkedin.com/in/edward-musiba-49b97a330
                    </a>
                </div>

                </div>
            <div className="contact-note">

              <span>
                AVAILABLE FOR
              </span>

              <p>
                Project discussions, collaboration,
                learning opportunities, and networking.
              </p>

            </div>
        </div>

          </ScrollReveal>


          {/* Contact Form */}

          <ScrollReveal className="contact-form-wrapper">

            <form className="contact-form" onSubmit={handleSubmit}>

              <div className="form-group">

                <label htmlFor="name">
                  Your Name
                </label>

                <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                />

              </div>


              <div className="form-group">

                <label htmlFor="email">
                  Your Email
                </label>

                <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                required
                />

              </div>


              <div className="form-group">

                <label htmlFor="subject">
                  Subject
                </label>

                <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                />

              </div>


              <div className="form-group">

                <label htmlFor="message">
                  Message
                </label>

                <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                rows="6"
                required
                ></textarea>

              </div>


                <button
                type="submit"
                className="contact-submit"
                disabled={sending}
                >
                {sending ? "Sending..." : "Send Message"}
                </button>

                {status.message && (
                <p className={`form-status ${status.type}`}>
                    {status.message}
                </p>
                )}

            </form>

          </ScrollReveal>

        </div>

      </section>


      {/* =========================
          CLOSING
      ========================= */}

      <section className="contact-closing">

        <ScrollReveal className="contact-closing-content">

          <p className="section-label">
            KEEP IN TOUCH
          </p>

          <h2>
            Good things start with a <span>conversation.</span>
          </h2>

          <p>
            I'm always interested in learning, building, and
            connecting with people who are passionate about
            technology and solving real-world problems.
          </p>

        </ScrollReveal>

      </section>

    </main>
  );
}

export default Contact;