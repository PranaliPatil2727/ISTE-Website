import "./AboutPreview.css";
import { useNavigate } from "react-router-dom";

export default function AboutPreview() {
  const navigate = useNavigate();

  return (
    <section className="about-preview">

      <div className="about-container">

        <div className="about-left">

          <span className="about-tag">
            ABOUT ISTE SFIT
          </span>

          <h2>
            Building Engineers
            <br />
            Beyond the Classroom
          </h2>

          <p>
            ISTE SFIT Student Chapter is a vibrant technical community that
            empowers students through workshops, hackathons, coding
            competitions, industry sessions and flagship events. We aim to
            bridge the gap between academics and industry while fostering
            leadership, teamwork and innovation.
          </p>

          <button onClick={() => navigate("/about")}>
            Learn More →
          </button>

        </div>

        <div className="about-right">

          <div className="about-card">
            <h3>1000+</h3>
            <p>Student Participants</p>
          </div>

          <div className="about-card">
            <h3>50+</h3>
            <p>Active Members</p>
          </div>

          <div className="about-card">
            <h3>20+</h3>
            <p>Technical Workshops</p>
          </div>

          <div className="about-card">
            <h3>25+</h3>
            <p>Annual Events</p>
          </div>

        </div>

      </div>

    </section>
  );
}