export const projects = [
  {
    id: 'rakshak',
    name: 'RAKSHAK',
    subtitle: 'Human Safety System',
    category: 'fullstack',
    status: 'Deployed',
    description:
      'A real-time emergency response platform that lets users trigger SOS alerts and routes them instantly to police responders. Built with secure JWT authentication, role-based access control, and a live-updating dashboard for responders to act fast when it matters most.',
    tech: ['React', 'Spring Boot', 'MySQL', 'JWT', 'REST API', 'WebSocket'],
    features: [
      'JWT Authentication & role-based access',
      'Real-time responder dashboard',
      'REST API architecture',
      'Fully responsive UI',
    ],
    github: '#',
    demo: '#',
    accent: 'blue',
  },
  {
    id: 'samvardhan',
    name: 'SAMVARDHAN SAUDHAMINI',
    subtitle: 'Home Automation System',
    category: 'java',
    status: 'Completed',
    description:
      'A smart home automation system built on core Java technologies, giving users a simple interface to control and monitor home appliances efficiently from a central console.',
    tech: ['Java', 'OOP', 'Home Automation', 'UI Control Logic'],
    features: [
      'Centralized appliance control',
      'Modular Java architecture',
      'Clean, intuitive interface',
    ],
    github: '#',
    demo: '#',
    accent: 'violet',
  },
  {
    id: 'ai-resume',
    name: 'AI Resume Builder',
    subtitle: 'ATS-Optimized Resume Generator',
    category: 'frontend',
    status: 'In Progress',
    description:
      'An AI-powered resume builder that generates ATS-friendly resumes from modern, recruiter-tested templates, with instant downloadable PDF export.',
    tech: ['React', 'AI Integration', 'PDF Export', 'ATS Optimization'],
    features: [
      'ATS-friendly templates',
      'Live preview while editing',
      'One-click PDF download',
    ],
    github: '#',
    demo: '#',
    accent: 'blue',
  },
]

export const projectFilters = [
  { key: 'all', label: 'All' },
  { key: 'fullstack', label: 'Full Stack' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'java', label: 'Java' },
]
