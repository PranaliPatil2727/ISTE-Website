import "./FeaturedEvents.css";

const events = [
  {
    title: "MOSAIC 2024",
    attendees: "500+",
    duration: "1 Day",
    description:
      "Our flagship technical festival featuring coding competitions, robotics, gaming and innovation challenges."
  },
  {
    title: "IN QUEST",
    attendees: "300+",
    duration: "4 Hours",
    description:
      "A creative writing and technical expression competition encouraging innovation and storytelling."
  },
  {
    title: "Game Development Workshop",
    attendees: "100+",
    duration: "180 mins",
    description:
      "Hands-on workshop introducing students to game development using modern tools and engines."
  }
];

export default function FeaturedEvents() {
  return (
    <section className="featured">

      <div className="featured-container">

        <span className="featured-tag">
          FEATURED EVENTS
        </span>

        <h2>
          Experiences That
          <span> Inspire Innovation</span>
        </h2>

        <p className="featured-desc">
          Every event is designed to help students build practical skills,
          connect with peers and explore emerging technologies.
        </p>

        <div className="event-grid">

          {events.map((event, index) => (

            <div className="event-card" key={index}>

              <div className="event-image">

                Event Poster

              </div>

              <div className="event-content">

                <h3>{event.title}</h3>

                <div className="event-info">

                  <span>👥 {event.attendees}</span>

                  <span>⏱ {event.duration}</span>

                </div>

                <p>{event.description}</p>

                

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}