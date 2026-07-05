import Hero from "../components/Hero/Hero";
import AboutPreview from "../components/AboutPreview/AboutPreview";
import FeaturedEvents from "../components/FeaturedEvents/FeaturedEvents";
import JoinCTA from "../components/JoinCTA/JoinCTA";


export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <FeaturedEvents />
      <JoinCTA />
    </>
  );
}