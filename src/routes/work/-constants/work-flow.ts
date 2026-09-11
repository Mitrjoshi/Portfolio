export type WorkFlowAction =
  | {
      type: 'live'
      label: string
      url: string
    }
  | {
      type: 'code'
      label: string
      url: string
    }
  | {
      type: 'writeup'
      label: string
      url: string
    }
  | {
      type: 'request-access'
      label: string
      email: string
      subject?: string
    }

export type WorkFlowActions = {
  previous: string
  next: string
  primary: WorkFlowAction
  secondary?: WorkFlowAction
}

export type WorkFlowEntry = {
  id: string
  name: string
  category: string
  year: string
  status: 'Live' | 'In development' | 'Archived'

  headline: string
  purpose: string

  stack: string[]

  flow: {
    step: string
    title: string
    description: string
  }[]

  metrics: {
    value: string
    label: string
  }[]

  tags: string[]

  terminalRuns: {
    command: string
    lines: string[]
  }[]

  defaultCommand?: string

  liveUrl?: string
  githubUrl?: string
  caseStudyUrl?: string
  requestAccessEmail?: string

  data: string[]
  architecture: string[]

  actions: WorkFlowActions

  footer: string
}

export const WORK_FLOW: WorkFlowEntry[] = [
  // =========================================================
  // PATHLENS
  // =========================================================

  {
    id: 'pathlens',
    name: 'Pathlens',
    category: 'Full-Stack Application',
    year: '2026',
    status: 'In development',
    headline:
      'Privacy-focused product analytics built from tracking layer to dashboard.',
    purpose:
      'Capture user interactions, process behavioural data, and turn sessions and events into actionable product insights through a lightweight analytics platform.',
    liveUrl: 'https://d1zadf3to2hh75.cloudfront.net/',
    githubUrl: 'https://github.com/Mitrjoshi/Airship-x-Pathlens',

    stack: [
      'React',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'REST API',
      'Vercel',
    ],

    flow: [
      {
        step: '01',
        title: 'Capture',
        description:
          'Collect visitor events, page activity, navigation, and interactions.',
      },
      {
        step: '02',
        title: 'Process',
        description:
          'Validate, enrich, and structure incoming behavioural event data.',
      },
      {
        step: '03',
        title: 'Store',
        description:
          'Persist visitors, sessions, events, and interaction metadata.',
      },
      {
        step: '04',
        title: 'Visualize',
        description:
          'Transform structured analytics data into clear dashboard insights.',
      },
    ],

    metrics: [
      {
        value: '7+',
        label: 'Core Features',
      },
      {
        value: '12+',
        label: 'API Endpoints',
      },
      {
        value: '6',
        label: 'Data Models',
      },
      {
        value: '100%',
        label: 'Responsive',
      },
    ],

    tags: [
      'Full-Stack',
      'SaaS',
      'Product Analytics',
      'React',
      'Node.js',
      'PostgreSQL',
    ],

    defaultCommand: 'pathlens api health',

    terminalRuns: [
      {
        command: 'pathlens build',
        lines: [
          '·reading environment config',
          '·building dashboard + tracking client',
          '',
          '✓React bundle ......... compiled',
          '✓TypeScript ........... 0 errors',
          '✓API routes ........... validated',
          '✓database models ...... synced',
          '',
          '!bundle warning → analytics chunk 186kb',
          '',
          '·production build · exit 0 · 2.6s',
        ],
      },
      {
        command: 'pathlens track --live',
        lines: [
          '·visitor connected · session_84f2',
          '·page → /pricing · referrer → organic',
          '',
          '✓page_view captured',
          '✓session linked → visitor_1024',
          '✓event persisted → PostgreSQL',
          '',
          '·event pipeline active · exit 0',
        ],
      },
      {
        command: 'pathlens analyse --session=84f2',
        lines: [
          '·loading visitor session',
          '·processing clicks + scroll + navigation',
          '',
          '✓CTA interaction detected',
          '✓scroll activity processed',
          '✓navigation sequence resolved',
          '',
          '!rapid interactions detected → possible friction',
          '',
          '·session processed · exit 0',
        ],
      },
      {
        command: 'pathlens heatmap --page=/pricing',
        lines: [
          '·querying interaction coordinates',
          '·processing page interaction data',
          '',
          '✓hero interactions ...... mapped',
          '✓pricing cards .......... mapped',
          '✓FAQ interactions ....... mapped',
          '',
          '!low interaction → secondary CTA',
          '',
          '·heatmap ready · exit 0',
        ],
      },
      {
        command: 'pathlens api health',
        lines: [
          '·checking tracking + analytics services',
          '',
          '✓POST /events ........ healthy',
          '✓GET /sessions ....... healthy',
          '✓GET /analytics ...... healthy',
          '✓database ............ connected',
          '',
          '·services operational · 0 failures',
        ],
      },
      {
        command: 'pathlens visitors --live',
        lines: [
          '·listening for active visitor events',
          '',
          '✓visitor activity → /dashboard',
          '✓visitor activity → /pricing',
          '✓visitor activity → /features',
          '',
          '·live event stream active',
        ],
      },
      {
        command: 'pathlens query --metric=conversion',
        lines: [
          '·reading analytics range',
          '·processing visitor + session data',
          '',
          '✓signup started ........ resolved',
          '✓signup completed ...... resolved',
          '✓conversion rate ....... calculated',
          '',
          '!drop-off path identified → pricing → signup',
          '',
          '·query complete · exit 0',
        ],
      },
    ],

    architecture: [
      'User Website / App',
      'Tracking Script',
      'Node.js API',
      'PostgreSQL',
      'Analytics Processing',
      'Product Dashboard',
    ],

    data: [
      'Visitors',
      'Sessions',
      'Events',
      'Interaction Metadata',
      'Heatmap Data',
      'Live Visitor Activity',
    ],

    actions: {
      previous: 'Prev',
      next: 'Next',
      primary: {
        type: 'live',
        label: 'Live',
        url: 'https://d1zadf3to2hh75.cloudfront.net/',
      },
      secondary: {
        type: 'code',
        label: 'Code',
        url: 'https://github.com/Mitrjoshi/Airship-x-Pathlens',
      },
    },

    footer:
      'Full-stack analytics platform covering event tracking, APIs, structured data, processing, and dashboard visualization.',
  },

  // =========================================================
  // VERTEX
  // =========================================================

  {
    id: 'vertex',
    name: 'Vertex',
    category: 'AI Platform',
    year: '2026',
    status: 'Live',
    headline:
      'AI content generation platform built around enterprise workflows and Google Vertex AI.',
    purpose:
      'Give teams a controlled interface for generating images, videos, and multimodal content while managing authentication, usage, credits, requests, and model access through a secure application layer.',

    stack: [
      'React',
      'TypeScript',
      'Node.js',
      'Vertex AI',
      'Gemini',
      'Veo',
      'Imagen',
    ],

    flow: [
      {
        step: '01',
        title: 'Prompt',
        description:
          'Capture structured generation requests, prompts, and creative inputs.',
      },
      {
        step: '02',
        title: 'Route',
        description:
          'Validate requests and route them to the appropriate AI model.',
      },
      {
        step: '03',
        title: 'Generate',
        description:
          'Run image, video, and multimodal generation through Vertex AI.',
      },
      {
        step: '04',
        title: 'Deliver',
        description:
          'Return generated assets while tracking access, usage, and requests.',
      },
    ],

    metrics: [
      {
        value: 'Gemini',
        label: 'Multimodal AI',
      },
      {
        value: 'Veo',
        label: 'Video Generation',
      },
      {
        value: 'Imagen',
        label: 'Image Generation',
      },
      {
        value: 'Credits',
        label: 'Usage Control',
      },
    ],

    tags: ['AI Platform', 'Full-Stack', 'Vertex AI', 'Gemini', 'Imagen', 'Veo'],

    defaultCommand: 'vertex models --status',

    terminalRuns: [
      {
        command: 'vertex models --status',
        lines: [
          '·loading configured generation services',
          '·checking model availability',
          '',
          '✓Gemini ............... connected',
          '✓Imagen ............... connected',
          '✓Veo .................. connected',
          '✓auth layer ........... active',
          '',
          '·3 model services · ready',
        ],
      },
      {
        command: 'vertex generate --type=image',
        lines: [
          '·request received · job_img_24a1',
          '·validating prompt + generation settings',
          '',
          '✓user authenticated',
          '✓credit balance verified',
          '✓request routed → Imagen',
          '',
          '·generation started',
          '✓asset returned → image/png',
          '',
          '·job complete · exit 0',
        ],
      },
      {
        command: 'vertex generate --type=video',
        lines: [
          '·request received · job_vid_91c4',
          '·preparing video generation payload',
          '',
          '✓prompt validated',
          '✓request routed → Veo',
          '✓generation job created',
          '',
          '·polling generation status',
          '✓video asset ready',
          '',
          '·job complete · exit 0',
        ],
      },
      {
        command: 'vertex credits --check',
        lines: [
          '·reading user entitlement',
          '·checking available generation credits',
          '',
          '✓account .............. active',
          '✓usage policy ......... loaded',
          '✓credit balance ....... available',
          '✓generation allowed',
          '',
          '·request authorised · exit 0',
        ],
      },
      {
        command: 'vertex api health',
        lines: [
          '·checking platform services',
          '',
          '✓authentication ....... healthy',
          '✓generation API ....... healthy',
          '✓usage service ........ healthy',
          '✓asset pipeline ....... healthy',
          '',
          '·services online · 0 failures',
        ],
      },
      {
        command: 'vertex route --model=auto',
        lines: [
          '·analysing generation request',
          '·input → multimodal creative brief',
          '',
          '✓intent detected → visual generation',
          '✓model selected → Gemini + Imagen',
          '✓generation config resolved',
          '',
          '·request routed · exit 0',
        ],
      },
      {
        command: 'vertex audit --usage',
        lines: [
          '·reading generation activity',
          '·grouping requests by user + model',
          '',
          '✓image generations ..... tracked',
          '✓video generations ..... tracked',
          '✓credit usage .......... recorded',
          '✓request ownership ..... resolved',
          '',
          '·usage audit complete · exit 0',
        ],
      },
    ],

    architecture: [
      'User Interface',
      'Application API',
      'Authentication',
      'Usage / Credit Layer',
      'Vertex AI',
      'Gemini / Imagen / Veo',
      'Generated Assets',
    ],

    data: [
      'Users',
      'Generation Requests',
      'Prompts',
      'Model Configuration',
      'Credit Usage',
      'Generated Assets',
    ],

    caseStudyUrl: '#vertex',

    actions: {
      previous: 'Prev',
      next: 'Next',
      primary: {
        type: 'writeup',
        label: 'Details',
        url: '#vertex',
      },
    },

    footer:
      'AI generation platform connecting application logic, access control, usage management, and multimodal Vertex AI services.',
  },

  // =========================================================
  // BASECAMP
  // =========================================================

  {
    id: 'basecamp',
    name: 'Basecamp',
    category: 'Workshop Platform',
    year: '2026',
    status: 'Live',
    headline:
      'Live workshop platform for collaborative ideation, AI-assisted refinement, voting, and presentation.',
    purpose:
      'Bring the complete workshop journey into one structured system where participants create and refine ideas, teams shortlist them, admins control voting, and winning concepts move into a presentation-ready experience.',

    stack: [
      'React',
      'TypeScript',
      'Node.js',
      'REST API',
      'SQL',
      'AI Integration',
    ],

    flow: [
      {
        step: '01',
        title: 'Ideate',
        description:
          'Participants create and submit ideas directly from their devices.',
      },
      {
        step: '02',
        title: 'Refine',
        description:
          'AI Coach and Scout help participants improve and explore ideas.',
      },
      {
        step: '03',
        title: 'Vote',
        description:
          'Teams shortlist ideas before moving into admin-controlled voting.',
      },
      {
        step: '04',
        title: 'Present',
        description:
          'Winning ideas move into a presentation-ready Big Screen experience.',
      },
    ],

    metrics: [
      {
        value: '30–70',
        label: 'Room Size',
      },
      {
        value: '4',
        label: 'Workflow Stages',
      },
      {
        value: '2',
        label: 'AI Assistants',
      },
      {
        value: 'Live',
        label: 'Voting',
      },
    ],

    tags: [
      'Full-Stack',
      'Real-Time',
      'Workshops',
      'AI Integration',
      'Voting',
      'Admin',
    ],

    defaultCommand: 'basecamp workshop --status',

    terminalRuns: [
      {
        command: 'basecamp workshop --status',
        lines: [
          '·loading active workshop',
          '·syncing participant + admin state',
          '',
          '✓workshop ............. active',
          '✓idea capture ......... enabled',
          '✓coach ................ enabled',
          '✓scout ................ enabled',
          '✓voting ............... waiting',
          '',
          '·room ready · exit 0',
        ],
      },
      {
        command: 'basecamp idea add',
        lines: [
          '·participant connected · team_04',
          '·receiving idea submission',
          '',
          '✓title validated',
          '✓description stored',
          '✓pillar linked',
          '✓state → Draft',
          '',
          '·idea created · exit 0',
        ],
      },
      {
        command: 'basecamp coach --idea=42',
        lines: [
          '·loading idea context · idea_42',
          '·starting AI refinement session',
          '',
          '✓idea context loaded',
          '✓coach response generated',
          '✓participant revision received',
          '✓state → Coached',
          '',
          '·refinement complete · exit 0',
        ],
      },
      {
        command: 'basecamp scout --pillar=growth',
        lines: [
          '·reading submitted ideas',
          '·checking pillar coverage',
          '',
          '✓existing concepts analysed',
          '✓duplicate directions filtered',
          '✓3 new directions generated',
          '',
          '·scout complete · exit 0',
        ],
      },
      {
        command: 'basecamp voting --start',
        lines: [
          '·admin requested voting start',
          '·locking idea mutation',
          '',
          '✓new submissions ....... disabled',
          '✓edit / coach .......... disabled',
          '✓shortlist changes ..... disabled',
          '✓QR voting ............. enabled',
          '',
          '·voting live · exit 0',
        ],
      },
      {
        command: 'basecamp votes --tally',
        lines: [
          '·reading submitted votes',
          '·validating participant limits',
          '',
          '✓duplicate votes ....... filtered',
          '✓pillar limits ......... applied',
          '✓totals ................ calculated',
          '',
          '·leaders resolved',
          '✓ties supported → multiple winners',
          '',
          '·tally complete · exit 0',
        ],
      },
      {
        command: 'basecamp bigscreen --present',
        lines: [
          '·opening presentation state',
          '·syncing workshop results',
          '',
          '✓stage data ............ loaded',
          '✓winning ideas ......... resolved',
          '✓QR state .............. synced',
          '✓manual navigation ..... ready',
          '',
          '·presentation ready · exit 0',
        ],
      },
    ],

    architecture: [
      'Participant Device',
      'Workshop UI',
      'Application API',
      'Workshop State',
      'AI Coach / Scout',
      'Voting Engine',
      'Admin Console',
      'Big Screen',
    ],

    data: [
      'Participants',
      'Teams',
      'Ideas',
      'Idea States',
      'Shortlists',
      'Votes',
      'Workshop Configuration',
      'Activity Events',
    ],

    caseStudyUrl: '#basecamp',

    actions: {
      previous: 'Prev',
      next: 'Next',
      primary: {
        type: 'writeup',
        label: 'Details',
        url: '#basecamp',
      },
    },

    footer:
      'Live workshop platform connecting participant ideation, AI-assisted refinement, voting, administration, and presentation workflows.',
  },
]
