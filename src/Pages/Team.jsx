import "./Team.css";

import TeamCard from "../components/TeamCard/TeamCard";

import teamData from "../data/teamData";

const sections = [
  { title: "Faculty", members: teamData.faculty },
  { title: "Core Team", members: teamData.core },
  { title: "Technical Team", members: teamData.technical },
  { title: "Graphics Team", members: teamData.graphics },
  { title: "Creative Team", members: teamData.creative },
  { title: "Marketing Team", members: teamData.marketing },
  { title: "PR Team", members: teamData.pr },
  { title: "Logistics Team", members: teamData.logistics },
  { title: "Social Media Team", members: teamData.socialMedia },
];

export default function Team() {
  return (
    <section className="team-page">

      <div className="team-header">
        <p>OUR TEAM</p>
        <h1>Meet The Team Behind ISTE SFIT</h1>
      </div>

    {sections.map((section) => (

  <div className="team-section" key={section.title}>

    <h2>{section.title}</h2>

    <div
      className={
        section.title === "Faculty"
          ? "faculty-grid"
          : "team-grid"
      }
    >

      {section.members.length > 0 ? (

        section.members.map((member, index) => (

          <TeamCard
            key={index}
            {...member}
            faculty={section.title === "Faculty"}
          />

        ))

      ) : (

        <p className="coming-soon">
          Members will be added soon.
        </p>

      )}

    </div>

  </div>

))}
    </section>
  );
}