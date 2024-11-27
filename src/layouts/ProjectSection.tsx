import { SectionTitles } from "@/components/SectionTitles";
import { Button } from "@/components/ui/button";
import { PROJECTS } from "@/constants";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

export const ProjectSection = () => {
  return (
    <section className="flex flex-col gap-3">
      <SectionTitles title="Projects" />

      {PROJECTS.slice(0, 5).map((project) => (
        <div
          key={project.id}
          className="rounded-lg divide-y divide-gray-200 dark:divide-gray-800 shadow bg-blue-400/10 border border-stone-200 dark:border-stone-600 relative overflow-hidden group hover:bg-blue-400/20 dark:hover:bg-primary-900 transition duration-300"
        >
          <div className="px-3 py-4 sm:p-4">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-start justify-between w-full">
                <div className="flex flex-col gap-1 items-start">
                  <p className="text-lg font-bold hover:underline">
                    {project.title}
                  </p>
                  <div className="space-x-2">
                    {project.tech.map((tech) => (
                      <span className="text-xs underline text-neutral-600 dark:text-neutral-400 w-full sm:w-1/2">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-end gap-0.5">
                  <p className="text-sm">{project.year}</p>
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-row items-center justify-between w-full">
              <p className="text-xs text-neutral-600 dark:text-neutral-400 w-full sm:w-1/2">
                {project.description}
              </p>
            </div>

            <div className="mt-4 flex flex-row items-center justify-start gap-2 w-full">
              <Link to={project.links.github}>
                <Button
                  className="bg-blue-400/40 hover:bg-blue-400/45 text-primary"
                  size={"sm"}
                >
                  <GitHubLogoIcon />
                  Code
                </Button>
              </Link>
              <Link to={project.links.live}>
                <Button
                  className="bg-blue-400/40 hover:bg-blue-400/45 text-primary"
                  size={"sm"}
                >
                  <Play />
                  Live
                </Button>
              </Link>
            </div>
            <img
              src={project.thumbnail}
              className="hidden sm:block absolute bottom-0 right-[-10%] shadow-2xl rounded-t-xl z-10 h-32 w-60 sm:h-44 sm:w-80 transition group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2"
              alt=""
            />
          </div>
        </div>
      ))}

      <div className="text-center">
        <Button
          size={"sm"}
          className="bg-blue-400/10 group hover:bg-blue-400/20 text-primary"
        >
          View all
          <ArrowRight className="text-primary/70 group-hover:ml-2 duration-200 group-hover:-rotate-45" />
        </Button>
      </div>
    </section>
  );
};
