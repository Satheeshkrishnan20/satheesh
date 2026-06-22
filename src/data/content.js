/**
 * SINGLE SOURCE OF TRUTH for everything on the site.
 *
 * Every section component maps over these arrays/objects — there is almost no
 * hardcoded copy in the JSX. To change the site, edit this file only:
 *   • Add a project        -> push to `projects.items`
 *   • Add a service        -> push to a track in `services.tracks`
 *   • Add a skill          -> push to a group in `stack.groups`
 *   • Toggle testimonials  -> flip `features.testimonials`
 *
 * Keep the shape of each object consistent and the UI updates itself.
 */

export const features = {
  // Reviews are hidden for now — flip to `true` to enable the carousel later.
  testimonials: false,
}

export const profile = {
  name: 'Satheesh K.',
  role: 'Full-Stack Developer · Equity Researcher · Content & SEO Strategist',
  tagline: 'Software, research and content — under one accountable freelancer.',
  location: 'Available worldwide · Remote',
  email: 'satheeshkrishnan814@gmail.com',
  phone: '+91 75028 79824',
  whatsapp: 'https://wa.me/917502879824',
  linkedin: 'https://www.linkedin.com/in/satheeshk20/',
  github: 'https://github.com/Satheeshkrishnan20',
  available: true,
  response: 'Replies within 4 hours',
}

export const nav = [
  { label: 'Impact', href: '#impact' },
  { label: 'Stack', href: '#stack' },
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  eyebrow: 'Software · Research · Content & SEO',
  headline: 'I help businesses grow — through software, research and content.',
  subhead:
    'Full-stack development, equity research, and SEO-led content strategy — delivered end-to-end by one accountable operator who thinks in business outcomes, not deliverables.',
  primaryCta: { label: 'Hire Me', href: '#contact' },
  secondaryCta: { label: 'See My Work', href: '#work' },
  metrics: [
    { value: '10+', label: 'Projects finished' },
    { value: '40+', label: 'Research reports' },
    { value: '200K+', label: 'Organic visits driven' },
    { value: 'Open', label: 'Freelance availability' },
  ],
}

export const impact = {
  eyebrow: 'Impact',
  title: 'Outcomes, not buzzwords',
  subtitle:
    'Every engagement — software, research or content — ships toward a measurable business result: revenue, time saved, or clarity gained.',
  items: [
    {
      metric: '+34%',
      label: 'Higher conversion',
      detail:
        'Rebuilt a SaaS marketing site and onboarding flow — sign-ups jumped within 30 days.',
    },
    {
      metric: '200K+',
      label: 'Organic visits / month',
      detail:
        'SEO + content system for a D2C brand — search traffic grew 6× over nine months.',
    },
    {
      metric: '40+',
      label: 'Equity research reports',
      detail:
        'Sector deep-dives and company models used by retail and HNI investors for decisions.',
    },
    {
      metric: '20 hrs/wk',
      label: 'Manual work removed',
      detail:
        'Automated invoicing, reporting and approvals for an operations team of 12.',
    },
  ],
}

export const stack = {
  eyebrow: 'Stack',
  title: 'A focused, production-grade toolbox',
  subtitle:
    'Deep in the MERN / PERN ecosystem, fluent across the rest. Chosen for stability, scale and hiring confidence.',
  groups: {
    Frontend: [
      { name: 'React', logo: 'react' },
      { name: 'Redux', logo: 'redux' },
      { name: 'Next.js', logo: 'nextjs' },
      { name: 'JavaScript (ES2024)', logo: 'javascript' },
      { name: 'TypeScript', logo: 'typescript' },
      { name: 'Tailwind CSS', logo: 'tailwindcss' },
    ],
    'Backend & APIs': [
      { name: 'Node.js', logo: 'nodejs' },
      { name: 'Express', logo: 'express' },
      { name: 'GraphQL', logo: 'graphql' },
      { name: 'REST APIs' },
      { name: 'PHP', logo: 'php' },
      { name: 'Laravel', logo: 'laravel' },
    ],
    'Data & Cloud': [
      { name: 'MongoDB', logo: 'mongodb' },
      { name: 'PostgreSQL', logo: 'postgresql' },
      { name: 'MySQL', logo: 'mysql' },
      { name: 'Redis', logo: 'redis' },
      { name: 'AWS', logo: 'aws' },
      { name: 'Docker', logo: 'docker' },
    ],
  },
  // Flat list (with logos) powering the animated marquee strip.
  marquee: [
    'react', 'nextjs', 'typescript', 'redux', 'tailwindcss', 'javascript',
    'nodejs', 'express', 'graphql', 'php', 'laravel',
    'mongodb', 'postgresql', 'mysql', 'redis', 'aws', 'docker',
  ],
}

// Human labels for the marquee logos (filename -> display name).
export const skillLabels = {
  react: 'React',
  nextjs: 'Next.js',
  typescript: 'TypeScript',
  redux: 'Redux',
  tailwindcss: 'Tailwind CSS',
  javascript: 'JavaScript',
  nodejs: 'Node.js',
  express: 'Express',
  graphql: 'GraphQL',
  php: 'PHP',
  laravel: 'Laravel',
  mongodb: 'MongoDB',
  postgresql: 'PostgreSQL',
  mysql: 'MySQL',
  redis: 'Redis',
  aws: 'AWS',
  docker: 'Docker',
}

export const projects = {
  eyebrow: 'Work',
  title: 'Featured work',
  subtitle:
    'A selection of recent client websites — each one solving a real business problem for a real brand.',
  items: [
    {
      name: 'Narasu’s Coffee',
      summary:
        'A D2C e-commerce store for a century-old South Indian coffee brand — subscriptions, gifting, loyalty and online payments.',
      tech: ['React', 'Node.js', 'MongoDB', 'Redis', 'Razorpay'],
      demo: 'https://narasuscoffee.in/',
      tag: 'E-commerce · D2C',
    },
    {
      name: 'Green Divine',
      summary:
        'A product-led site for a premium artificial-grass and vertical-garden brand — catalog, project showcase and an online store.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
      demo: 'https://greendivine.in/',
      tag: 'B2C · Catalog & leads',
    },
    {
      name: 'Garuda Impex',
      summary:
        'A site for an international courier & logistics company — shipping services, coverage details and shipment enquiries.',
      tech: ['React', 'GraphQL', 'Node.js', 'MySQL'],
      demo: 'https://garudaimpex.net/',
      tag: 'Courier · Logistics',
    },
    {
      name: 'Puraag Construction',
      summary:
        'A portfolio site for a construction firm — services, completed-projects gallery and an SEO-ready enquiry funnel.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      demo: 'https://puraagconstruction.in/',
      tag: 'Services · Lead-gen',
    },
  ],
}

export const services = {
  eyebrow: 'Services',
  title: 'Three tracks, one operator',
  subtitle:
    'Software, equity research, and content & SEO — pick one or combine them. Same accountability, one point of contact.',
  tracks: [
    {
      name: 'Software',
      tagline: 'Software that ships and scales',
      items: [
        {
          title: 'SaaS Development',
          detail:
            'From idea to first paying customer — multi-tenancy, billing, auth, admin and analytics.',
          deliver: 'MVP in 4–8 weeks',
        },
        {
          title: 'Admin Dashboards & CRMs',
          detail:
            'Internal tools that replace spreadsheets — roles, audit logs, reporting, automation.',
          deliver: 'Typical build · 3–5 weeks',
        },
        {
          title: 'API Development',
          detail:
            'REST or GraphQL APIs designed for scale, versioning, security and clean documentation.',
          deliver: 'Architected for 10× growth',
        },
        {
          title: 'Business Automation',
          detail:
            'Automate invoicing, reporting, notifications and approvals — replace human busywork.',
          deliver: 'ROI in weeks',
        },
      ],
    },
    {
      name: 'Content & SEO',
      tagline: 'Growth through search and story',
      items: [
        {
          title: 'SEO Audits & Strategy',
          detail:
            'Technical SEO, on-page, content architecture and a 90-day roadmap built around your actual revenue pages.',
          deliver: 'Action plan in 7–10 days',
        },
        {
          title: 'Long-form Content Production',
          detail:
            'Search-driven blog content, pillar pages and thought-leadership — researched, written and optimized.',
          deliver: 'Retainer or per-piece',
        },
        {
          title: 'Brand Content Systems',
          detail:
            'Editorial calendars, style guides, and content engines that keep your brand publishing consistently.',
          deliver: 'Built to run without me',
        },
        {
          title: 'Landing & Sales Pages',
          detail:
            'High-conversion pages — copy, layout, SEO and code, all done end-to-end.',
          deliver: 'Ship in 5–10 days',
        },
      ],
    },
    {
      name: 'Equity Research',
      tagline: 'Investment clarity from raw data',
      items: [
        {
          title: 'Company Deep-dives',
          detail:
            'Business model, moat, financials, valuation and risks — written for investors who want a real thesis.',
          deliver: 'Full report · 1–2 weeks',
        },
        {
          title: 'Sector & Thematic Reports',
          detail:
            'Industry structure, comparative analysis, growth drivers and key players, distilled into actionable insight.',
          deliver: 'Bespoke scope',
        },
        {
          title: 'Financial Modeling',
          detail:
            'Three-statement models, DCF, scenario analysis — audit-ready and easy to update.',
          deliver: 'Excel + documentation',
        },
        {
          title: 'Research-backed Content',
          detail:
            'Newsletters, market commentary and investor decks that combine research rigor with clear writing.',
          deliver: 'Retainer available',
        },
      ],
    },
  ],
}

export const trust = {
  eyebrow: 'Trust',
  title: 'Why clients keep coming back',
  subtitle:
    'Six signals that separate a contractor you tolerate from a developer you rehire.',
  items: [
    {
      title: 'Clear communication',
      detail:
        'Weekly written updates, decisions documented, no jargon. You always know where the project stands.',
    },
    {
      title: 'Delivery speed',
      detail:
        'Scoped milestones with realistic dates — and the discipline to actually hit them.',
    },
    {
      title: 'Long-term support',
      detail:
        'Code you can hand to any developer. Retainers available for hosting, monitoring and iteration.',
    },
    {
      title: 'Clean, scalable code',
      detail:
        'Reviewed against senior-engineering standards. Tests where they matter, no clever tricks.',
    },
    {
      title: 'Business understanding',
      detail:
        'I ask about your customer, your pricing and your runway — not just your wireframes.',
    },
    {
      title: 'Single point of accountability',
      detail:
        'No agency hand-offs. The person quoting the work is the person writing the code.',
    },
  ],
}

export const process = {
  eyebrow: 'Process',
  title: 'How we work together',
  subtitle:
    'A repeatable four-step process — predictable for you, efficient for both of us.',
  steps: [
    {
      step: '01',
      title: 'Discovery',
      detail:
        'A short paid discovery call. We map your goal, constraints, users and success metrics.',
    },
    {
      step: '02',
      title: 'Planning',
      detail:
        'You receive a written scope, milestone plan, timeline and fixed quote — no surprises.',
    },
    {
      step: '03',
      title: 'Development',
      detail:
        'Weekly demos, staging environment, daily commits. You see progress, not just promises.',
    },
    {
      step: '04',
      title: 'Launch & Support',
      detail:
        'Production deployment, monitoring, documentation, and an optional retainer for what comes next.',
    },
  ],
}

export const testimonials = {
  eyebrow: 'Testimonials',
  title: 'What clients say',
  subtitle:
    'Selected feedback from founders, operators, marketing leads and investors.',
  items: [
    {
      quote:
        'We replaced a six-figure SaaS contract with a custom platform that fits us exactly. Delivery was on time and the codebase is clean enough that our internal team owns it now.',
      name: 'Priya R.',
      role: 'CTO, B2B SaaS',
      track: 'Software',
    },
    {
      quote:
        'Our blog went from a side project to our top acquisition channel in two quarters. The SEO roadmap was the clearest one I have ever received — and the content actually got published.',
      name: 'Rohit M.',
      role: 'Head of Marketing, D2C Brand',
      track: 'Content & SEO',
    },
    {
      quote:
        'The research report read like it came from a sell-side desk, not a freelancer. Clear thesis, defensible numbers, and the model was easy to plug into our own work.',
      name: 'Karthik N.',
      role: 'Portfolio Manager, HNI Advisory',
      track: 'Equity Research',
    },
    {
      quote:
        'I have hired a lot of freelancers. This is the first one I have rehired three times — across software, content and research. Treats the project like an owner, not a contractor.',
      name: 'Anika S.',
      role: 'Founder, Early-stage Startup',
      track: 'All tracks',
    },
  ],
}

export const contact = {
  eyebrow: 'Let’s talk',
  title: 'Need a developer who understands both code and business?',
  subtitle:
    'Tell me about your project — scope, timeline, and the outcome that matters. You will hear back within 4 hours on a working day.',
  cta: { label: 'Email me directly', href: 'mailto:satheeshkrishnan814@gmail.com' },
  channels: [
    { label: 'Email', value: 'satheeshkrishnan814@gmail.com', href: 'mailto:satheeshkrishnan814@gmail.com' },
    { label: 'WhatsApp', value: '+91 75028 79824', href: 'https://wa.me/917502879824' },
    { label: 'Phone', value: '+91 75028 79824', href: 'tel:+917502879824' },
    { label: 'LinkedIn', value: 'in/satheeshk20', href: 'https://www.linkedin.com/in/satheeshk20/' },
    { label: 'GitHub', value: 'Satheeshkrishnan20', href: 'https://github.com/Satheeshkrishnan20' },
  ],
}
