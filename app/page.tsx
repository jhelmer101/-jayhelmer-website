import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Companies from "@/components/Companies";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#06060f] text-white">
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Companies />
      <Contact />
    </main>
  );
}
