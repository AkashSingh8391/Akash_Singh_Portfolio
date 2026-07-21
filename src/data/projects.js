export const projects = [
  {
    id: 'rakshak',
    name: 'RAKSHAK',
    subtitle: 'Human Safety System',
    category: 'java',
    status: 'In Progress',
    description:
      'A real-time emergency response platform that lets users trigger SOS alerts and routes them instantly to police responders. Built with secure JWT authentication, role-based access control, and a live-updating dashboard for responders to act fast when it matters most.',
    tech: ['React', 'Spring Boot', 'MySQL', 'JWT', 'REST API', 'WebSocket'],
    features: [
      'JWT Authentication & role-based access',
      'Real-time responder dashboard',
      'REST API architecture',
      'Fully responsive UI',
    ],
    github: 'https://github.com/AkashSingh8391/Rakshak',
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
    id: 'InfraPulse',
    name: 'InfraPulse',
    subtitle: 'Infrastructure Monitoring Tool',
    category: ['fullstack', 'frontend', 'java'],
    status: 'Deployed',
    description: 'A full-stack civic infrastructure reporting platform where citizens report issues like potholes, broken streetlights, and water leakage with photo evidence and map-based location pinning. Officers and municipal departments track, assign, and resolve complaints in real time.',
    tech: ['React', 'Spring Boot', 'PostgreSQL', 'WebSocket', 'Tailwind CSS'],
    features: [
      'Live status updates via WebSocket',
      'Map-based complaint reporting with photo upload',
      'Role-based dashboards for citizens, officers, managers, and admins',
    ],

    github: 'https://github.com/AkashSingh8391/Infra_Pulse',
    demo: 'https://infrapulse-drab.vercel.app',
    accent: 'blue',
  },
]

export const projectFilters = [
  { key: 'all', label: 'All' },
  { key: 'fullstack', label: 'Full Stack' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'java', label: 'Java' },
]
