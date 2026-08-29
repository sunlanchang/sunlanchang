import { createFileRoute } from "@tanstack/react-router";
import { CiyoBand } from "#/components/homepage/ciyo-band";
import { Experiments } from "#/components/homepage/experiments";
import { Footer } from "#/components/homepage/footer";
import { Hero } from "#/components/homepage/hero";
import { Nav } from "#/components/homepage/nav";
import { NotesAbout } from "#/components/homepage/notes-about";
import { useReveal } from "#/lib/use-reveal";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  useReveal();
  return (
    <div className="page">
      <Nav />
      <main>
        <Hero />
        <CiyoBand />
        <Experiments />
        <NotesAbout />
      </main>
      <Footer />
    </div>
  );
}
