import { PROJECTS } from "@/constants";
import { MoveUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export const ProjectOverview = () => {
  return (
    <div className="flex flex-col gap-10 justify-start items-start">
      <h1 className="text-8xl font-bold">
        RECENT <span className="text-border">PROJECTS</span>
      </h1>

      <div className="w-full">
        {PROJECTS.slice(0, 10).map((project) => (
          <Link
            target="_blank"
            rel="noopener noreferrer"
            to={project.link}
            className="flex gap-4 relative group hover:bg-secondary items-center w-full p-4 rounded-xl duration-500 cursor-pointer"
            key={project.id}
          >
            <img
              src={project.thumbnail}
              className="h-[104px] w-[100px] object-cover rounded-lg"
              alt=""
            />
            <div>
              <h1 className="text-2xl font-bold">{project.title}</h1>
              <p className="text-zinc-400">{project.description}</p>
            </div>
            <div className="absolute right-8 top-8 group-hover:top-4 group-hover:right-4 duration-150">
              <MoveUpRight size={20} className="text-orange-400" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
