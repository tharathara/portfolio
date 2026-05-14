import { Navbar } from "@/components/navbar";
import { ScrollProgress } from "@/components/scroll-progress";
import { Hero } from "@/components/sections/hero";
import { RecruiterSnapshot } from "@/components/sections/recruiter-snapshot";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { ImpactStats } from "@/components/sections/impact-stats";
import { Certifications } from "@/components/sections/certifications";
import { Blog } from "@/components/sections/blog";
import { Services } from "@/components/sections/services";
import { RecruiterCTA } from "@/components/sections/recruiter-cta";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="relative">
        <Hero />
        <RecruiterSnapshot />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <ImpactStats />
        <Certifications />
        <Blog />
        <Services />
        <RecruiterCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
