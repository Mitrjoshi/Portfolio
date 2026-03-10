import { ParagraphText } from "@/components/ParagraphText";
import { SectionTitles } from "@/components/SectionTitles";

export const AboutSection = () => {
  return (
    <section className="flex flex-col gap-3">
      <SectionTitles title="About Me" />

      <ParagraphText text="Full Stack Developer with 2.5 years of experience building and scaling production-grade AI platforms. Shipped systems serving 1M+ users for global brands including Coca-Cola (Maaza) and Ogilvy × Google. Specialises in React, Next.js, Node.js, and AWS — with hands-on experience integrating Google Vertex AI (Gemini, Imagen, Veo) into real-world creative and enterprise workflows. " />
    </section>
  );
};
