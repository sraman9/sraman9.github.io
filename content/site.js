// ─────────────────────────────────────────────────────────────
// ALL SITE COPY LIVES HERE.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Sid Raman',

  // The one line under your name. Nothing else on the landing page.
  school: 'Computer and Data Science',
  // Drop an image at public/uw.png (or .svg) and put '/uw.png' here.
  // Leave as null and a plain "UW" badge is drawn instead.
  schoolBadge: null,

  email: 'sid.raman2004@outlook.com',
  github: 'https://github.com/sraman9',
  linkedin: 'https://linkedin.com/in/sidraman9/',
  resume: '/resume.pdf', // drop the PDF at public/resume.pdf
};

export const about = [
  'DRAFT — rewrite this in your own voice. What you like building and why.',
  'DRAFT — the human paragraph. What got you into this, what you build when nobody is grading it, what you want to learn next.',
];

// Drop a photo at public/me.jpg and set this to '/me.jpg'.
export const aboutPhoto = null;

// ── Projects ──────────────────────────────────────────────────
// image:  drop a file in public/projects/ and reference it, e.g.
//         '/projects/madstorage.png'. Leave null for a placeholder tile.
// video:  paste a Loom share link. It gets embedded automatically.
// live:   the "Launch" button. Hidden if null.
// why:    the reason you built it. This is the part people remember.
export const projects = [
  {
    slug: 'portfolio-rebalancer',
    name: 'Household Portfolio Rebalancer',
    featured: true,
    image: null,
    video: null,
    blurb:
      'Rebalances a household portfolio held across several accounts, isolating cash and respecting how liquid each holding is.',
    stack: ['TypeScript'],
    repo: 'https://github.com/sraman9/household-portfolio-rebalancer',
    live: null, // TODO — deploy it, then paste the URL here
    why: 'TODO — why you built this one. You said you are passionate about it; say why in plain language.',
    body: [
      'TODO — what the tool actually does, start to finish.',
      'TODO — the hard part. Rebalancing across multiple accounts is not the same as rebalancing one, and that difference is the interesting story.',
    ],
  },
  {
    slug: 'madstorage',
    name: 'MadStorage',
    featured: true,
    image: null,
    video: null,
    blurb:
      'Peer-to-peer storage marketplace for UW–Madison students, with live price comparisons scraped from commercial rates.',
    stack: ['React', 'TypeScript', 'FastAPI', 'Supabase'],
    repo: 'https://github.com/sraman9/MadStorageV1',
    live: null,
    why: 'TODO — built at MadData26. What problem were you and your team actually annoyed by?',
    body: [
      'TODO — how the marketplace works.',
      'TODO — your piece of it: the React front end, the FastAPI pipelines, the scraper feeding live comparisons.',
    ],
  },
  {
    slug: 'distributed-data-pipeline',
    name: 'Distributed Data Pipeline',
    featured: true,
    image: null,
    video: null,
    blurb:
      'Containerized ETL pipeline that ingests raw datasets and batch-transforms them into Parquet, with fault-tolerant message passing between services.',
    stack: ['Docker', 'Python', 'MySQL', 'Parquet'],
    repo: null, // TODO — not on GitHub yet
    live: null,
    why: 'TODO — course project or personal? What were you trying to learn?',
    body: [
      'TODO — what goes in and what comes out.',
      'TODO — the message-passing design and what fault tolerance meant here.',
    ],
  },
  {
    slug: 'medication-timeline',
    name: 'Medication Timeline',
    featured: false,
    image: null,
    video: null,
    blurb: 'TODO — one sentence on what this models.',
    stack: ['Python'],
    repo: 'https://github.com/sraman9/birthmodel-assessment',
    live: 'https://birthmodel-assessment.vercel.app/',
    why: 'TODO',
    body: ['TODO'],
  },
  {
    slug: 'voice-bot',
    name: 'Voice Bot',
    featured: false,
    image: null,
    video: null,
    blurb:
      'Places outbound calls, holds a natural voice conversation with the agent on the other end, records the audio, and saves dual-sided transcripts.',
    stack: ['Python'],
    repo: 'https://github.com/sraman9/voice-bot',
    live: null,
    why: 'TODO',
    body: ['TODO — the real-time two-way audio and dual-sided transcription is the interesting part.'],
  },
  {
    slug: 'teeko',
    name: 'Teeko',
    featured: false,
    image: null,
    video: null,
    blurb: 'Playable Teeko game with a search-based opponent that is hard to beat.',
    stack: ['Python'],
    repo: 'https://github.com/sraman9/teekoplayer',
    live: null,
    why: 'TODO',
    body: ['TODO — confirm the algorithm in the code before writing this up.'],
  },
];

// ── Kept for later ────────────────────────────────────────────
// Not rendered anywhere right now. When you want the company-logo
// treatment on the landing page, this is the data it will use.
export const experience = [
  {
    company: 'Handshake',
    role: 'AI Fellow (Contract)',
    dates: 'Oct 2025 – Present',
    logo: null, // e.g. '/logos/handshake.png'
    summary: 'RLHF and QA on multimodal models for student-facing career tools.',
  },
  {
    company: 'Hermony.life',
    role: 'Software Engineering Intern',
    dates: 'Jun 2025 – Aug 2025',
    logo: null,
    summary: 'Built the web front end end-to-end and shipped a GenAI chatbot on the OpenAI API.',
  },
  {
    company: 'Middleton Spectral Vision',
    role: 'Software Engineering Intern',
    dates: 'Jun 2024 – Aug 2024',
    logo: null,
    summary: 'Analytics layer for optical sensor data, plus CI/CD that replaced manual reporting.',
  },
  {
    company: 'Zenoti',
    role: 'Software Engineering Intern',
    dates: 'May 2023 – Aug 2023',
    logo: null,
    summary: 'AWS Lambda microservices for peak-load appointment scheduling.',
  },
];
