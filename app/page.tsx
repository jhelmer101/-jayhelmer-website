import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PointOfView from "@/components/PointOfView";
import HowIHelp from "@/components/HowIHelp";
import CaseStudies from "@/components/CaseStudies";
import Insights from "@/components/Insights";
import Companies from "@/components/Companies";
import Chelsea from "@/components/Chelsea";
import AstronomyCalendar from "@/components/AstronomyCalendar";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#06060f] text-white">
      <Nav />
      <Hero />
      <About />
      <PointOfView />
      <HowIHelp />
      <CaseStudies />
      <Insights />
      <Companies />
      <Chelsea />
      <AstronomyCalendar />
      <Contact />
    </main>
  );
}
