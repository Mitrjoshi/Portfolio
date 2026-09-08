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
}

export interface ProjectSection {
  overview: ProjectSectionItem
  problem: ProjectSectionItem
  discovery: ProjectSectionItem
  research: ProjectSectionItem
  brand: ProjectSectionItem
  architecture: ProjectSectionItem
  product: ProjectSectionItem
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
}

export const PROJECTS = [
  {
    id: 'pathlens',
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
    },

    next_case: 'vertex',
  },
  {
    id: 'vertex',
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
    },

    next_case: 'de-beers',
  },
  {
    id: 'de-beers',
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
    },

    next_case: 'basecamp',
  },
  {
    id: 'basecamp',
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
    },

    next_case: 'fevikwik',
  },
  {
    id: 'fevikwik',
    category: 'apps',
    title: 'Fevikwik',
    platform: 'Web App',
    image: '/projects/fevikwik.png',
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
    },

    next_case: 'milka',
  },
  {
    id: 'milka',
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
    },

    next_case: 'pathlens',
  },
]
