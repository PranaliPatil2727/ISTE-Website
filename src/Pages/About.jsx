import AboutHero from "../components/AboutHero/AboutHero";
import OurStory from "../components/OurStory/OurStory";
import MissionVision from "../components/MissionVision/MissionVision";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo";
import Timeline from "../components/Timeline/Timeline";
// import JoinCTA from "../components/JoinCTA/JoinCTA";

export default function About() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <MissionVision />
      <WhatWeDo />
      <Timeline />
      {/* <JoinCTA /> */}
    </>
  );
}