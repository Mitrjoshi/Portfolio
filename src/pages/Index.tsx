import { ExperienceOverview } from "@/components/ExperienceOverview";
import { OverallInformation } from "@/components/OverallInformation";
import { ProfileCard } from "@/components/ProfileCard";
import { ProjectOverview } from "@/components/ProjectOverview";

export const Index = () => {
  return (
    <div className="grid grid-cols-2 py-40 relative">
      <ProfileCard />
      <div className="space-y-10">
        <OverallInformation />
        <ProjectOverview />
        <ExperienceOverview />
      </div>
    </div>
  );
};
