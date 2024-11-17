import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { MailIcon } from "lucide-react";
import { Link } from "react-router-dom";

export const ProfileCard = () => {
  const CONNECT_LINK = [
    {
      icon: <LinkedInLogoIcon className="text-background h-[24px] w-[24px]" />,
      link: "https://www.linkedin.com/in/mitr-joshi/",
    },
    {
      icon: <GitHubLogoIcon className="text-background h-[24px] w-[24px]" />,
      link: "https://github.com/mitrjoshi",
    },
    {
      icon: <MailIcon className="text-background h-[24px] w-[24px]" />,
      link: "mailto:mitrjoshi26@gmail.com",
    },
  ];

  return (
    <div className="flex justify-center items-start sticky h-[200px] top-[40px]">
      <div className="bg-solid h-[600px] w-[400px] rounded-3xl p-6 relative overflow-hidden">
        <div className="space-y-4 z-50 relative">
          <div className="w-full aspect-square bg-secondary rounded-xl overflow-hidden">
            <img
              src="/profile.jpg"
              className="h-full aspect-square object-cover"
              alt=""
            />
          </div>
          <h1 className="text-4xl font-extrabold text-background text-center">
            MITR JOSHI
          </h1>
          <div>
            <p className="text-center text-secondary font-medium">
              Innovative Software Engineer crafting impactful solutions with
              boundless creativity.
            </p>
          </div>
          <div className="flex justify-center gap-4">
            {CONNECT_LINK.map((item) => (
              <Link
                key={item.link}
                to={item.link}
                target="_blank"
                rel="noreferrer"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>

        <div className="absolute top-0 -translate-y-1/2 left-0 -translate-x-1/4 border-[4px] border-orange-400 border-dashed h-[200px] rounded-full aspect-square" />
        <div className="absolute bottom-0 translate-y-1/2 right-0 translate-x-1/4 border-[4px] border-orange-400 border-dashed h-[200px] rounded-full aspect-square" />
      </div>
    </div>
  );
};
