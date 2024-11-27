import { SectionTitles } from "@/components/SectionTitles";
import { experience } from "@/constants";

export const ExperienceSection = () => {
  return (
    <section className="flex flex-col gap-3">
      <SectionTitles title="Experience" />

      <div className="flex flex-col gap-2">
        {experience.map((exp) => (
          <div key={exp.id} className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <p className="text-lg font-bold hover:underline">{exp.title}</p>
                <p className="block sm:hidden text-sm">{exp.duration}</p>
                <p className="text-sm">{exp.role}</p>
              </div>
              <div className="flex flex-col items-end gap-0.5">
                <p className="hidden sm:block text-sm">{exp.duration}</p>
                <p className="hidden sm:block text-sm">({exp.type})</p>
              </div>
            </div>

            <ol className="space-y-3">
              {exp.description.map((desc) => (
                <li key={desc}>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400">
                    - {desc}
                  </p>
                </li>
              ))}
            </ol>

            <div>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                - Technologies:
              </p>

              <div className="ml-4 list-disc list-inside text-neutral-600 dark:text-neutral-400">
                {exp.tech.map((tech) => (
                  <div>
                    <span className="text-xs block text-neutral-600 dark:text-neutral-400 w-full sm:w-1/2">
                      • {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
