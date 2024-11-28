import { ParagraphText } from "@/components/ParagraphText";
import { SectionTitles } from "@/components/SectionTitles";

export const AboutSection = () => {
  return (
    <section className="flex flex-col gap-3">
      <SectionTitles title="About Me" />

      <ParagraphText
        text="Hello! I'm a passionate developer with a deep interest in technology and
        all things related to computing. Over the years, I've dedicated myself to
        creating a variety of personal projects, driven by my passion for
        learning and exploring new technologies."
      />
      <ParagraphText
        text="I'm proficient in full-stack development, with a particular focus on
        React.js and Next.js for web development. On the backend, I have
        experience with technologies like Node.js and AWS (Lambda, API Gateway, S3)."
      />

      <ParagraphText text="I hold a certificate in Full-Stack Development from IT Vedant, where I gained proficiency in Java, Python, MySQL, AWS, and web development. This foundation has enabled me to work effectively on projects using modern web technologies. My focus has been on creating web applications using React.js, Next.js, and Node.js with TypeScript, building dynamic and scalable solutions." />

      <ParagraphText text="Through hands-on projects, I have honed my skills in full-stack development, particularly in frontend and backend technologies. I have also developed a solid understanding of AWS services, further enhancing my ability to deploy and manage applications in the cloud. My passion for learning continues to drive me to explore and grow in the field of software development." />
    </section>
  );
};
