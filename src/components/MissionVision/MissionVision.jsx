import "./MissionVision.css";

export default function MissionVision() {
  return (
    <section className="mission-section">

      <div className="mission-header">

        <p>OUR PURPOSE</p>

        <h2>Building Tomorrow's Innovators</h2>

        <h4>
          We believe technical excellence and leadership go hand in hand.
        </h4>

      </div>

      <div className="split-container">

        <div className="split-panel">

          <p className="panel-label">OUR MISSION</p>

          <h3>Empowering Students</h3>

          <p>
            Empower students through technical education,
            innovation, workshops, competitions and practical
            learning experiences that prepare them for the future.
          </p>

        </div>

        <div className="divider"></div>

        <div className="split-panel">

          <p className="panel-label">OUR VISION</p>

          <h3>Create Future Leaders</h3>

          <p>
            Inspire future-ready engineers who solve real-world
            problems with creativity, collaboration and
            continuous innovation.
          </p>

        </div>

      </div>

    </section>
  );
}