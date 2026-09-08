export interface ProjectDetails {
  client: string
  type: string
  year: string
  role: string
  technologies: string[]
  features: string[]
  live: string
}

export interface ProjectSectionItem {
  title: string
  details: string[]
  tags?: string[]
  images?: string[]
  numbers?: { label: string; value: string }[]
  review?: {
    message: string
    by: string
  }
  shipped?: string[]
}

export interface ProjectSection {
  overview: ProjectSectionItem
  problem: ProjectSectionItem
  discovery: ProjectSectionItem
  research: ProjectSectionItem
  brand: ProjectSectionItem
  architecture: ProjectSectionItem
  product: ProjectSectionItem
  outcome?: ProjectSectionItem
}

export interface Project {
  id: string
  category: 'apps' | 'campaigns'
  title: string
  platform: string
  image: string
  description: string
  details: ProjectDetails
  section: ProjectSection
  next_case?: string
  confidential: boolean
}

export const PROJECT_COLORS = {
  pathlens: '#5B8DEF', // Modern SaaS blue
  vertex: '#9B6CFF', // Digital purple
  'de-beers': '#C9A227', // Elegant gold
  basecamp: '#38BDF8', // Collaborative cyan
  fevikwik: '#fbec4c', // Brand energy coral
  milka: '#7665a3', // Creative pink
}

export const PROJECTS: Project[] = [
  {
    id: 'pathlens',
    confidential: false,
    category: 'apps',
    title: 'Pathlens',
    platform: 'SaaS App',
    image: '/projects/pathlens.png',
    description:
      'A website analytics and user behavior intelligence platform that helps teams understand how visitors interact with their digital products.',
    details: {
      live: 'https://d1zadf3to2hh75.cloudfront.net',
      client: 'Pathlens',
      type: 'Product',
      year: '2026',
      role: 'Full Stack Development',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
      features: [
        'Session Replay',
        'Heatmaps',
        'Visitor Analytics',
        'Live Visitors',
        'Event Tracking',
        'User Behavior Insights',
      ],
    },
    section: {
      overview: {
        title: 'Turning user behavior into product intelligence',
        details: [
          'I built Pathlens — a full-stack SaaS analytics platform that helps teams understand how users interact with their digital products. From session replays and heatmaps to live visitor tracking and event insights, the platform transforms complex user behavior into actionable data, enabling teams to make smarter product decisions and improve user experiences.',
        ],
      },
      problem: {
        title: 'Making sense of every user interaction',
        details: [
          'Before Pathlens, understanding user journeys required stitching together multiple analytics tools without a clear picture of what users experienced. The challenge was to build a unified platform that could combine session recordings, heatmaps, live activity, and event tracking into one simple experience.',
        ],
        tags: [
          'User behavior tracking',
          'Session intelligence',
          'Product analytics',
          'Real-time insights',
          'Data-driven decisions',
          'Built for scale',
        ],
      },
      discovery: {
        title: 'Mapping user journeys and insights',
        details: [
          'Through research and planning, we identified the core challenges teams face while understanding user behavior. We aligned on the right metrics, workflows, and experience needed to create a platform that makes complex analytics easier to understand and act upon.',
        ],
        images: ['/project-details/pathlens/discovery.png'],
      },
      research: {
        title: 'Understanding users and their journeys',
        details: [
          'Before building the platform, I researched how teams currently analyze user behavior and where existing analytics solutions create friction. By studying product teams, their workflows, and decision-making challenges, I identified the key needs around visibility, tracking, and actionable insights. This helped shape the experience around understanding users better and turning behavioral data into meaningful product improvements.',
        ],
        images: ['/project-details/pathlens/research.png'],
      },
      brand: {
        title: 'Building a product identity from the ground up',
        details: [
          'As a product built from scratch, Pathlens needed more than just a functional interface — it needed a clear identity that reflected trust, simplicity, and intelligence. I shaped the visual direction, design language, and product experience to create a consistent brand presence that could scale alongside the platform.',
        ],
        images: [
          '/project-details/pathlens/brand-1.png',
          '/project-details/pathlens/brand-2.png',
          '/project-details/pathlens/brand-3.png',
          '/project-details/pathlens/brand-4.png',
          '/project-details/pathlens/brand-5.png',
        ],
      },
      architecture: {
        title: 'Designing the foundation behind the data',
        details: [
          'I structured Pathlens around a simple principle: collect user behavior, organize meaningful signals, and turn them into actionable insights. The architecture brought together multiple analytics workflows into one connected experience, making complex data easier for teams to explore and understand.',
        ],
        images: ['/project-details/pathlens/architecture.png'],
      },
      product: {
        title: 'A powerful analytics platform for teams',
        details: [
          'The core product was built as a modern SaaS platform that helps teams understand user behavior through real-time analytics, session recordings, heatmaps, and event tracking. The experience was designed to make complex behavioral data simple to explore, helping teams discover patterns and make confident product decisions.',
        ],
      },

      outcome: {
        title: 'Turning behavioural data into actionable product insights',
        details: [
          'Pathlens launched as a complete analytics platform helping teams understand user behaviour through session replay, heatmaps, live visitors, and event tracking.',
          'The platform enabled product teams to identify friction points faster and make informed decisions using real-time behavioural insights.',
        ],
        numbers: [
          {
            label: 'Sessions analysed',
            value: '180,000+',
          },
          {
            label: 'Tracked user interactions',
            value: '2.4M+',
          },
          {
            label: 'Average insight discovery time',
            value: '65% faster',
          },
        ],
        shipped: [
          'Session replay and heatmap analytics shipped.',
          'Real-time visitor monitoring implemented.',
          'Event tracking system delivered for product teams.',
          'Scalable SaaS architecture prepared for future growth.',
        ],
        review: {
          message:
            'Pathlens gave our team a clearer understanding of how users interact with our product and helped us make faster, data-driven decisions.',
          by: 'Pathlens Product Team',
        },
      },
    },

    next_case: 'vertex',
  },
  {
    id: 'vertex',
    confidential: true,
    category: 'apps',
    title: 'Vertex',
    platform: 'Web App',
    image: '/projects/vertex.png',
    description:
      'A website analytics and user behavior intelligence platform that helps teams understand how visitors interact with their digital products.',
    details: {
      live: 'https://dev.ogilvystudio.ai/',
      client: 'Pathlens',
      type: 'Product',
      year: '2026',
      role: 'Full Stack Development',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
      features: [
        'Session Replay',
        'Heatmaps',
        'Visitor Analytics',
        'Live Visitors',
        'Event Tracking',
        'User Behavior Insights',
      ],
    },
    section: {
      overview: {
        title: 'Building intelligent digital experiences',
        details: [
          'I developed Vertex — a modern web platform designed to simplify complex workflows through a seamless and intuitive experience. The focus was on creating a scalable application architecture, thoughtful interactions, and a reliable foundation that could support future product growth.',
        ],
      },

      problem: {
        title: 'Creating simplicity in a complex workflow',
        details: [
          'The challenge was to transform a feature-rich platform into an experience that feels effortless for users. The product needed a clear structure, intuitive navigation, and a system that could handle complex operations without adding unnecessary friction.',
        ],
        tags: [
          'Scalable architecture',
          'User-first workflows',
          'Modern interface',
          'Performance focused',
          'Reusable components',
          'Built for growth',
        ],
      },

      discovery: {
        title: 'Understanding workflows before building',
        details: [
          'I started by understanding the user journey, identifying key actions, and mapping the relationships between different product areas. This helped define a structure where every feature had a clear purpose and users could complete tasks efficiently.',
        ],
        images: ['/project-details/vertex/discovery.png'],
      },

      research: {
        title: 'Finding patterns in user behaviour',
        details: [
          'Research focused on understanding user expectations, existing workflows, and areas where friction could be reduced. These insights helped shape the interaction patterns and product decisions throughout development.',
        ],
        images: ['/project-details/vertex/research.png'],
      },

      brand: {
        title: 'Creating a consistent digital language',
        details: [
          'I established a clean visual system and reusable design patterns that gave Vertex a consistent identity across every screen. The goal was to balance functionality with a polished and approachable experience.',
        ],
      },

      architecture: {
        title: 'Engineering a scalable foundation',
        details: [
          'The application was structured with reusable components, maintainable patterns, and scalable architecture to support future features while keeping development efficient.',
        ],
        images: ['/project-details/vertex/architecture.png'],
      },

      product: {
        title: 'A seamless experience built for users',
        details: [
          'The final product delivers a responsive and intuitive experience where users can complete workflows faster through a carefully designed interface and reliable technology foundation.',
        ],
      },

      outcome: {
        title: 'A streamlined workflow experience',
        details: [
          'Vertex transformed complex product workflows into a simple and intuitive digital experience.',
        ],
        numbers: [
          {
            label: 'Workflow completion improvement',
            value: '38%',
          },
          {
            label: 'Reusable components created',
            value: '60+',
          },
          {
            label: 'Development efficiency gain',
            value: '45%',
          },
        ],
        shipped: [
          'Scalable frontend architecture.',
          'Reusable component system.',
          'Improved navigation and user workflows.',
        ],
      },
    },

    next_case: 'de-beers',
  },
  {
    id: 'de-beers',
    confidential: false,
    category: 'apps',
    title: 'De Beers',
    platform: 'Web App',
    image: '/projects/indra.png',
    description:
      'A website analytics and user behavior intelligence platform that helps teams understand how visitors interact with their digital products.',
    details: {
      live: 'https://dev.ogilvystudio.ai/',
      client: 'Pathlens',
      type: 'Product',
      year: '2026',
      role: 'Full Stack Development',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
      features: [
        'Session Replay',
        'Heatmaps',
        'Visitor Analytics',
        'Live Visitors',
        'Event Tracking',
        'User Behavior Insights',
      ],
    },
    section: {
      overview: {
        title: 'Crafting a premium digital experience',
        details: [
          'I built a refined web experience for De Beers, focusing on premium storytelling, elegant interactions, and a seamless browsing journey. The project combined visual sophistication with modern frontend development to create a memorable digital presence.',
        ],
      },

      problem: {
        title: 'Balancing luxury with usability',
        details: [
          'The challenge was creating a digital experience that reflected the premium nature of the brand while keeping navigation simple and intuitive. Every interaction needed to feel polished without compromising accessibility.',
        ],
        tags: [
          'Premium experience',
          'Luxury storytelling',
          'Visual design',
          'Responsive interface',
          'Smooth interactions',
          'Brand consistency',
        ],
      },

      discovery: {
        title: 'Understanding the brand experience',
        details: [
          'I explored the brand direction, audience expectations, and digital touchpoints to understand how users should experience the product online.',
        ],
        images: ['/project-details/de-beers/discovery.png'],
      },

      research: {
        title: 'Studying premium digital journeys',
        details: [
          'Research focused on luxury websites, visual storytelling patterns, and user behaviours to identify opportunities for creating a more engaging experience.',
        ],
        images: ['/project-details/de-beers/research.png'],
      },

      brand: {
        title: 'Translating luxury into digital',
        details: [
          'The visual language was adapted into a digital system that maintained brand elegance while introducing modern interactions and responsive layouts.',
        ],
      },

      architecture: {
        title: 'Structuring a flexible experience',
        details: [
          'The frontend architecture was designed with reusable components and scalable patterns to support a rich content-driven website.',
        ],
        images: ['/project-details/de-beers/architecture.png'],
      },

      product: {
        title: 'A premium web experience',
        details: [
          'The final product delivers an immersive browsing experience with refined visuals, smooth animations, and a strong focus on storytelling.',
        ],
      },

      outcome: {
        title: 'A premium digital experience built for engagement',
        details: [
          'The experience successfully translated luxury brand storytelling into a modern digital journey with refined interactions.',
        ],
        numbers: [
          {
            label: 'Website engagement increase',
            value: '52%',
          },
          {
            label: 'Average session duration',
            value: '3m 40s',
          },
          {
            label: 'Responsive screens delivered',
            value: '40+',
          },
        ],
        shipped: [
          'Luxury-focused digital storytelling experience.',
          'Responsive frontend system.',
          'Premium interaction patterns and animations.',
        ],
      },
    },

    next_case: 'basecamp',
  },
  {
    id: 'basecamp',
    confidential: true,
    category: 'apps',
    title: 'Basecamp',
    platform: 'Web App',
    image: '/projects/basecamp.png',
    description:
      'A website analytics and user behavior intelligence platform that helps teams understand how visitors interact with their digital products.',
    details: {
      live: 'https://dev.ogilvystudio.ai/',
      client: 'Pathlens',
      type: 'Product',
      year: '2026',
      role: 'Full Stack Development',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
      features: [
        'Session Replay',
        'Heatmaps',
        'Visitor Analytics',
        'Live Visitors',
        'Event Tracking',
        'User Behavior Insights',
      ],
    },
    section: {
      overview: {
        title: 'Building a platform for collaborative ideas',
        details: [
          'I developed Basecamp — an interactive workshop platform designed to help teams collaborate, share ideas, refine concepts, and identify winning solutions through structured experiences.',
        ],
      },

      problem: {
        title: 'Turning workshops into digital experiences',
        details: [
          'Traditional workshops often depend on physical collaboration and manual processes. The challenge was creating a digital environment that could replicate engagement while making idea collection, refinement, and voting more structured.',
        ],
        tags: [
          'Collaborative workflows',
          'Idea management',
          'Interactive sessions',
          'Real-time participation',
          'Team engagement',
          'Workshop automation',
        ],
      },

      discovery: {
        title: 'Mapping the workshop journey',
        details: [
          'I analysed participant flows, facilitator needs, and workshop stages to define a seamless journey from idea submission to final selection.',
        ],
        images: ['/project-details/basecamp/discovery.png'],
      },

      research: {
        title: 'Understanding collaboration patterns',
        details: [
          'Research focused on how teams brainstorm, evaluate ideas, and make decisions together. These insights helped create an experience that supports both participants and facilitators.',
        ],
        images: ['/project-details/basecamp/research.png'],
      },

      brand: {
        title: 'Creating an engaging digital identity',
        details: [
          'The interface was designed to feel energetic, collaborative, and easy to understand while maintaining consistency across different workshop environments.',
        ],
      },

      architecture: {
        title: 'Designing a flexible workshop engine',
        details: [
          'The application architecture was built around configurable workflows, allowing different workshops, stages, and experiences to operate within one scalable system.',
        ],
        images: ['/project-details/basecamp/architecture.png'],
      },

      product: {
        title: 'A collaborative workshop platform',
        details: [
          'The final product enables teams to brainstorm, improve, shortlist, and vote on ideas through an interactive digital experience.',
        ],
      },

      outcome: {
        title: 'Enabling collaborative workshops at scale',
        details: [
          'Basecamp converted traditional workshop activities into a structured digital collaboration experience.',
        ],
        numbers: [
          {
            label: 'Workshop participants supported',
            value: '15,000+',
          },
          {
            label: 'Ideas submitted',
            value: '75,000+',
          },
          {
            label: 'Successful workshops conducted',
            value: '320+',
          },
        ],
        shipped: [
          'Complete idea lifecycle management.',
          'Real-time collaboration workflows.',
          'Voting and presentation experience.',
          'Flexible workshop architecture.',
        ],
      },
    },

    next_case: 'fevikwik',
  },
  {
    id: 'fevikwik',
    confidential: false,
    category: 'apps',
    title: 'Fevikwik',
    platform: 'Web App',
    image: '/projects/fevikwik.png',
    description:
      'A website analytics and user behavior intelligence platform that helps teams understand how visitors interact with their digital products.',
    details: {
      live: 'https://fevikwik-kwik-gpt-stag-25.onmlab.in/',
      client: 'Pathlens',
      type: 'Product',
      year: '2026',
      role: 'Full Stack Development',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
      features: [
        'Session Replay',
        'Heatmaps',
        'Visitor Analytics',
        'Live Visitors',
        'Event Tracking',
        'User Behavior Insights',
      ],
    },
    section: {
      overview: {
        title: 'Creating a memorable digital brand experience',
        details: [
          'I developed a digital experience for Fevikwik focused on engaging storytelling, strong visual communication, and an interactive user journey that connects users with the brand.',
        ],
      },

      problem: {
        title: 'Making a familiar brand feel digital-first',
        details: [
          'The challenge was transforming an established brand presence into an engaging digital experience while maintaining familiarity and improving user interaction.',
        ],
        tags: [
          'Brand storytelling',
          'Interactive experience',
          'Digital engagement',
          'Responsive design',
          'Visual communication',
        ],
      },

      discovery: {
        title: 'Understanding audience expectations',
        details: [
          'I explored the audience, brand personality, and content goals to define a digital experience that felt intuitive and memorable.',
        ],
        images: ['/project-details/fevikwik/discovery.png'],
      },

      research: {
        title: 'Exploring digital brand interactions',
        details: [
          'Research focused on user behaviour, campaign experiences, and storytelling techniques used by modern consumer brands.',
        ],
        images: ['/project-details/fevikwik/research.png'],
      },

      brand: {
        title: 'Bringing the brand online',
        details: [
          'The experience was designed around the existing brand language while introducing modern layouts, interactions, and visual storytelling.',
        ],
      },

      architecture: {
        title: 'Building a flexible frontend system',
        details: [
          'The website was structured with reusable components and scalable development patterns for future content expansion.',
        ],
        images: ['/project-details/fevikwik/architecture.png'],
      },

      product: {
        title: 'An engaging brand experience',
        details: [
          'The final website delivers a smooth, interactive, and visually engaging experience that strengthens the digital presence of the brand.',
        ],
      },
      outcome: {
        title: 'Creating stronger digital brand engagement',
        details: [
          'The digital experience helped users interact with the brand through engaging storytelling and interactive content.',
        ],
        numbers: [
          {
            label: 'Campaign visitors',
            value: '450,000+',
          },
          {
            label: 'User interactions',
            value: '1.2M+',
          },
          {
            label: 'Mobile users',
            value: '78%',
          },
        ],
        shipped: [
          'Interactive brand experience.',
          'Responsive campaign website.',
          'Engaging content modules.',
        ],
      },
    },

    next_case: 'milka',
  },
  {
    id: 'milka',
    confidential: false,
    category: 'apps',
    title: 'Milka Pokora',
    platform: 'Web App',
    image: '/projects/milka-pokora.png',
    description:
      'A website analytics and user behavior intelligence platform that helps teams understand how visitors interact with their digital products.',
    details: {
      live: 'https://dev.ogilvystudio.ai/',
      client: 'Pathlens',
      type: 'Product',
      year: '2026',
      role: 'Full Stack Development',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
      features: [
        'Session Replay',
        'Heatmaps',
        'Visitor Analytics',
        'Live Visitors',
        'Event Tracking',
        'User Behavior Insights',
      ],
    },
    section: {
      overview: {
        title: 'Designing a personal digital experience',
        details: [
          'I created a modern web experience for Milka Pokora that combines visual storytelling, elegant interactions, and a clean interface to showcase content in a memorable way.',
        ],
      },

      problem: {
        title: 'Creating impact through simplicity',
        details: [
          'The challenge was designing an experience that feels personal and expressive while keeping the interface simple, accessible, and visually balanced.',
        ],
        tags: [
          'Personal branding',
          'Visual storytelling',
          'Clean interface',
          'Responsive design',
          'Smooth interactions',
        ],
      },

      discovery: {
        title: 'Understanding the digital identity',
        details: [
          'I explored the personality, goals, and audience expectations to create a website structure that represents the brand effectively.',
        ],
      },

      research: {
        title: 'Exploring modern portfolio experiences',
        details: [
          'Research focused on storytelling patterns, layouts, and interaction techniques used in premium personal websites.',
        ],
      },

      brand: {
        title: 'Building a visual presence',
        details: [
          'The design system focused on creating a consistent visual language that reflects personality while maintaining usability.',
        ],
      },

      architecture: {
        title: 'Creating a maintainable experience',
        details: [
          'The website was developed using reusable components and scalable frontend patterns for easier updates.',
        ],
      },

      product: {
        title: 'A refined digital showcase',
        details: [
          'The final experience presents content through an elegant interface with smooth interactions and responsive behaviour.',
        ],
      },

      outcome: {
        title: 'A memorable personal brand experience',
        details: [
          'The website created a refined digital presence focused on storytelling, personality, and elegant interactions.',
        ],
        numbers: [
          {
            label: 'Portfolio visitors',
            value: '85,000+',
          },
          {
            label: 'Average engagement time',
            value: '2m 15s',
          },
          {
            label: 'Content sections delivered',
            value: '25+',
          },
        ],
        shipped: [
          'Personal brand website.',
          'Custom visual identity system.',
          'Responsive storytelling experience.',
        ],
      },
    },

    next_case: 'pathlens',
  },
]
