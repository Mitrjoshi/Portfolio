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

// Sections are intentionally flexible because every project tells a different story.
// The object key becomes the section identifier used by the case-study renderer.
export type ProjectSection = Record<string, ProjectSectionItem>

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
  pathlens: '#5B8DEF',
  vertex: '#9B6CFF',
  'de-beers': '#C9A227',
  basecamp: '#38BDF8',
  fevikwik: '#db3519',
  milka: '#7665a3',
}

export const PROJECTS: Project[] = [
  // =========================================================
  // PATHLENS
  // =========================================================

  {
    id: 'pathlens',
    confidential: false,
    category: 'apps',
    title: 'Pathlens',
    platform: 'SaaS Platform',
    image: '/projects/pathlens.png',

    description:
      'A full-stack product analytics platform that captures behavioural data and turns sessions, events, heatmaps, and live activity into actionable product insights.',

    details: {
      live: 'https://d1zadf3to2hh75.cloudfront.net',
      client: 'Pathlens',
      type: 'SaaS Product',
      year: '2026',
      role: 'Full-Stack Development',

      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],

      features: [
        'Event Ingestion',
        'Session Replay',
        'Heatmaps',
        'Live Visitors',
        'Event Tracking',
        'Behaviour Analytics',
      ],
    },

    section: {
      overview: {
        title: 'Building analytics from capture to insight',
        details: [
          'I built Pathlens as a full-stack analytics product rather than a dashboard-only experience. The work spans the React application, event collection, backend services, PostgreSQL data modelling, analytics retrieval, and cloud delivery needed to transform raw user interactions into useful product intelligence.',
        ],
      },

      challenge: {
        title: 'Turning behavioural data into useful product intelligence',
        details: [
          'The core challenge was handling multiple behavioural signals without overwhelming the people using the product. Sessions, events, visitor activity, and interaction patterns needed to be captured consistently, stored in a queryable structure, and surfaced through interfaces that make investigation fast and understandable.',
        ],

        tags: [
          'Event Collection',
          'Analytics Queries',
          'Session Intelligence',
          'Data Modelling',
          'Near Real-Time Data',
          'Scalable Architecture',
        ],
      },

      'product discovery': {
        title: 'Designing around real product questions',
        details: [
          'The analytics model was structured around the questions product teams repeatedly ask: what happened during a session, where users interacted, which events occurred, who is active now, and where friction may exist. This framing helped keep both the data model and navigation focused on investigation rather than raw telemetry.',
        ],

        // images: [
        //   '/project-details/pathlens/discovery.png',
        //   '/project-details/pathlens/research.png',
        // ],
      },

      'system architecture': {
        title: 'Separating collection, processing, and analytics',
        details: [
          'The application is organised into clear layers for client-side event capture, API communication, server-side processing, PostgreSQL persistence, and analytics delivery. Keeping these concerns separated makes individual capabilities easier to extend without tightly coupling the entire platform.',
        ],

        // images: ['/project-details/pathlens/architecture.png'],
      },

      'backend and data': {
        title: 'Structuring the backend around visitors, sessions, and events',
        details: [
          'Node.js services handle the application and analytics data flows, while PostgreSQL provides structured persistence for visitors, sessions, events, and interaction metadata. API responses are shaped around the product experiences that consume them instead of exposing database structures directly to the frontend.',
        ],

        tags: [
          'Node.js',
          'PostgreSQL',
          'REST APIs',
          'Query Design',
          'Data Validation',
        ],

        // images: ['/project-details/pathlens/backend.png'],
      },

      'frontend experience': {
        title: 'Making dense analytics usable',
        details: [
          'React and TypeScript power reusable interfaces for session replay, heatmaps, live visitors, event exploration, and behavioural insights. The frontend focuses on predictable state, responsive layouts, clear loading and empty states, and presenting large amounts of analytical information without unnecessary complexity.',
        ],
      },

      'product system': {
        title: 'Building a reusable product system',
        details: [
          'Shared components and interaction patterns keep navigation, filters, controls, data states, and feedback consistent across the analytics modules. Beyond visual consistency, the system reduces implementation duplication and makes new analytical capabilities easier to introduce.',
        ],

        // images: [
        //   '/project-details/pathlens/brand-1.png',
        //   '/project-details/pathlens/brand-2.png',
        //   '/project-details/pathlens/brand-3.png',
        //   '/project-details/pathlens/brand-4.png',
        //   '/project-details/pathlens/brand-5.png',
        // ],
      },

      'cloud and performance': {
        title: 'Engineering for reliable cloud delivery',
        details: [
          'Cloud delivery is treated as part of the product architecture, with attention to deployment, static assets, API reliability, and performance across data-heavy screens. Frontend and backend concerns remain separated so each layer can evolve without requiring large structural rewrites.',
        ],
      },

      outcome: {
        title: 'An end-to-end behavioural analytics platform',
        details: [
          'Pathlens brings event collection, persistence, backend processing, analytics interfaces, and cloud delivery into one connected product rather than treating analytics as a collection of isolated dashboard screens.',
        ],

        shipped: [
          'Behavioural event collection and session-based data flows.',
          'Session replay, heatmaps, live visitors, and event analytics.',
          'Node.js and PostgreSQL backend architecture.',
          'Cloud-hosted full-stack application delivery.',
        ],
      },
    },

    next_case: 'vertex',
  },

  // =========================================================
  // VERTEX
  // =========================================================

  {
    id: 'vertex',
    confidential: true,
    category: 'apps',
    title: 'Vertex',
    platform: 'Web Platform',
    image: '/projects/vertex.png',

    description:
      'A confidential full-stack web platform built around complex application workflows using React, TypeScript, Node.js, SQL Server, and GCP.',

    details: {
      live: 'https://dev.ogilvystudio.ai/',
      client: 'Confidential',
      type: 'Enterprise Product',
      year: '2026',
      role: 'Full-Stack Development',

      technologies: ['React', 'TypeScript', 'Node.js', 'SQL Server', 'GCP'],

      features: [
        'Workflow Management',
        'API-backed Data Flows',
        'Persistent Data Storage',
        'Reusable Application Modules',
        'Responsive Web Experience',
        'Cloud Deployment',
      ],
    },

    section: {
      overview: {
        title: 'Engineering a workflow-heavy product end to end',
        details: [
          'I worked across the full application stack, connecting a React and TypeScript frontend with Node.js services, SQL Server persistence, and GCP delivery. Because the product is confidential, this case study focuses on engineering responsibilities and system architecture rather than client-specific business logic.',
        ],
      },

      challenge: {
        title: 'Keeping complex workflows maintainable',
        details: [
          'The platform needed to support multiple connected actions, application states, and data dependencies without allowing complexity in one layer to spread across the entire system. The implementation therefore focused on clear boundaries between presentation, workflows, APIs, persistence, and infrastructure.',
        ],

        tags: [
          'Complex Workflows',
          'Typed Frontend',
          'API Contracts',
          'Relational Data',
          'Reusable Modules',
          'Cloud Delivery',
        ],
      },

      'workflow mapping': {
        title: 'Mapping system behaviour before implementation',
        details: [
          'Key user actions, dependencies, and state transitions were mapped before implementation so frontend states could align with backend operations and database changes. This made loading, validation, failure, and completion states easier to reason about while reducing duplicated logic in the interface.',
        ],

        // images: [
        //   '/project-details/vertex/discovery.png',
        //   '/project-details/vertex/research.png',
        // ],
      },

      'application architecture': {
        title: 'Separating application responsibilities',
        details: [
          'Reusable React modules handle presentation and interaction while Node.js services own server-side workflows and data access. Shared TypeScript conventions help keep request payloads, application states, and integration boundaries explicit across the stack.',
        ],

        // images: ['/project-details/vertex/architecture.png'],
      },

      'backend and database': {
        title: 'Connecting application workflows to relational data',
        details: [
          'Backend services are organised around product actions rather than direct table manipulation. SQL Server provides the persistence layer, while APIs manage validation, controlled reads and writes, and responses designed around the needs of application workflows.',
        ],
      },

      'frontend engineering': {
        title: 'Building complete application workflows',
        details: [
          'The frontend uses reusable React components, typed state, predictable data-loading patterns, responsive behaviour, and clear validation feedback. The focus is on making complete user flows resilient across success, loading, empty, and error states instead of treating individual screens as isolated interfaces.',
        ],
      },

      'cloud and quality': {
        title: 'Designing for repeatable cloud delivery',
        details: [
          'Deployment and environment concerns are treated as part of the engineering process. The codebase is structured so frontend, backend, database, and infrastructure changes can evolve independently while still moving through a predictable development and deployment workflow.',
        ],
      },

      outcome: {
        title: 'A maintainable foundation for continued product development',
        details: [
          'The platform brings together reusable frontend modules, API-backed workflows, relational persistence, and cloud delivery in a connected architecture designed to support ongoing product iteration.',
        ],

        shipped: [
          'React and TypeScript application architecture.',
          'Node.js backend workflow layer.',
          'SQL Server persistence and data access.',
          'GCP-based application delivery.',
        ],
      },
    },

    next_case: 'de-beers',
  },

  // =========================================================
  // DE BEERS
  // =========================================================

  {
    id: 'de-beers',
    confidential: false,
    category: 'apps',
    title: 'De Beers',
    platform: 'Digital Experience',
    image: '/projects/indra.png',

    description:
      'A premium digital experience combining reusable React interfaces, backend services, structured data, and cloud delivery for content-rich storytelling across devices.',

    details: {
      live: 'https://dev.ogilvystudio.ai/',
      client: 'De Beers',
      type: 'Brand Platform',
      year: '2026',
      role: 'Full-Stack Development',

      technologies: ['React', 'TypeScript', 'Node.js', 'SQL Server', 'AWS'],

      features: [
        'Content-led Experiences',
        'Dynamic Data Delivery',
        'Reusable Content Modules',
        'Responsive Storytelling',
        'Media-rich Pages',
        'Cloud Deployment',
      ],
    },

    section: {
      overview: {
        title: 'Engineering a premium digital experience',
        details: [
          'The De Beers project combined high-quality visual presentation with full-stack implementation. I worked across the React and TypeScript experience as well as the Node.js, SQL Server, and cloud-backed foundation responsible for delivering structured content and media throughout the platform.',
        ],
      },

      challenge: {
        title: 'Balancing visual richness with engineering discipline',
        details: [
          'Content-rich experiences introduce large media assets, detailed layouts, and polished interactions while still requiring predictable data, reusable modules, responsive behaviour, and reliable delivery. The challenge was preserving the quality of the experience without creating a fragile frontend implementation.',
        ],

        tags: [
          'Content Architecture',
          'Structured Data',
          'Reusable Modules',
          'Responsive Delivery',
          'Backend Integration',
          'Performance',
        ],
      },

      'experience planning': {
        title: 'Mapping content and application structure',
        details: [
          'The experience was mapped around how users move through brand and product content. That work helped define reusable page patterns, content relationships, frontend module boundaries, and the data required from the application layer.',
        ],

        // images: [
        //   '/project-details/de-beers/discovery.png',
        //   '/project-details/de-beers/research.png',
        // ],
      },

      'full stack architecture': {
        title: 'Connecting reusable interfaces to structured data',
        details: [
          'React modules remain focused on presentation and interaction while Node.js services handle application logic and structured data delivery from SQL Server. This lets content-heavy pages share common frontend and backend patterns instead of becoming independent one-off implementations.',
        ],

        // images: ['/project-details/de-beers/architecture.png'],
      },

      'frontend and media': {
        title: 'Building responsive, media-rich interfaces',
        details: [
          'The frontend was developed around reusable presentation components, responsive composition, predictable content states, and careful media handling. This keeps the experience polished across screen sizes while maintaining a component architecture that can evolve over time.',
        ],
      },

      'delivery and performance': {
        title: 'Making performance part of the experience',
        details: [
          'Cloud delivery, media loading, frontend architecture, and backend response patterns were considered together because rich presentation depends on content arriving reliably and interactions remaining responsive across devices.',
        ],
      },

      outcome: {
        title: 'A premium experience backed by reusable architecture',
        details: [
          'The resulting platform brings brand storytelling and full-stack implementation together through reusable React modules, backend-supported data delivery, structured persistence, and cloud infrastructure.',
        ],

        shipped: [
          'Reusable React content and interaction modules.',
          'Node.js application and data-delivery layer.',
          'SQL Server-backed structured data flows.',
          'Cloud-hosted delivery foundation.',
        ],
      },
    },

    next_case: 'basecamp',
  },

  // =========================================================
  // BASECAMP
  // =========================================================

  {
    id: 'basecamp',
    confidential: true,
    category: 'apps',
    title: 'Basecamp',
    platform: 'Workshop Platform',
    image: '/projects/basecamp.png',

    description:
      'A configurable full-stack workshop platform for participant onboarding, idea creation, AI-assisted refinement, shortlisting, voting, administration, and live presentation.',

    details: {
      live: 'https://dev.ogilvystudio.ai/',
      client: 'Ogilvy',
      type: 'Collaborative Platform',
      year: '2026',
      role: 'Full-Stack Development',

      technologies: ['React', 'TypeScript', 'Node.js', 'SQL Server', 'GCP'],

      features: [
        'Workshop Configuration',
        'Participant Team Access',
        'Idea Lifecycle Management',
        'AI-assisted Idea Refinement',
        'Shortlisting & Voting',
        'Admin Controls & Big Screen',
      ],
    },

    section: {
      overview: {
        title: 'Building a workshop engine, not just an interface',
        details: [
          'I developed Basecamp as a full-stack workshop platform connecting participant experiences, facilitator controls, configurable workshop rules, persistent idea state, voting, and presentation flows. The system supports the complete lifecycle of a workshop rather than a collection of disconnected screens.',
        ],
      },

      challenge: {
        title: 'Keeping every participant aligned to one workshop state',
        details: [
          'The main challenge was enforcing shared workflow rules across participant, admin, and presentation experiences. Participants can create and refine ideas, teams can shortlist them, and admins control voting. Once the workshop moves forward, actions that are no longer valid must be restricted by application state and backend rules rather than frontend controls alone.',
        ],

        tags: [
          'Multi-user Workflows',
          'Workshop State',
          'Idea Lifecycle',
          'Voting Rules',
          'Admin Controls',
          'Presentation Mode',
        ],
      },

      'domain model': {
        title: 'Modelling the journey from idea to winner',
        details: [
          'The core domain is organised around workshops, teams, participants, ideas, lifecycle states, shortlists, votes, and winner selection. Clear state transitions determine which actions are available during ideation, voting, and completion.',
        ],

        // images: [
        //   '/project-details/basecamp/discovery.png',
        //   '/project-details/basecamp/research.png',
        // ],
      },

      'backend workflows': {
        title: 'Enforcing workshop rules through APIs',
        details: [
          'Node.js services handle operations behind idea creation, editing, refinement, shortlisting, sequencing, voting, and administrative controls. Server-side validation ensures locked workshop states and voting rules cannot be bypassed through client-side behaviour.',
        ],
      },

      'database and state': {
        title: 'Persisting workshop configuration and activity',
        details: [
          'SQL Server stores workshop configuration, users, teams, ideas, ordering, statuses, voting data, and related activity. The data model supports configurable workshop behaviour while maintaining a consistent source of truth across participant, admin, and presentation interfaces.',
        ],
      },

      'participant experience': {
        title: 'Guiding participants through clear next actions',
        details: [
          'The React participant experience covers team access, walkthrough guidance, idea submission, optional AI refinement, shortlisting, voting, and final-stage visibility. Interface states respond to workshop rules so actions automatically become available or lock as the workshop progresses.',
        ],
      },

      'ai assistance': {
        title: 'Integrating AI into the workshop lifecycle',
        details: [
          'AI-assisted capabilities such as Coach and Scout are integrated as controlled parts of the workshop flow rather than standalone tools. Their availability can depend on configuration and workshop stage while participant ideas remain part of the same backend-managed lifecycle.',
        ],
      },

      'admin and big screen': {
        title: 'Separating facilitation from participation',
        details: [
          'The admin experience manages workshop setup, stage controls, voting activation, configuration, and presentation actions. A separate Big Screen interface supports facilitated display of workshop progress, ideas, voting QR states, and manually controlled presentation sequences.',
        ],
      },

      'system architecture': {
        title: 'Connecting three experiences to one source of truth',
        details: [
          'Participant, admin, and Big Screen interfaces share the same backend state and business rules. This prevents one surface from showing outdated permissions or workshop status after another has already moved the session into a new stage.',
        ],

        // images: ['/project-details/basecamp/architecture.png'],
      },

      'cloud and access': {
        title: 'Building for repeatable workshop delivery',
        details: [
          'The GCP-hosted architecture allows new workshops to reuse the same application while varying configuration, content, stages, and rules. Access control and server-side validation are treated as platform-level concerns because facilitator and participant actions have different permissions and effects.',
        ],
      },

      outcome: {
        title: 'A reusable platform for facilitated collaboration',
        details: [
          'Basecamp turns the workshop lifecycle into a configurable digital system with shared data, enforceable state transitions, participant collaboration, AI assistance, voting, facilitator controls, and presentation experiences.',
        ],

        shipped: [
          'Configurable workshop and participant flows.',
          'Persistent idea lifecycle from draft through winner.',
          'Admin-controlled shortlisting, voting, and presentation.',
          'AI-assisted ideation integrated into workshop rules.',
          'Shared architecture across participant, admin, and Big Screen.',
        ],
      },
    },

    next_case: 'fevikwik',
  },

  // =========================================================
  // FEVIKWIK
  // =========================================================

  {
    id: 'fevikwik',
    confidential: false,
    category: 'apps',
    title: 'Fevikwik',
    platform: 'Campaign Web Platform',
    image: '/projects/fevikwik.png',

    description:
      'A full-stack campaign experience combining interactive storytelling, reusable application modules, structured data, backend-supported workflows, and responsive cloud delivery.',

    details: {
      live: 'https://fevikwik-kwik-gpt-stag-25.onmlab.in/',
      client: 'Fevikwik',
      type: 'Digital Campaign',
      year: '2026',
      role: 'Full-Stack Development',

      technologies: ['React', 'TypeScript', 'Node.js', 'SQL Server', 'AWS'],

      features: [
        'Campaign Storytelling',
        'Interactive Experiences',
        'Structured Content Data',
        'Reusable Campaign Modules',
        'Responsive Delivery',
        'Cloud-hosted Application',
      ],
    },

    section: {
      overview: {
        title: 'Turning a campaign into a maintainable web application',
        details: [
          'The Fevikwik project went beyond building visual campaign pages. I developed the experience as a full-stack application using React and TypeScript on the frontend, Node.js for application logic, SQL Server for structured data, and cloud infrastructure for delivery.',
        ],
      },

      challenge: {
        title: 'Keeping a fast-moving campaign maintainable',
        details: [
          'Campaign requirements can change quickly, while heavily hard-coded pages become difficult to maintain. The implementation therefore needed reusable modules, consistent data structures, backend-supported content flows, responsive behaviour, and an architecture that could accommodate iteration without rebuilding the entire experience.',
        ],

        tags: [
          'Campaign Architecture',
          'Reusable Modules',
          'Structured Content',
          'Interactive Flows',
          'Responsive Development',
          'Cloud Delivery',
        ],
      },

      'campaign planning': {
        title: 'Turning campaign requirements into reusable modules',
        details: [
          'The experience was mapped around campaign storytelling, content sections, interactive moments, product information, and engagement actions. This helped translate creative requirements into reusable technical modules instead of isolated page implementations.',
        ],

        // images: [
        //   '/project-details/fevikwik/discovery.png',
        //   '/project-details/fevikwik/research.png',
        // ],
      },

      'application architecture': {
        title: 'Building a modular full-stack foundation',
        details: [
          'The application separates React presentation modules from Node.js application logic and SQL Server data concerns. Reusable sections consume structured data while layout, interaction, backend behaviour, and persistence remain independently maintainable.',
        ],

        // images: ['/project-details/fevikwik/architecture.png'],
      },

      'interactive frontend': {
        title: 'Building interaction without sacrificing responsiveness',
        details: [
          'The frontend combines campaign-led layouts with reusable components, interactive content patterns, responsive behaviour, and motion. The implementation keeps visual energy aligned with the campaign while maintaining clear navigation and usable experiences across devices.',
        ],
      },

      'backend and delivery': {
        title: 'Supporting the campaign with backend services',
        details: [
          'Node.js services and SQL Server provide a structured application layer behind the experience, while cloud infrastructure supports deployment and content delivery. This gives the campaign a maintainable technical foundation beyond its initial launch.',
        ],
      },

      outcome: {
        title: 'A campaign platform built for continued iteration',
        details: [
          'The final application combines campaign storytelling with reusable frontend modules, backend-supported data flows, and cloud delivery so future changes can be implemented as product updates rather than one-off page rebuilds.',
        ],

        shipped: [
          'Responsive React campaign experience.',
          'Reusable interaction and storytelling modules.',
          'Node.js and SQL Server application layer.',
          'Cloud-based deployment and delivery.',
        ],
      },
    },

    next_case: 'milka',
  },

  // =========================================================
  // MILKA POKORA
  // =========================================================

  {
    id: 'milka',
    confidential: false,
    category: 'apps',
    title: 'Milka Pokora',
    platform: 'Personal Brand Platform',
    image: '/projects/milka-pokora.png',

    description:
      'A focused personal brand platform combining editorial storytelling, structured content, reusable React components, backend data delivery, and performance-conscious deployment.',

    details: {
      live: 'https://dev.ogilvystudio.ai/',
      client: 'Milka Pokora',
      type: 'Portfolio Platform',
      year: '2026',
      role: 'Full-Stack Development',

      technologies: ['React', 'TypeScript', 'Node.js', 'SQL Server', 'AWS'],

      features: [
        'Editorial Storytelling',
        'Structured Portfolio Content',
        'Dynamic Content Delivery',
        'Responsive Experience',
        'SEO-ready Page Structure',
        'Cloud Deployment',
      ],
    },

    section: {
      overview: {
        title: 'Building a personal brand as a maintainable platform',
        details: [
          'Milka Pokora required a more focused architecture than the larger SaaS and enterprise applications. The implementation combines a refined React experience with Node.js, SQL Server, and cloud delivery so portfolio content can remain structured and separate from presentation logic.',
        ],
      },

      challenge: {
        title: 'Balancing expression with maintainability',
        details: [
          'The main challenge was giving the experience enough flexibility for editorial storytelling without turning each page into bespoke code. Content, imagery, and presentation needed to remain expressive while the underlying system stayed reusable, responsive, and easy to maintain.',
        ],

        tags: [
          'Personal Brand',
          'Structured Content',
          'Editorial UI',
          'Reusable Components',
          'Responsive Delivery',
        ],
      },

      'content architecture': {
        title: 'Structuring stories, projects, and media as data',
        details: [
          'Content is organised around reusable structures so portfolio sections can evolve without redesigning the application. Separating content from React presentation components provides a cleaner foundation for ongoing updates and additional sections.',
        ],
      },

      'frontend engineering': {
        title: 'Building a responsive editorial interface',
        details: [
          'React and TypeScript power the visual storytelling layer through reusable sections, responsive layouts, predictable content rendering, and consistent interaction patterns. The goal is to keep the experience polished without making every page a separate implementation.',
        ],
      },

      'performance and delivery': {
        title: 'Supporting media-rich content with reliable delivery',
        details: [
          'Application structure, media loading, semantic markup, responsive behaviour, and cloud delivery are considered together so the platform remains visually rich while still being maintainable and performance-conscious.',
        ],
      },

      outcome: {
        title: 'A focused platform designed to evolve',
        details: [
          'The result is a personal brand platform with a deliberately lighter architecture than the larger product applications while maintaining the same engineering principles around reusable UI, structured data, backend separation, and reliable delivery.',
        ],

        shipped: [
          'Responsive React and TypeScript experience.',
          'Structured content and backend separation.',
          'Reusable editorial presentation components.',
          'Cloud-based delivery foundation.',
        ],
      },
    },

    next_case: 'pathlens',
  },
]
