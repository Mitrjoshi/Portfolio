export interface ProjectDetails {
  client: string
  type: string
  year: string
  role: string
  technologies: string[]
  features: string[]
}

export interface Project {
  id: string
  category: 'apps' | 'campaigns'
  title: string
  platform: string
  image: string
  description: string
  details: ProjectDetails
}

export const PROJECTS = [
  {
    id: 'pathlens',
    category: 'apps',
    title: 'Pathlens',
    platform: 'SaaS App',
    image: '/projects/screenshots/pathlens.png',
    description:
      'A website analytics and user behavior intelligence platform that helps teams understand how visitors interact with their digital products.',
    details: {
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
  },
  {
    id: 'de-beers-indra-online',
    category: 'apps',
    title: 'De-beers Indra Online',
    platform: 'Interactive Web',
    image: '/projects/screenshots/indra.png',
    description:
      'An immersive digital experience for De Beers Indra Online, combining premium visual design with an interactive web experience.',
    details: {
      client: 'De Beers',
      type: 'Digital Experience',
      year: '2025',
      role: 'Frontend Development',
      technologies: ['React', 'JavaScript', 'HTML', 'CSS', 'GSAP'],
      features: [
        'Interactive Product Experience',
        'Responsive Design',
        'Motion & Transitions',
        'Premium Visual Experience',
      ],
    },
  },
  {
    id: 'ogilvy-ai-studio',
    category: 'apps',
    title: 'Ogilvy AI Studio',
    platform: 'AI Platform',
    image: '/projects/screenshots/vertex.png',
    description:
      'An AI-focused digital platform built for Ogilvy, designed to showcase and enable AI-powered creative experiences.',
    details: {
      client: 'Ogilvy',
      type: 'Web Platform',
      year: '2025',
      role: 'Frontend Development',
      technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'AI APIs'],
      features: [
        'AI-Powered Experiences',
        'Interactive UI',
        'Dynamic Content',
        'Responsive Interface',
      ],
    },
  },
  {
    id: 'ogilvy-basecamp',
    category: 'apps',
    title: 'Ogilvy Basecamp',
    platform: 'Web Platform',
    image: '/projects/screenshots/basecamp.png',
    description:
      'A digital platform for Ogilvy Basecamp, bringing together content, information and interactive experiences in a structured web interface.',
    details: {
      client: 'Ogilvy',
      type: 'Web Platform',
      year: '2025',
      role: 'Frontend Development',
      technologies: ['React', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS'],
      features: [
        'Content Management',
        'Interactive Sections',
        'Responsive Design',
        'Custom UI Components',
      ],
    },
  },
  {
    id: 'ai-pack-fevikwik',
    category: 'campaigns',
    title: 'AI Pack - Fevikwik',
    platform: 'Digital Campaign',
    image: '/projects/screenshots/fevikwik.png',
    description:
      'An AI-driven digital campaign for Fevikwik, combining brand storytelling with an engaging interactive experience.',
    details: {
      client: 'Fevikwik',
      type: 'Campaign',
      year: '2025',
      role: 'Frontend Development',
      technologies: ['React', 'JavaScript', 'HTML', 'CSS', 'AI'],
      features: [
        'AI Interaction',
        'Campaign Experience',
        'Interactive Storytelling',
        'Responsive Design',
      ],
    },
  },
  {
    id: 'milka-pokora',
    category: 'campaigns',
    title: 'Milka Pokora',
    platform: 'Digital Campaign',
    image: '/projects/screenshots/milka-pokora.png',
    description:
      'A visually rich digital campaign created for Milka Pokora, focused on delivering an engaging branded web experience.',
    details: {
      client: 'Milka',
      type: 'Campaign',
      year: '2025',
      role: 'Frontend Development',
      technologies: ['JavaScript', 'HTML', 'CSS', 'GSAP'],
      features: [
        'Interactive Experience',
        'Campaign Storytelling',
        'Animations',
        'Responsive Design',
      ],
    },
  },
  {
    id: 'kelloggs-chocos',
    category: 'campaigns',
    title: 'Kelloggs Chocos',
    platform: 'Digital Campaign',
    image: '/projects/screenshots/kelloggs.png',
    description:
      'A playful digital campaign for Kelloggs Chocos designed around an engaging and interactive brand experience.',
    details: {
      client: 'Kelloggs',
      type: 'Campaign',
      year: '2025',
      role: 'Frontend Development',
      technologies: ['JavaScript', 'HTML', 'CSS', 'GSAP'],
      features: [
        'Interactive Campaign',
        'Branded Animations',
        'Engaging UI',
        'Responsive Design',
      ],
    },
  },
  {
    id: 'sprite-joke-in-a-bottle',
    category: 'campaigns',
    title: 'Sprite Joke in a Bottle',
    platform: 'Digital Campaign',
    image: '/projects/screenshots/sprite.png',
    description:
      'An interactive Sprite campaign built around the Joke in a Bottle concept, turning the brand idea into a playful digital experience.',
    details: {
      client: 'Sprite',
      type: 'Campaign',
      year: '2025',
      role: 'Frontend Development',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Animation'],
      features: [
        'Interactive Campaign',
        'Playful Interactions',
        'Animation',
        'Mobile-First Experience',
      ],
    },
  },
  {
    id: 'maaza-ho-jaye',
    category: 'campaigns',
    title: 'Maaza Ho Jaye',
    platform: 'Digital Campaign',
    image: '/projects/screenshots/maaza.png',
    description:
      'A vibrant digital campaign for Maaza Ho Jaye focused on creating a memorable, interactive and visually engaging brand experience.',
    details: {
      client: 'Maaza',
      type: 'Campaign',
      year: '2025',
      role: 'Frontend Development',
      technologies: ['JavaScript', 'HTML', 'CSS', 'GSAP'],
      features: [
        'Interactive Experience',
        'Campaign Storytelling',
        'Animations',
        'Responsive Design',
      ],
    },
  },
]
