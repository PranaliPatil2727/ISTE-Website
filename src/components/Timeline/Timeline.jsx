import "./Timeline.css";
import { useEffect, useRef } from "react";

const timelineData = [
  {
    year: "1999",
    title: "Chapter Established",
    desc: "The ISTE SFIT Student Chapter was founded with a vision to inspire future engineers.",
  },
  {
    year: "1999",
    title: "First Workshop",
    desc: "Embedded Systems and Microcontrollers - A technical session on programming small devices and electronics.",
  },
  {
    year: "2023",
    title: "Kali Linux Workshop",
    desc: "Advanced cybersecurity workshop introducing students to ethical hacking and penetration testing.",
  },
  {
    year: "2024",
    title: "InQuest",
    desc: "Technical paper competition challenging students to present innovative research and ideas in various technical domains.",
  },
  {
    year: "2025",
    title: "Game Dev Workshop",
    desc: "Hands-on workshop introducing students to game development using modern engines and tools.",
  },
];

export default function Timeline() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = document.querySelectorAll(".timeline-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.35,
      }
    );

    cards.forEach((card) => observer.observe(card));

    const beam = document.querySelector(".beam-progress");

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;

      const rect = section.getBoundingClientRect();

      const sectionHeight = section.offsetHeight;

      const windowHeight = window.innerHeight;

      let progress =
        ((windowHeight - rect.top) / (sectionHeight + windowHeight)) * 100;

      progress = Math.max(0, Math.min(progress, 100));

      beam.style.height = progress + "%";
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="timeline-section" ref={sectionRef}>
      <div className="timeline-heading">
        <p>OUR JOURNEY</p>

        <h2>Growing Every Year</h2>
      </div>

      <div className="timeline">

        <div className="beam"></div>

        <div className="beam-progress"></div>

        <div className="energy"></div>

        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${
              index % 2 === 0 ? "left" : "right"
            }`}
          >
            <div className="node"></div>

            <div className="timeline-card">
              <h3>{item.year}</h3>

              <h4>{item.title}</h4>

              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}