import "./TeamCard.css";

export default function TeamCard({
  image,
  name,
  role,
  faculty
}) {
  return (

    <div className={faculty ? "team-card faculty-card" : "team-card"}>

      <img
        src={image}
        alt={name}
      />

      {faculty &&

        <span className="faculty-badge">
          Faculty
        </span>

      }

      <h3>{name}</h3>

      <p>{role}</p>

    </div>

  );
}