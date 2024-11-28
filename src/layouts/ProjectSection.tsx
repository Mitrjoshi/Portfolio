import { ProjectCard } from "@/components/ProjectCard";
import { SectionTitles } from "@/components/SectionTitles";
import { Button } from "@/components/ui/button";
import { PROJECTS } from "@/constants";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const ProjectSection = () => {
  return (
    <section className="flex flex-col gap-3">
      <SectionTitles title="Projects" />

      {PROJECTS.slice(0, 5).map((project) => (
        <ProjectCard project={project} />
      ))}

      <div className="text-center">
        <Link to="projects">
          <Button
            size={"sm"}
            className="bg-blue-400/10 group hover:bg-blue-400/20 text-primary"
          >
            View all
            <ArrowRight className="text-primary/70 group-hover:ml-2 duration-200 group-hover:-rotate-45" />
          </Button>
        </Link>
      </div>
    </section>
  );
};
