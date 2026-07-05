import "./Hero.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo/logo.jpg";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">

      <div className="hero-container">

        <div className="hero-left">

          <span className="hero-tag">
            🚀 Indian Society for Technical Education
          </span>

          <h1>
            Empowering
            <span> Future Engineers</span>
          </h1>

          <h2>Through Innovation & Technology</h2>

          <p>
            Join the ISTE SFIT Student Chapter and become a part of an
            enthusiastic community that organizes technical workshops,
            hackathons, flagship events, innovation challenges and networking
            opportunities for future engineers.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn" onClick={() => navigate("/team")}>
              Know our Team
            </button>

            <button className="secondary-btn" onClick={() => navigate("/contact")}>
              Join ISTE
            </button>

          </div>

          <div className="hero-stats">

            <div>
              <h3>50+</h3>
              <span>Members</span>
            </div>

            <div>
              <h3>25+</h3>
              <span>Events</span>
            </div>

            <div>
              <h3>20+</h3>
              <span>Workshops</span>
            </div>

          </div>

        </div>

        <div className="hero-right">

          <div className="logo-circle">

            <img src={logo} alt="ISTE Logo"/>

          </div>

        </div>

      </div>

    </section>
  );
}