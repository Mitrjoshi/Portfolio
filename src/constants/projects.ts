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
  fevikwik: '#fbec4c',
  milka: '#7665a3',
}

export const PROJECTS: Project[] = [
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
      role: 'Full Stack Development',
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
          'I built Pathlens as a full-stack SaaS analytics product rather than a dashboard-only experience. The work covered the browser-facing application, event collection flows, backend services, PostgreSQL data modelling, analytics retrieval, and AWS delivery needed to turn raw user interactions into useful product intelligence.',
        ],
      },
      challenge: {
        title: 'Handling behavioural data without overwhelming the product',
        details: [
          'The core challenge was connecting high-volume behavioural signals with an experience that remained understandable for product teams. Session activity, events, visitor state, and interaction patterns needed to be captured consistently, stored in a queryable form, and surfaced quickly enough to support investigation and decision-making.',
        ],
        tags: [
          'Event collection',
          'Analytics queries',
          'Session intelligence',
          'Data modelling',
          'Near real-time visibility',
          'Scalable product architecture',
        ],
      },
      'product discovery': {
        title: 'Defining the analytics model around real product questions',
        details: [
          'The platform was structured around the questions teams repeatedly ask: what happened in a session, where users interacted, which events occurred, who is active now, and where friction appears. That framing helped keep both the data model and the product navigation focused on investigation rather than raw telemetry.',
        ],
        images: [
          '/project-details/pathlens/discovery.png',
          '/project-details/pathlens/research.png',
        ],
      },
      'system architecture': {
        title: 'Separating collection, application, and analytics concerns',
        details: [
          'The application was organised into clear layers for client-side interaction capture, API communication, backend processing, PostgreSQL persistence, and analytics delivery. This separation made it easier to evolve individual capabilities such as event tracking or session playback without tightly coupling every part of the platform.',
        ],
        images: ['/project-details/pathlens/architecture.png'],
      },
      'backend and data': {
        title: 'Designing the backend around sessions, visitors, and events',
        details: [
          'Node.js services handled the application data flows behind the analytics experience, while PostgreSQL provided structured persistence for visitors, sessions, events, and related metadata. API responses were shaped around the views the product actually needed instead of exposing database structure directly to the frontend.',
        ],
        tags: [
          'Node.js services',
          'PostgreSQL',
          'REST-style APIs',
          'Query design',
          'Data validation',
        ],
        images: ['/project-details/pathlens/backend.png'],
      },
      'frontend experience': {
        title: 'Making dense analytics usable in the browser',
        details: [
          'React and TypeScript were used to build reusable analytics views for session replay, heatmaps, live visitors, event exploration, and behavioural insights. The frontend focused on predictable state, clear loading and empty states, responsive layouts, and interfaces that could handle large amounts of behavioural information without becoming visually noisy.',
        ],
      },
      'product system': {
        title: 'Creating a consistent product language across complex tools',
        details: [
          'A reusable product system kept navigation, filters, data states, controls, and feedback patterns consistent across the analytics modules. The visual identity supported the product, but the larger goal was to reduce implementation duplication and make new analytical views easier to add.',
        ],
        images: [
          '/project-details/pathlens/brand-1.png',
          '/project-details/pathlens/brand-2.png',
          '/project-details/pathlens/brand-3.png',
          '/project-details/pathlens/brand-4.png',
          '/project-details/pathlens/brand-5.png',
        ],
      },
      'cloud and performance': {
        title: 'Preparing the product for reliable cloud delivery',
        details: [
          'The AWS-based delivery setup was treated as part of the product architecture, with attention to deployability, static asset delivery, API reliability, and performance across data-heavy screens. The implementation was structured so frontend and backend concerns could be evolved and deployed without rewriting the application as it grew.',
        ],
      },
      outcome: {
        title: 'A complete behavioural analytics stack',
        details: [
          'Pathlens was delivered as an end-to-end analytics product covering collection, persistence, backend services, analytics interfaces, and cloud delivery rather than only the visible dashboard layer.',
        ],
        shipped: [
          'Behavioural event collection and session-oriented data flows.',
          'Session replay, heatmap, live visitor, and event analytics experiences.',
          'Node.js and PostgreSQL backend foundation.',
          'AWS-hosted full-stack delivery architecture.',
        ],
      },
    },
    next_case: 'vertex',
  },
  {
    id: 'vertex',
    confidential: true,
    category: 'apps',
    title: 'Vertex',
    platform: 'Web Platform',
    image: '/projects/vertex.png',
    description:
      'A confidential full-stack web platform built to support complex, data-backed workflows through a scalable React application, Node.js services, SQL Server, and GCP.',
    details: {
      live: 'https://dev.ogilvystudio.ai/',
      client: 'Confidential',
      type: 'Enterprise Product',
      year: '2026',
      role: 'Full Stack Development',
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
          'I worked across the full Vertex stack, connecting a React and TypeScript frontend with Node.js services, SQL Server persistence, and GCP delivery. Because the product is confidential, the case study focuses on engineering decisions and system responsibilities rather than client-specific business logic.',
        ],
      },
      challenge: {
        title: 'Keeping complex workflows understandable and maintainable',
        details: [
          'The platform needed to support multiple connected actions and data states without allowing frontend complexity to leak into backend design. The implementation therefore focused on clear boundaries between presentation, domain workflows, API contracts, persistence, and infrastructure.',
        ],
        tags: [
          'Complex workflows',
          'Typed frontend',
          'API contracts',
          'Relational data',
          'Maintainable modules',
          'Cloud delivery',
        ],
      },
      'workflow mapping': {
        title: 'Mapping system behaviour before implementation',
        details: [
          'Key user actions and dependencies were mapped before building the screens so that frontend states could be matched to backend operations and database changes. This reduced duplicated logic in the UI and made failure, loading, validation, and completion states easier to reason about.',
        ],
        images: [
          '/project-details/vertex/discovery.png',
          '/project-details/vertex/research.png',
        ],
      },
      'application architecture': {
        title: 'Building around reusable domain and service boundaries',
        details: [
          'The application was structured so reusable React modules handled presentation and interaction while Node.js services owned server-side workflow logic and data access. Shared TypeScript conventions helped keep payloads and application states explicit across the stack.',
        ],
        images: ['/project-details/vertex/architecture.png'],
      },
      'backend and database': {
        title: 'Connecting server-side workflows to relational data',
        details: [
          'Backend services were organised around application actions rather than direct table manipulation. SQL Server provided the relational persistence layer, while the API layer handled validation, controlled reads and writes, and responses shaped for the application workflows.',
        ],
      },
      'frontend engineering': {
        title: 'Building a responsive application rather than isolated screens',
        details: [
          'The frontend used reusable React components, typed state, predictable data-loading patterns, validation feedback, and responsive behaviour. The emphasis was on making complete workflows resilient across success, empty, loading, and error states instead of treating the interface as a static presentation layer.',
        ],
      },
      'cloud and quality': {
        title: 'Designing for repeatable delivery on GCP',
        details: [
          'Deployment and environment concerns were treated as part of the engineering work. The codebase was kept modular so application changes could move through development and deployment without tightly coupling infrastructure, database, backend, and frontend changes.',
        ],
      },
      outcome: {
        title:
          'A maintainable full-stack foundation for continued product growth',
        details: [
          'Vertex was delivered as a connected application stack with reusable frontend modules, API-backed workflows, relational persistence, and cloud deployment foundations designed to support continued iteration.',
        ],
        shipped: [
          'React and TypeScript application architecture.',
          'Node.js backend workflow layer.',
          'SQL Server persistence and data access flows.',
          'GCP-ready application delivery.',
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
    platform: 'Digital Experience',
    image: '/projects/indra.png',
    description:
      'A premium full-stack digital experience combining a React frontend with backend services, structured data, and cloud delivery to support rich brand storytelling across devices.',
    details: {
      live: 'https://dev.ogilvystudio.ai/',
      client: 'De Beers',
      type: 'Brand Platform',
      year: '2026',
      role: 'Full Stack Development',
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
        title: 'Translating a luxury experience into a dependable web platform',
        details: [
          'The De Beers project combined premium presentation with full-stack engineering. I worked on the React and TypeScript experience as well as the Node.js, SQL Server, and AWS-backed foundation required to deliver structured content and media consistently across the site.',
        ],
      },
      challenge: {
        title: 'Balancing visual richness with engineering discipline',
        details: [
          'Luxury storytelling introduces large media, detailed layouts, and highly polished interactions, but the platform still needs predictable data, reusable modules, responsive behaviour, and reliable delivery. The implementation therefore had to preserve the brand experience without creating a fragile frontend-only build.',
        ],
        tags: [
          'Premium storytelling',
          'Structured content',
          'Reusable modules',
          'Responsive delivery',
          'Backend integration',
          'Performance awareness',
        ],
      },
      'experience planning': {
        title: 'Mapping content, hierarchy, and digital touchpoints',
        details: [
          'The experience was planned around how users move through brand and product content, which helped determine reusable page patterns, content relationships, and the data each frontend module needed from the application layer.',
        ],
        images: [
          '/project-details/de-beers/discovery.png',
          '/project-details/de-beers/research.png',
        ],
      },
      'full stack architecture': {
        title: 'Connecting modular frontend experiences to structured data',
        details: [
          'React modules were kept focused on rendering and interaction while Node.js services handled application logic and data delivery from SQL Server. This allowed content-rich pages to share common backend and frontend patterns instead of being implemented as one-off static pages.',
        ],
        images: ['/project-details/de-beers/architecture.png'],
      },
      'frontend and media': {
        title: 'Building responsive, media-rich interfaces',
        details: [
          'The frontend was developed around responsive composition, reusable presentation components, progressive data states, and careful media handling so the experience could remain polished across screen sizes without sacrificing maintainability.',
        ],
      },
      'delivery and performance': {
        title:
          'Treating performance and cloud delivery as part of the experience',
        details: [
          'AWS delivery, asset loading, application structure, and backend response patterns were considered together because a premium interface only works when content arrives reliably and interactions remain responsive.',
        ],
      },
      outcome: {
        title: 'A premium experience backed by a reusable application stack',
        details: [
          'The result was a content-led digital platform where brand presentation and full-stack implementation were designed together rather than as separate frontend and backend efforts.',
        ],
        shipped: [
          'Reusable React content and interaction modules.',
          'Node.js application and data-delivery layer.',
          'SQL Server-backed structured data flows.',
          'AWS-hosted delivery foundation.',
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
    platform: 'Workshop Platform',
    image: '/projects/basecamp.png',
    description:
      'A configurable full-stack workshop platform for participant onboarding, idea creation and refinement, shortlisting, voting, facilitator controls, and live presentation workflows.',
    details: {
      live: 'https://dev.ogilvystudio.ai/',
      client: 'Ogilvy',
      type: 'Collaborative Platform',
      year: '2026',
      role: 'Full Stack Development',
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
        title: 'Building a workshop engine, not just a participant interface',
        details: [
          'I developed Basecamp as a full-stack workshop platform connecting participant experiences, facilitator controls, configurable workshop rules, persistent idea state, voting, and presentation flows. The system had to support the full lifecycle of a workshop rather than a collection of independent screens.',
        ],
      },
      challenge: {
        title: 'Keeping many participants aligned to one workshop state',
        details: [
          'The key challenge was enforcing shared rules across different user experiences. Participants can create and refine ideas, ideas can be shortlisted, voting is enabled by an admin, and once voting begins the system needs to prevent actions that are no longer valid. Those rules belong in the application workflow and backend state, not only in disabled buttons on the frontend.',
        ],
        tags: [
          'Multi-user workflows',
          'Workshop state',
          'Idea lifecycle',
          'Voting rules',
          'Admin controls',
          'Presentation mode',
        ],
      },
      'domain model': {
        title: 'Modelling the lifecycle from draft idea to winner',
        details: [
          'The core domain was organised around workshops, teams, participants, ideas, lifecycle states, shortlisting, votes, and winner selection. Clear state transitions made it possible to enforce which operations were allowed before voting, during voting, and after a workshop reached its final stage.',
        ],
        images: [
          '/project-details/basecamp/discovery.png',
          '/project-details/basecamp/research.png',
        ],
      },
      'backend workflows': {
        title: 'Putting workshop rules behind APIs',
        details: [
          'Node.js services handled the workflow operations behind idea creation, editing, refinement, shortlisting, sequence changes, voting, and administrative controls. Server-side validation was important so locked workshop states and voting rules could not be bypassed by client-side behaviour.',
        ],
      },
      'database and state': {
        title: 'Persisting workshop configuration and participation data',
        details: [
          'SQL Server provided the persistence layer for workshop configuration, users and teams, ideas, ordering, statuses, and other workshop activity. The data model supported configurable workshop behaviour while keeping operational state consistent between participant, admin, and presentation experiences.',
        ],
      },
      'participant experience': {
        title: 'Designing the participant journey around clear next actions',
        details: [
          'The React participant experience covers entry through team access, walkthrough guidance, idea submission, optional refinement, shortlisting, voting, and final-stage visibility. UI states are driven by workshop rules so unavailable actions disappear or lock when the backend state changes.',
        ],
      },
      'ai assistance': {
        title: 'Adding AI assistance without replacing participant ownership',
        details: [
          'AI-assisted flows such as Coach and Scout were treated as controlled product capabilities inside the workshop lifecycle. Their availability can depend on workshop configuration and current stage, while the submitted idea remains part of the same backend-managed lifecycle as manually created ideas.',
        ],
      },
      'admin and big screen': {
        title: 'Separating facilitation controls from the participant flow',
        details: [
          'The admin experience manages workshop setup, stage controls, voting activation, configuration, and presentation actions. A separate Big Screen experience is designed for facilitated display, including workshop progress, ideas, voting QR visibility, and manually controlled presentation states.',
        ],
      },
      'system architecture': {
        title: 'Connecting three experiences to one source of truth',
        details: [
          'Participant, admin, and Big Screen interfaces were designed around the same backend state and business rules. This reduced the risk of one surface showing stale permissions or workshop status while another surface had already moved to a new stage.',
        ],
        images: ['/project-details/basecamp/architecture.png'],
      },
      'cloud and access': {
        title:
          'Preparing a configurable platform for repeatable workshop delivery',
        details: [
          'The GCP-hosted architecture was organised so new workshops could reuse the same core application while varying configuration, content, stages, and rules. Access and server-side validation were treated as platform concerns because facilitator and participant actions have different permissions and effects.',
        ],
      },
      outcome: {
        title: 'A reusable full-stack platform for facilitated collaboration',
        details: [
          'Basecamp turned the workshop lifecycle into a configurable digital system with shared data, enforceable rules, participant collaboration, facilitator controls, voting, and presentation experiences.',
        ],
        shipped: [
          'Configurable workshop and participant flows.',
          'Persistent idea lifecycle from draft through winner.',
          'Admin-controlled shortlisting, voting, and presentation workflows.',
          'AI-assisted ideation capabilities integrated into workshop rules.',
          'Shared full-stack foundation for participant, admin, and Big Screen experiences.',
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
    platform: 'Campaign Web Platform',
    image: '/projects/fevikwik.png',
    description:
      'A full-stack campaign experience for Fevikwik combining interactive storytelling, structured content, backend-supported data flows, and responsive cloud delivery.',
    details: {
      live: 'https://fevikwik-kwik-gpt-stag-25.onmlab.in/',
      client: 'Fevikwik',
      type: 'Digital Campaign',
      year: '2026',
      role: 'Full Stack Development',
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
        title: 'Turning a campaign idea into a maintainable web application',
        details: [
          'The Fevikwik work went beyond visual campaign pages. I developed the experience as a full-stack application using React and TypeScript on the client, Node.js on the server, SQL Server for structured data, and AWS for delivery so campaign content and interactive modules could be managed as a coherent system.',
        ],
      },
      challenge: {
        title: 'Keeping a high-energy campaign flexible behind the scenes',
        details: [
          'Campaign experiences change quickly, but hard-coded one-off pages become difficult to maintain. The implementation needed reusable modules, consistent data shapes, backend-supported content flows, responsive behaviour, and a delivery setup that could support iteration without rebuilding the site structure for every change.',
        ],
        tags: [
          'Campaign architecture',
          'Reusable modules',
          'Content data',
          'Interactive flows',
          'Responsive implementation',
          'Cloud delivery',
        ],
      },
      'campaign planning': {
        title: 'Connecting audience moments to reusable digital modules',
        details: [
          'The experience was planned around brand story, campaign pages, interactive moments, product information, and engagement actions. That structure helped turn creative requirements into reusable technical modules instead of isolated page builds.',
        ],
        images: [
          '/project-details/fevikwik/discovery.png',
          '/project-details/fevikwik/research.png',
        ],
      },
      'application architecture': {
        title: 'Building a modular full-stack campaign foundation',
        details: [
          'The application separated React presentation modules from Node.js application logic and SQL Server data concerns. Reusable sections could consume structured data while keeping layout, interaction, and backend responsibilities independently maintainable.',
        ],
        images: ['/project-details/fevikwik/architecture.png'],
      },
      'interactive frontend': {
        title:
          'Creating an energetic experience without sacrificing responsiveness',
        details: [
          'The frontend combined brand-led layouts with interactive content patterns, responsive behaviour, and reusable components. The implementation focused on making motion and visual energy support the campaign while keeping navigation and content consumption clear across devices.',
        ],
      },
      'backend and delivery': {
        title:
          'Supporting content flows with backend services and cloud delivery',
        details: [
          'Node.js services and SQL Server provided a structured application layer behind the campaign, while AWS supported deployment and content delivery. This gave the project a maintainable foundation beyond the initial launch experience.',
        ],
      },
      outcome: {
        title: 'A campaign platform designed for both expression and iteration',
        details: [
          'The final experience combined creative campaign storytelling with reusable frontend modules, backend-supported data, and cloud delivery so future updates could be handled as product changes rather than one-off page rebuilds.',
        ],
        shipped: [
          'Responsive React campaign experience.',
          'Reusable storytelling and interaction modules.',
          'Node.js and SQL Server application layer.',
          'AWS-based delivery foundation.',
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
    platform: 'Personal Brand Platform',
    image: '/projects/milka-pokora.png',
    description:
      'A focused full-stack personal brand platform that combines editorial storytelling with structured content, responsive React components, backend data delivery, and performance-conscious deployment.',
    details: {
      live: 'https://dev.ogilvystudio.ai/',
      client: 'Milka Pokora',
      type: 'Portfolio Platform',
      year: '2026',
      role: 'Full Stack Development',
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
        title: 'Building a personal brand site as a maintainable platform',
        details: [
          'Milka Pokora required a smaller and more focused case-study structure than the product platforms. The implementation paired a refined React experience with Node.js, SQL Server, and AWS so portfolio content could be treated as structured application data instead of being embedded entirely inside presentation components.',
        ],
      },
      challenge: {
        title:
          'Keeping the experience expressive without making updates fragile',
        details: [
          'The main challenge was balancing editorial freedom with maintainability. Content, imagery, and storytelling needed to feel highly personal, while the underlying implementation still required reusable components, clear data structures, responsive behaviour, and dependable delivery.',
        ],
        tags: [
          'Personal brand',
          'Structured content',
          'Editorial UI',
          'Reusable React components',
          'Responsive delivery',
        ],
      },
      'content architecture': {
        title: 'Structuring stories, projects, and media as reusable data',
        details: [
          'Content was organised around reusable structures so portfolio sections could be updated without redesigning the page system. The backend and database layer provided a foundation for separating content concerns from the React presentation layer.',
        ],
      },
      'frontend engineering': {
        title: 'Crafting a responsive editorial interface',
        details: [
          'React and TypeScript were used to build the visual storytelling layer with reusable sections, responsive layouts, predictable content rendering, and interaction patterns designed to keep the experience polished without turning every page into bespoke code.',
        ],
      },
      'performance and delivery': {
        title: 'Supporting media-heavy storytelling with dependable delivery',
        details: [
          'The application structure considered media loading, semantic page structure, responsive behaviour, and AWS delivery together so the portfolio could remain visually rich while still being maintainable and performance-conscious.',
        ],
      },
      outcome: {
        title: 'A focused full-stack portfolio with room to evolve',
        details: [
          'The result is a personal brand platform with a deliberately smaller architecture than the SaaS and enterprise projects, but the same full-stack discipline around structured data, reusable UI, backend separation, and cloud delivery.',
        ],
        shipped: [
          'Responsive React and TypeScript portfolio experience.',
          'Structured content and backend separation.',
          'Reusable editorial presentation components.',
          'AWS-based delivery foundation.',
        ],
      },
    },
    next_case: 'pathlens',
  },
]
