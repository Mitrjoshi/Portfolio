export const OverallInformation = () => {
  return (
    <div className="flex flex-col gap-10 justify-start items-start">
      <h1 className="text-8xl font-bold">
        SOFTWARE <span className="text-border">ENGINEER</span>
      </h1>

      <p className="text-zinc-400 font-semibold text-lg">
        Crafting captivating user experiences with passion, transforming ideas
        into visually stunning and functional products that inspire connection
        and engagement. Let creativity and innovation bring your vision to life!
      </p>

      <div className="flex justify-around gap-4 items-center text-5xl">
        <h1 className="font-bold flex flex-col justify-center items-start">
          +2
          <span className="text-zinc-500 text-xl font-medium">
            YEARS OF EXPERIENCE
          </span>
        </h1>
        <h1 className="font-bold flex flex-col justify-center items-start">
          +20
          <span className="text-zinc-500 text-xl font-medium">
            PROJECTS COMPLETED
          </span>
        </h1>
        <h1 className="font-bold flex flex-col justify-center items-start">
          +100K
          <span className="text-zinc-500 text-xl font-medium">
            LINES OF CODE WRITTEN
          </span>
        </h1>
      </div>
    </div>
  );
};
