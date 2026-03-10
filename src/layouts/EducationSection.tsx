import { SectionTitles } from "@/components/SectionTitles";

export const EducationSection = () => {
  return (
    <section className="flex flex-col gap-3">
      <SectionTitles title="Education" />

      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <div className="flex flex-row gap-1 items-center justify-between w-full">
            <div className="flex flex-col items-start">
              <div className="flex flex-row items-center gap-2">
                <a
                  className="text-base sm:text-lg font-bold hover:underline"
                  href="https://www.itvedant.com/"
                >
                  IT Vedant
                </a>
                <p className="sm:hidden block text-sm">• 2022 - 2023</p>
              </div>
              <p className="text-xs sm:text-sm">
                Full Stack Web Development Course
              </p>
            </div>
            <div className="flex flex-col items-end gap-0.5">
              <p className="hidden sm:block text-sm">2022 - 2023</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <div className="flex flex-row gap-1 items-center justify-between w-full">
            <div className="flex flex-col items-start">
              <div className="flex flex-row items-center gap-2">
                <a
                  className="text-base sm:text-lg font-bold hover:underline"
                  href="https://mithibai.ac.in/"
                >
                  Mithibai
                </a>
                <p className="sm:hidden block text-sm">• 2019 - 2022</p>
              </div>
              <p className="text-xs sm:text-sm">Bachelors in Physics</p>
            </div>
            <div className="flex flex-col items-end gap-0.5">
              <p className="hidden sm:block text-sm">2019 - 2022</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
