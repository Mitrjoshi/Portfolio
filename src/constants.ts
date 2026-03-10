export const PROJECTS = [
  {
    id: "vertex",
    title: "Ogilvy × Google Vertex AI Studio — AI Tooling Platform",
    thumbnail: "/thumbnails/vertex.png",
    description: `Built an internal AI platform for Ogilvy's global creative teams to generate images and videos at scale using Google Vertex AI (Gemini, Imagen, Veo). Supported 10K+ AI generations/month for 100+ internal users; maintained reliability during 3× traffic spikes in peak campaign periods. Designed credit-based governance for cost control and access management, cutting creative iteration from hours to minutes.`,
    links: {
      live: "https://dev.ogilvystudio.ai/",
      github: "",
    },
    year: 2025,
    tech: [
      "React",
      "Typescript",
      "Tailwind CSS",
      "Node js",
      "Express js",
      "MsSQL",
      "AWS",
    ],
  },
  {
    id: "maaza",
    title: "Maaza My Small Win",
    thumbnail: "/thumbnails/maaza.png",
    description: `A promotional website for Maaza, a popular mango drink brand, to engage users in a fun and interactive way. The website allows users to create personalized AI-generated videos showcasing their "small wins" using Maaza. Users can select from various templates, add their own text and images, and generate a unique video that celebrates their achievements.`,
    links: {
      live: "https://maaza-my-small-win.coke2home.com/",
      github: "",
    },
    year: 2025,
    tech: [
      "React",
      "Typescript",
      "Tailwind CSS",
      "Node js",
      "Express js",
      "MsSQL",
      "AWS",
    ],
  },
  {
    id: "fevikwik",
    title: "Fevikwik AI Pack",
    thumbnail: "/thumbnails/fevikwik.png",
    description: `A promotional website for Fevikwik, a popular adhesive brand, to showcase the power of their product in a fun and interactive way. The website allows users to enter two objects they want to see stuck together, and then uses AI to generate an image of those objects being glued together using Fevikwik. Users can share their creations on social media and challenge their friends to come up with even more creative combinations.`,
    links: {
      live: "https://fevikwik-kwik-gpt-stag-25.onmlab.in/",
      github: "",
    },
    year: 2025,
    tech: [
      "React",
      "Typescript",
      "Tailwind CSS",
      "Node js",
      "Express js",
      "MsSQL",
      "AWS",
    ],
  },
];

export const experience = [
  {
    id: "adsmn",
    title: "ADSMN",
    description: [
      `Architect and own end-to-end AI platforms powering image, video, and text generation for 1M+ users across consumer and enterprise products, with high availability and fault-tolerant execution.`,

      `Lead frontend architecture using React, Next.js, and TypeScript; improved First Contentful Paint by ~25% through code-splitting, asset optimisation, and efficient state management.`,

      `Design and maintain serverless cloud infrastructure on AWS (Lambda, S3, SQS, CloudFront), enabling zero-downtime deployments that reliably handle 3× peak traffic bursts.`,

      `Integrate Google Vertex AI (Gemini, Imagen, Veo) into production pipelines for 10K+ AI generations/month, with credit-based usage governance and per-user analytics.`,
    ],
    duration: "2025 - Present",
    role: "Full Stack Developer - L1",
    type: "Full Time",
    tech: ["React", "Next.js", "Node.js", "AWS"],
  },
  {
    id: "adsmn",
    title: "ADSMN",
    description: [
      `Built high-performance React and Next.js frontends for AI generation products used by 100+ internal and external users.`,

      `Optimised backend APIs in Node.js and Express, achieving 20–35% latency reduction through query optimisation, caching, and async processing.`,

      `Collaborated on database schema design and query optimisation using PostgreSQL and MS SQL.`,
    ],
    duration: "2024 - 2025",
    role: "Frontend Developer",
    type: "Full Time",
    tech: ["React", "Next.js", "Node.js", "AWS"],
  },

  {
    id: "adsmn",
    title: "ADSMN",
    description: [
      `Contributed to UI development across live client projects using React.js, JavaScript, and Tailwind CSS.`,

      `Promoted to full-time role after 6 months based on performance and impact.`,
    ],
    duration: "2024 - 2025",
    role: "Frontend Developer",
    type: "Intern",
    tech: ["React", "Next.js", "Node.js", "AWS"],
  },
];

export const technologies = [
  {
    text: "React",
    class: "devicon-react-original colored",
  },
  {
    text: "Next.js",
    class: "devicon-nextjs-original-wordmark",
  },
  {
    text: "TypeScript",
    class: "devicon-typescript-plain colored",
  },
  {
    text: "Javascript",
    class: "devicon-javascript-plain colored",
  },
  {
    text: "Tailwind CSS",
    class: "devicon-tailwindcss-original colored",
  },
  {
    text: "Node.js",
    class: "devicon-nodejs-plain-wordmark colored",
  },
  {
    text: "AWS",
    class: "devicon-amazonwebservices-plain-wordmark colored",
  },
  {
    text: "MySQL",
    class: "devicon-mysql-plain-wordmark colored",
  },
  {
    text: "PostgreSQL",
    class: "devicon-postgresql-plain colored",
  },
];

export const certificates = [
  {
    id: "full-stack",
    title: "Full Stack Development",
    year: "2023",
    description: [
      "Completed a comprehensive program on Full Stack Development at IT Vedant, India.",
      "Gained expertise in modern web development technologies such as HTML, CSS, JavaScript, React.js, Node.js, and Express.js.",
      "Learned to build and deploy full-stack web applications with a focus on scalability and user experience.",
    ],
  },
  {
    id: "aws",
    title: "Cloud Computing",
    year: "2023",
    description: [
      "Completed a specialized Cloud Computing course at IT Vedant, India.",
      "Acquired hands-on experience with Amazon Web Services (AWS) and cloud infrastructure management.",
      "Developed skills in deploying, managing, and scaling applications on the cloud.",
    ],
  },
  {
    id: "db",
    title: "Database Management",
    year: "2023",
    description: [
      "Completed a focused course on Database Management at IT Vedant, India.",
      "Gained knowledge of relational database systems like MySQL and PostgreSQL.",
      "Learned database design, query optimization, and data normalization techniques.",
    ],
  },
];
