import { SectionTitles } from "@/components/SectionTitles";
import { technologies } from "@/constants";

export const TechnologySection = () => {
  return (
    <section className="flex flex-col gap-3">
      <SectionTitles title="Technologies" />

      <div className="grid md:grid-cols-5 sm:grid-cols-4 grid-cols-3 gap-2">
        {technologies.map((tech) => (
          <div className="h-full group w-full aspect-square border rounded-lg bg-sky-400/20 hover:bg-sky-400/30 duration-150 cursor-pointer">
            <div className="flex flex-col items-center justify-evenly text-xs text-center w-full h-full">
              <div className="flex flex-col items-center justify-evenly text-xs text-center w-full h-full">
                <p className="md:text-base text-[0.65rem] font-bold text-stone-800 dark:text-neutral-400">
                  {tech.text}
                </p>
                <div className="group/label group-hover:scale-125 duration-200 relative">
                  <i key={tech.text} className={`text-5xl ${tech.class}`}></i>
                </div>
              </div>
            </div>
          </div>
        ))}

        <i className=""></i>
      </div>
    </section>
  );
};
