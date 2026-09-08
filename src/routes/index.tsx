import { createFileRoute } from "@tanstack/react-router";
import { ProjectBand } from "#/components/homepage/project-band";
import { Experiments } from "#/components/homepage/experiments";
import { Footer } from "#/components/homepage/footer";
import { Hero } from "#/components/homepage/hero";
import { Nav } from "#/components/homepage/nav";
import { NotesAbout } from "#/components/homepage/notes-about";
import { useReveal } from "#/lib/use-reveal";
import { ciyo, valuery } from "#/content/site";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  useReveal();
  return (
    <div className="page">
      <Nav />
      <main>
        <Hero />
        <ProjectBand id="work" project={ciyo} />
        <ProjectBand id="valuery" project={valuery} />
        <Experiments />
        <NotesAbout />
      </main>
      <Footer />
    </div>
  );
}
