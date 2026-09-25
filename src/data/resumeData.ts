export interface Job {
  role: string;
  company: string;
  client?: string;
  duration: string;
  responsibilities: string[];
  techStack: string[];
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  subtitle?: string;
  problemStatement?: string;
  solution?: string;
  keyContributions?: string[];
  features?: string[];
  businessValue?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
}

export interface ResumeData {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  summary: string;
  skills: SkillCategory[];
  experience: Job[];
  projects: Project[];
  education: Education[];
}

export const resumeData: ResumeData = {
  name: "Nirmal Raj P",
  title: "React Developer | Frontend Developer",
  location: "Chennai, Tamil Nadu, India",
  phone: "+91 9360147391",
  email: "nirmalraj1628@gmail.com",
  summary: "React Developer with 5 years of experience building scalable, high-performance web applications using MongoDB, Express.js, React.js, Node.js, Next.js, TypeScript, and JavaScript (ES6+). Experienced in designing and developing end-to-end applications, RESTful APIs, reusable component libraries, complex admin dashboards, and responsive user interfaces. Skilled in frontend architecture, backend development, database design, TanStack React Query, state management, authentication, and performance optimization. Passionate about writing clean, maintainable code and delivering scalable enterprise solutions using modern web development best practices.",

  skills: [
    {
      category: "Frontend",
      skills: ["React.js", "Next.js", "JavaScript ES6+", "TypeScript", "HTML5", "CSS3", "SCSS"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "MongoDB"]
    },
    {
      category: "State & Data",
      skills: ["Redux Toolkit", "Zustand", "Context API", "TanStack React Query", "Axios", "RESTful APIs", "GraphQL"]
    },
    {
      category: "Next.js",
      skills: ["App Router", "Server Components", "Client Components", "Dynamic Routing"]
    },
    {
      category: "UI & Design Systems",
      skills: ["Tailwind CSS", "Material UI", "shadcn/ui", "Mantine UI", "Storybook"]
    },
    {
      category: "Architecture & Performance",
      skills: ["Component Architecture", "Lazy Loading", "Code Splitting", "Caching"]
    },
    {
      category: "Testing",
      skills: ["Jest", "React Testing Library", "Cypress"]
    },
    {
      category: "Tools",
      skills: ["Git", "GitLab", "GitHub", "Docker", "Webpack", "npm", "Yarn", "Agile"]
    }
  ],

  experience: [
    {
      role: "Frontend Developer",
      company: "Yitro Tech Pvt Ltd",
      client: "GTI Technology",
      duration: "Jan 2026 - Present",
      responsibilities: [
        "Developed scalable enterprise web applications using Next.js, React.js, TypeScript, and App Router, following modern frontend architecture and best practices.",
        "Built reusable UI components, dynamic data tables, and integrated TanStack React Query for efficient server-state management and API communication.",
        "Optimized application performance through lazy loading, memoization, code splitting, caching, and query optimization, improving responsiveness and user experience.",
        "Collaborated with cross-functional teams to deliver responsive, maintainable, and high-quality applications using modern React development practices."
      ],
      techStack: ["React.js", "Next.js", "TypeScript", "TanStack React Query", "Tailwind CSS", "GitLab", "App Router"]
    },
    {
      role: "Software Engineer",
      company: "BCT Consulting",
      client: "RR Donnelley",
      duration: "Mar 2025 - Dec 2025",
      responsibilities: [
        "Developed enterprise planning and reporting dashboards using React.js, Next.js, TypeScript, and REST APIs for data-intensive business applications.",
        "Built responsive UI components and analytics dashboards for KPI tracking, reporting, and large-scale data visualization.",
        "Improved application performance through lazy loading, code splitting, TanStack React Query, and optimized API integration.",
        "Collaborated with cross-functional teams, conducted code reviews, and developed reusable components to ensure scalable and maintainable frontend applications."
      ],
      techStack: ["React.js", "Next.js", "TypeScript", "TanStack React Query", "Axios", "RESTful APIs", "Git"]
    },
    {
      role: "Software Engineer | React Developer",
      company: "Colan Infotech Pvt Ltd",
      duration: "May 2024 - Jan 2025",
      responsibilities: [
        "Developed scalable full-stack web applications using MongoDB, Express.js, React.js, Node.js, JavaScript (ES6+), and REST APIs.",
        "Enhanced application performance by implementing code refactoring, lazy loading, API optimization, and efficient database queries.",
        "Designed reusable frontend components and developed secure backend APIs following scalable and maintainable architecture.",
        "Collaborated with UI/UX designers and cross-functional teams to deliver responsive, user-friendly, and high-quality web applications."
      ],
      techStack: ["React.js", "Express.js", "MongoDB", "Node.js", "JavaScript ES6+", "RESTful APIs", "Git"]
    },
    {
      role: "Programmer | Full Stack Developer",
      company: "Osiz Technologies Pvt Ltd",
      duration: "Aug 2021 - Mar 2024",
      responsibilities: [
        "Developed and maintained Single Page Applications using React.js and JavaScript ES6+.",
        "Implemented application state management using Redux and Context API.",
        "Built interactive frontend features for financial, e-commerce, and blockchain-based web applications.",
        "Followed reusable component development and responsive web-design practices across multiple projects."
      ],
      techStack: ["React.js", "JavaScript ES6+", "Redux", "Context API", "Express.js", "MongoDB", "Node.js", "HTML5", "CSS3", "Bootstrap", "RESTful APIs", "Git"]
    }
  ],

  projects: [
    {
      title: "PASS Admin Panel",
      description: "Centralized enterprise operations platform managing Ride, Delivery, and Mall workflows with real-time data tables, dynamic filters, and API cache synchronization.",
      techStack: ["React.js", "Next.js", "TypeScript", "TanStack React Query", "Tailwind CSS", "GitLab"],
      liveUrl: "https://pass.global"
    },
    {
      title: "Quattro",
      description: "Enterprise marketing analytics and campaign planning dashboard integrating Sisense BI visualizations, cross-channel performance reporting, and KPI tracking.",
      techStack: ["React.js", "Next.js", "TypeScript", "Axios", "RESTful APIs", "Sisense BI"]
    },
    {
      title: "Horizon React Component Library",
      description: "Modular enterprise UI component library and design system built with TypeScript, Mantine UI, and SCSS, fully documented and tested with Storybook.",
      techStack: ["React.js", "TypeScript", "Mantine UI", "Storybook", "npm", "SCSS"],
      liveUrl: "https://www.npmjs.com/package/@rcigroup/horizon-component-sdk"
    },
    {
      title: "Kreon Financial Service",
      description: "Employee corporate loan benefits portal featuring secure multi-role application workflows, approval wizards, and integrated financial RESTful services.",
      techStack: ["React.js", "TypeScript", "Redux", "Material UI", "Axios", "RESTful APIs"],
      liveUrl: "https://www.kreon.in/"
    },
    {
      title: "Neoswap Token Bridge",
      description: "Cross-chain cryptocurrency token swap and bridge interface featuring Web3 wallet connectivity, real-time transaction monitoring, and multi-network transfers.",
      techStack: ["React.js", "JavaScript", "Redux", "Web3.js", "RESTful APIs", "Bootstrap"],
      liveUrl: "https://xbridge.neo.org/"
    }
  ],

  education: [
    {
      institution: "Subbalakshmi Lakshmipathy College of Science",
      degree: "Bachelor of Computer Science",
      duration: "2018 – 2021"
    },
    {
      institution: "VHN Higher Secondary School",
      degree: "Higher Secondary School",
      duration: "2018"
    }
  ]
};
