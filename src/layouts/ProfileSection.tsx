import {
  File,
  Github,
  Info,
  Linkedin,
  Mail,
  MapPin,
  Moon,
  Sun,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { useTheme } from "../components/theme-provider";
import { Link } from "react-router-dom";
import { SectionTitles } from "@/components/SectionTitles";

export const ProfileSection = () => {
  const { setTheme, theme } = useTheme();

  const linksArray = [
    {
      icon: <Github className="scale-110 text-primary/70" />,
      url: "https://github.com/Mitrjoshi",
      text: "Github",
    },
    {
      icon: <Linkedin className="scale-110 text-primary/70" />,
      url: "https://www.linkedin.com/in/mitr-joshi/",
      text: "Linkedin",
    },
    {
      icon: <Mail className="scale-110 text-primary/70" />,
      url: "mailto:mitrjoshi26@gmail.com",
      text: "",
    },
  ];

  return (
    <section className="w-full gap-6 flex justify-between items-start">
      <div className="space-y-2">
        <SectionTitles title="Mitr Joshi" />
        <div>
          <p className="max-w-md text-sm text-neutral-600 dark:text-neutral-400">
            Full Stack Developer
          </p>
          <p className="flex items-center gap-1 max-w-md text-sm text-neutral-600 dark:text-neutral-400">
            <MapPin size={16} className="text-primary/70" /> Mumbai, India
          </p>
        </div>
        <div className="flex items-center gap-2">
          {linksArray.map((link) => (
            <Link target="_blank" rel="noreferrer" to={link.url}>
              <Button
                title={link.text}
                className="bg-sky-400/20 hover:bg-sky-400/30 duration-150"
                key={link.url}
                variant={"outline"}
                size={"icon"}
              >
                {link.icon}
              </Button>
            </Link>
          ))}

          <Button
            title={"Resume"}
            className="bg-sky-400/20 hover:bg-sky-400/30 duration-150"
            variant={"outline"}
            size={"icon"}
            onClick={() => {
              window.open("/cv.pdf", "_blank");
            }}
          >
            <File className="scale-110 text-primary/70" />
          </Button>
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

          <Link
            target="_blank"
            rel="noreferrer"
            to={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
          >
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

      <img
        src="/profile.jpg"
        className="sm:w-40 sm:h-40 w-24 h-24 rounded-full object-cover hover:cursor-pointer"
        alt=""
      />
    </section>
  );
};
