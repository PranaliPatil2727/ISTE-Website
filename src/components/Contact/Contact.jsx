import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-page">

      {/* Hero */}

      <div className="contact-header">

        <p>CONTACT US</p>

        <h1>Get In Touch</h1>

        <h3>
          Have a question, collaboration idea or feedback?
          We'd love to hear from you.
        </h3>

      </div>

      {/* Main Section */}

      <div className="contact-wrapper">

        {/* Contact Information */}

        <div className="contact-info">

          <h2>Contact Information</h2>

          <div className="info-item">

            <span>EMAIL</span>

            <p>iste@sfit.ac.in</p>

          </div>

          <div className="info-divider"></div>

          <div className="info-item">

            <span>PHONE</span>

            <p>+91 XXXXX XXXXX</p>

          </div>

          <div className="info-divider"></div>

          <div className="info-item">

            <span>LOCATION</span>

            <p>
              St. Francis Institute of Technology
              <br />
              Borivali (West), Mumbai
            </p>

          </div>

          <div className="info-divider"></div>

          <div className="info-item">

            <span>OFFICE HOURS</span>

            <p>
              Monday – Friday
              <br />
              9:00 AM – 5:00 PM
            </p>

          </div>

        </div>

        {/* Contact Form */}

        <div className="contact-form">

          <h2>Send a Message ╰┈➤</h2>

          <form>

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              rows="7"
              placeholder="Your Message"
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>

      {/* Social Section */}

      <div className="social-section">

        <h2>Connect With Us</h2>

        <div className="social-links">

          <a
            href="https://www.instagram.com/iste_sfit/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram 
          </a>

          <a
            href="https://www.linkedin.com/company/istesfit/?originalSubdomain=in"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a href="iste@sfit.ac.in">
            Email
          </a>

        </div>

      </div>

      {/* Google Map */}

      <div className="map-section">

        <h2>Find Us On Campus</h2>

        <div className="map-container">

          <iframe
            title="SFIT Location"
            src="https://www.google.com/maps?q=St+Francis+Institute+of+Technology+Mumbai&output=embed"
            loading="lazy"
            allowFullScreen
          ></iframe>

        </div>

      </div>

    </section>
  );
}