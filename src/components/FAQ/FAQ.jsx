import "./FAQ.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const faq = [
  {
    question: "How can I join the ISTE SFIT Student Chapter?",
    answer:
      "Membership details are announced at the beginning of every academic year through official ISTE SFIT channels and college notices.",
  },
  {
    question: "What kind of events does ISTE organize?",
    answer:
      "ISTE SFIT organizes workshops, hackathons, coding competitions, seminars, technical talks, innovation challenges and flagship events like MOSAIC.",
  },
  {
    question: "Are workshops free?",
    answer:
      "Most ISTE workshops are free for members. Some specialized events may have a nominal registration fee, which will be announced beforehand.",
  },
  {
    question: "Are workshops and events open to students from other colleges?",
    answer:
      "It depends on the event. Some are exclusive to SFIT students, while flagship events welcome participants from other colleges.",
  },
  {
    question: "How can I stay updated about upcoming events?",
    answer:
      "Follow ISTE SFIT on our official social media pages and regularly visit our website for the latest announcements.",
  },
  {
    question: "How can I contact the ISTE SFIT team?",
    answer:
      "You can reach us through the Contact page, official email or our social media platforms.",
  },
];

export default function FAQ() {

  const [flipped, setFlipped] = useState(null);
  const navigate = useNavigate();

  const handleFlip = (index) => {
    setFlipped(flipped === index ? null : index);
  };

  return (
    <section className="faq-page">

      <div className="faq-header">

        <p>FREQUENTLY ASKED QUESTIONS</p>

        <h1>Everything You Need To Know</h1>

        <h3>
          Find answers to the most common questions about ISTE SFIT,
          memberships, workshops and events.
        </h3>

      </div>

      <div className="faq-grid">

        {faq.map((faq, index) => (

          <div
            key={index}
            className={`flip-card ${flipped === index ? "flipped" : ""}`}
            style={{ animationDelay: `${index * 0.15}s` }}
            onClick={() => handleFlip(index)}
          >

            <div className="flip-inner">

              {/* Front Side */}

              <div className="flip-front">

                <span className="faq-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <small>QUESTION</small>

                <h2>{faq.question}</h2>

                <p>Click to Flip →</p>

              </div>

              {/* Back Side */}

              <div className="flip-back">

                <small>ANSWER</small>

                <p>{faq.answer}</p>

                <span>← Flip Back</span>

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* CTA */}

      <div className="faq-cta">

        <h2>Still Have Questions?</h2>

        <button
          className="contact-btn"
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </button>

      </div>

    </section>
  );
}