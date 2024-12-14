import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { Info, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const { setTheme, theme } = useTheme();

  return (
    <div className="border-t border-stone-200 mt-8 py-4 text-center text-xs flex flex-col gap-2 items-center">
      <div className="flex flex-row items-center justify-center gap-1.5">
        <p>
          Made by{" "}
          <a
            href="https://github.com/Mitrjoshi"
            className="hover:underline font-bold"
          >
            Mitr Joshi
          </a>{" "}
          with{" "}
          <a href="https://react.dev/" className="hover:underline font-bold">
            React.js
          </a>
        </p>

        <img
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Red%20Heart.png"
          alt="Red Heart"
          width="23"
          height="23"
        />
      </div>
      <div className="flex items-center gap-2">
        <Button
          disabled
          className="hover:bg-sky-400/20 disabled:opacity-100 duration-150"
          variant={"ghost"}
          size={"icon"}
        >
          <img
            src="/india.png"
            className="h-6 rounded-full aspect-square"
            alt=""
          />
        </Button>

        <Button
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
          className="hover:bg-sky-400/20 duration-150"
          variant={"ghost"}
          size={"icon"}
        >
          {theme === "dark" ? (
            <Moon className="scale-110 text-primary/70" />
          ) : (
            <Sun className="scale-110 text-primary/70" />
          )}
        </Button>

        <Link to={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}>
          <Button
            className="hover:bg-sky-400/20 duration-150"
            variant={"ghost"}
            size={"icon"}
          >
            <Info className="scale-110 text-primary/70" />
          </Button>
        </Link>
      </div>
    </div>
  );
};
