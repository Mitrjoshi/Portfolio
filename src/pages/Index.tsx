import { AboutSection } from "@/layouts/AboutSection";
import { EducationSection } from "@/layouts/EducationSection";
import { ExperienceSection } from "@/layouts/ExperienceSection";
import { Footer } from "@/layouts/Footer";
import { ProfileSection } from "@/layouts/ProfileSection";
import { ProjectSection } from "@/layouts/ProjectSection";
import { TechnologySection } from "@/layouts/TechnologySection";

export const Index = () => {
  return (
    <div className="mx-auto w-full max-w-[45rem] space-y-8">
      <ProfileSection />
      <AboutSection />
      <ProjectSection />
      <ExperienceSection />
      <TechnologySection />
      {/* <CertificateSection /> */}
      <EducationSection />
      <Footer />
    </div>
  );
};
