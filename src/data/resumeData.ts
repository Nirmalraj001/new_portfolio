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
  subtitle: string;
  problemStatement: string;
  solution: string;
  keyContributions: string[];
  features: string[];
  businessValue: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
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
  title: "MERN Stack Developer | Frontend Developer",
  location: "Chennai, Tamil Nadu, India",
  phone: "+91 9360147391",
  email: "rajnirmal1622@gmail.com",
  summary: "MERN Stack Developer with 4+ years of experience building scalable, high-performance web applications using MongoDB, Express.js, React.js, Node.js, Next.js, TypeScript, and JavaScript (ES6+). Experienced in designing and developing end-to-end applications, RESTful APIs, reusable component libraries, complex admin dashboards, and responsive user interfaces. Skilled in frontend architecture, backend development, database design, TanStack React Query, state management, authentication, and performance optimization. Passionate about writing clean, maintainable code and delivering scalable enterprise solutions using modern web development best practices.",

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
      role: "Software Engineer | MERN Stack Developer",
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
      subtitle: "Ride, Delivery & Mall",
      problemStatement: "Handling complex, data-heavy operations with multiple users.",
      solution: "Developed a centralized enterprise admin platform to manage Ride, Delivery, and Mall operations.",
      keyContributions: [
        "Developed a centralized enterprise admin platform to manage Ride, Delivery, and Mall operations.",
        "Built scalable admin modules, advanced data tables, dynamic filters, forms, and reusable UI components using React.js, Next.js, and TypeScript.",
        "Integrated RESTful APIs and TanStack React Query for efficient data fetching, caching, query invalidation, and server-state synchronization.",
        "Built responsive admin dashboards designed to support complex operational workflows."
      ],
      features: [
        "Centralized operations management modules",
        "Advanced data tables and filters",
        "Efficient API cache synchronization",
        "Role-based control flows"
      ],
      businessValue: "Improved data accessibility and dashboard speed for operations management teams.",
      techStack: ["React.js", "Next.js", "TypeScript", "TanStack React Query", "RESTful APIs", "Tailwind CSS", "GitLab"]
    },
    {
      title: "Quattro",
      subtitle: "Planning & Reporting",
      problemStatement: "Analyzing cross-channel performance and rendering high-volume data dynamically.",
      solution: "Developed key frontend modules for an enterprise marketing analytics and planning platform used to monitor campaign performance across multiple channels.",
      keyContributions: [
        "Developed key frontend modules for an enterprise marketing analytics and planning platform used to monitor campaign performance across multiple channels.",
        "Integrated Sisense BI to fetch, process, and visualize large analytics datasets.",
        "Built React-based dashboards for performance reporting, trend analysis, and KPI tracking.",
        "Developed planning workflows that enabled organizations to create, manage, and optimize marketing campaign strategies.",
        "Collaborated with engineering teams to improve frontend maintainability and application performance."
      ],
      features: [
        "Sisense BI visualizations integration",
        "Trend analysis & KPI reporting charts",
        "Planning campaign workflow editors"
      ],
      businessValue: "Enabled marketing managers to visualize cross-channel data and plan campaigns effectively.",
      techStack: ["React.js", "Next.js", "TypeScript", "Axios", "RESTful APIs", "Horizon React Components"]
    },
    {
      title: "Horizon React Component Library",
      subtitle: "Custom UI Package",
      problemStatement: "Maintaining UI consistency and preventing code replication across enterprise projects.",
      solution: "Contributed to the development and enhancement of an enterprise React component library used across multiple frontend applications.",
      keyContributions: [
        "Contributed to the development and enhancement of an enterprise React component library used across multiple frontend applications.",
        "Built reusable and modular UI components using React.js, TypeScript, Mantine UI, and SCSS.",
        "Developed and maintained component documentation and UI examples using Storybook.",
        "Refactored existing components to improve maintainability, performance, and theme compatibility."
      ],
      features: [
        "Dozens of accessible, dynamic UI components",
        "Comprehensive theme configs",
        "Storybook playgrounds and documentation"
      ],
      businessValue: "Accelerated frontend developers' feature delivery speed and standardized design tokens across corporate websites.",
      techStack: ["React.js", "TypeScript", "Mantine UI", "Storybook", "npm", "SCSS"]
    },
    {
      title: "Kreon Financial Service",
      subtitle: "Employee Benefits & Loans",
      problemStatement: "Providing user-friendly multi-step loan applications with role workflows.",
      solution: "Developed a React-based financial platform that enabled employees to apply for loans through their organizations.",
      keyContributions: [
        "Developed a React-based financial platform that enabled employees to apply for loans through their organizations.",
        "Implemented role-based user interfaces to support employees and organizational users.",
        "Integrated RESTful APIs for loan application, approval, and financial workflow management.",
        "Developed responsive interfaces focused on usability and maintainable frontend architecture."
      ],
      features: [
        "Multi-role user flows",
        "Loan request application wizards",
        "Dynamic progress status indicators"
      ],
      businessValue: "Streamlined corporate loan applications for employees and increased HR processing velocity.",
      techStack: ["React.js", "TypeScript", "Redux", "RESTful APIs", "Material UI", "Axios"]
    },
    {
      title: "Neoswap Token Bridge",
      subtitle: "Cross-Chain Token Swap",
      problemStatement: "Enabling secure token transfers and swap tracking between blockchain networks.",
      solution: "Developed a token bridge feature for a cryptocurrency exchange platform using React.js.",
      keyContributions: [
        "Developed a token bridge feature for a cryptocurrency exchange platform using React.js.",
        "Built frontend workflows to enable token transfers between blockchain networks.",
        "Implemented transaction monitoring and real-time status updates for cross-chain transfers.",
        "Integrated Web3 functionality and RESTful APIs for blockchain transaction workflows."
      ],
      features: [
        "Cross-chain transfer triggers",
        "Real-time transaction status displays",
        "Web3 contract api links"
      ],
      businessValue: "Successfully launched the swap bridge interface, providing secure transfers and zero client-side swap discrepancies.",
      techStack: ["React.js", "JavaScript", "Redux", "Web3.js", "RESTful APIs", "HTML5", "CSS3", "Bootstrap"]
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
