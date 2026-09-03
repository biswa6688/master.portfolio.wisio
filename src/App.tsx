import { ThemeProvider } from "@/lib/theme";
import { Navigation } from "@/components/Navigation";
import { Cursor } from "@/components/Cursor";
import { Hero } from "@/sections/Hero";
import { EngineeringDNA } from "@/sections/EngineeringDNA";
import { TechUniverse } from "@/sections/TechUniverse";
import { Career } from "@/sections/Career";
import { Education } from "@/sections/Education";
import { Projects } from "@/sections/Projects";
import { Products } from "@/sections/Products";
import { Architecture } from "@/sections/Architecture";
import { Contact } from "@/sections/Contact";

export default function App() {
  return (
    <ThemeProvider>
      <div className="grain relative min-h-screen bg-ink-0 antialiased">
        <Cursor />
        <Navigation />
        <main className="relative">
          <Hero />
          <EngineeringDNA />
          <TechUniverse />
          <Career />
          <Education />
          <Projects />
          <Products />
          <Architecture />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}
