import { ProjectCard } from "@/components/ProjectCard";
import { SectionTitles } from "@/components/SectionTitles";
import { PROJECTS } from "@/constants";
import { Footer } from "@/layouts/Footer";
import { useEffect } from "react";

export const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mx-auto w-full max-w-[45rem]">
      <section className="flex flex-col gap-3">
        <SectionTitles title="Projects" />

        {PROJECTS.map((project) => (
          <ProjectCard project={project} />
        ))}
      </section>

      <Footer />
    </div>
  );
};
