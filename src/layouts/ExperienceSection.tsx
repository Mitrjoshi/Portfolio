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
                <p className="text-lg font-bold hover:underline text-background">
                  {exp.title}
                </p>
                <p className="block sm:hidden text-sm text-background">
                  {exp.duration}
                </p>
                <p className="text-sm text-background">{exp.role}</p>
              </div>
              <div className="flex flex-col items-end gap-0.5 text-background">
                <p className="hidden sm:block text-sm text-background">
                  {exp.duration}
                </p>
                <p className="hidden sm:block text-sm text-background">
                  ({exp.type})
                </p>
              </div>
            </div>

            <ol className="space-y-3">
              {exp.description.map((desc) => (
                <li key={desc}>
                  <p className="text-xs text-background">- {desc}</p>
                </li>
              ))}
            </ol>

            <div>
              <p className="text-xs text-background">- Technologies:</p>

              <div className="ml-4 list-disc list-inside text-background">
                {exp.tech.map((tech) => (
                  <div>
                    <span className="text-xs block text-background w-full sm:w-1/2">
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
