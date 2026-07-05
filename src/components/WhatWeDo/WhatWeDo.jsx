import "./WhatWeDo.css";

export default function WhatWeDo() {
  return (
    <section className="what-section">

      <div className="what-heading">

        <p>WHAT WE DO</p>

        <h2>Experiences That Shape Engineers</h2>

      </div>

      <div className="blueprint">

        <div className="activity">
          <span>⚡</span>

          <div>
            <h3>Workshops</h3>
            <p>
              Hands-on technical workshops on emerging technologies.
            </p>
          </div>
        </div>

        <div className="activity">
          <span>🏆</span>

          <div>
            <h3>Competitions</h3>
            <p>
              Coding contests, quizzes and innovation challenges.
            </p>
          </div>
        </div>

        <div className="activity">
          <span>💻</span>

          <div>
            <h3>Hackathons</h3>
            <p>
              Solve real-world problems through teamwork and innovation.
            </p>
          </div>
        </div>

        <div className="activity">
          <span>🤝</span>

          <div>
            <h3>Networking</h3>
            <p>
              Connect with industry experts, alumni and fellow students.
            </p>
          </div>
        </div>

        <div className="activity">
          <span>📚</span>

          <div>
            <h3>Magazine</h3>
            <p>
              Showcase technical articles and creative student work.
            </p>
          </div>
        </div>

        <div className="activity">
          <span>🎯</span>

          <div>
            <h3>MOSAIC</h3>
            <p>
              Our flagship annual technical festival filled with innovation.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}