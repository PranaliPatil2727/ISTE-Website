import "./JoinCTA.css";
import { useNavigate } from "react-router-dom";

export default function JoinCTA() {

  const navigate = useNavigate();

  return (
    <section className="join">

      <div className="join-box">

        <span>READY TO BE A PART OF ISTE?</span>

        <h2>
          Build. Learn.
          <br />
          Lead. Innovate.
        </h2>

        <p>
          Become a member of the ISTE SFIT Student Chapter and unlock
          opportunities to participate in technical events, workshops,
          hackathons and leadership activities.
        </p>

        <div className="join-buttons">

          <button
            className="join-btn"
            onClick={() => navigate("/contact")}
          >
            Join ISTE
          </button>

          <button
            className="contact-btn"
            onClick={() => navigate("/faq")}
          >
            FAQs
          </button>

        </div>

      </div>

    </section>
  );
}