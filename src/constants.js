export const CONTACT = {
  email: "sanandanghimire6688@gmail.com",
  phone: "+9745415142",
  address: "Kathmandu, Nepal",
  socialLinks: {
    github: "https://github.com/Sanagh7",
    linkedin: "https://www.linkedin.com/in/sanandan-ghimire/",
    youtube: "https://youtube.com/@yourusername",
    tiktok: "https://tiktok.com/@yourusername",
    discord: "https://discord.gg/yourinvite",
  },
};

export const ABOUT_TEXT =
  "I am a backend-focused developer specializing in building scalable APIs, system architectures, and data-driven applications. I have experience developing production-level systems including ERP platforms and learning applications, with a strong focus on performance and maintainability.\n\nI primarily work with Node.js, Express, NestJS, and PostgreSQL, and have hands-on experience in database design, API development, and backend optimization.\n\nIn addition to backend engineering, I am exploring AI and research-oriented development, focusing on integrating machine learning into practical, real-world systems.";

export const EDUCATION = [
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Himalaya College of Engineering",
    location: "Lalitpur, Nepal",
    period: "2022 - 2026",
    description:
      "Core curriculum in software development, data structures, and system design. Active member of the coding club.",
    logo: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=100&h=100&fit=crop",
  },
];

export const EXPERIENCES = [
  {
    period: "Feb 2025 – Feb 2026",
    role: "Backend Lead (Full Stack Responsibilities)",
    company: "Timber5D Solutions",
    description:
      "Led backend development for a full-scale ERP system for a manufacturing company. Designed and implemented scalable REST APIs using Node.js and Express. Architected and optimized PostgreSQL database using Prisma ORM.",
    responsibilities: [
      "Led backend development for a full-scale ERP system for a manufacturing company",
      "Designed and implemented scalable REST APIs using Node.js and Express",
      "Architected and optimized PostgreSQL database using Prisma ORM",
      "Developed core modules including inventory, workflow automation, and operations management",
      "Contributed to frontend development using Next.js and Tailwind CSS",
    ],
    technologies: ["Node.js", "Express", "PostgreSQL", "Prisma", "Next.js", "Tailwind CSS"],
    highlights: "Enterprise system deployed for real-world manufacturing workflow",
  },
  {
    period: "Mar 2024 – Dec 2024",
    role: "Full Stack Developer Intern",
    company: "Elivate.info",
    description:
      "Built an online learning platform for +2 students preparing for IOE and MBBS entrance exams. Developed features for notes management and MCQ-based practice system.",
    responsibilities: [
      "Built an online learning platform for +2 students preparing for IOE and MBBS entrance exams",
      "Developed features for notes management and MCQ-based practice system",
      "Designed backend APIs and services using Node.js and Express",
      "Integrated responsive frontend using Next.js and Tailwind CSS",
      "Worked in a fast-paced startup environment, contributing across the full stack",
    ],
    technologies: ["Next.js", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Prisma"],
    highlights: "Learning platform serving students for competitive exam preparation",
  },
  {
    period: "Sep 2023 – Jan 2024",
    role: "Backend / Full Stack Developer",
    company: "Raica Boys Hostel",
    description:
      "Developed a hostel ERP and booking system for managing student accommodations. Designed backend APIs for booking, room allocation, and user management.",
    responsibilities: [
      "Developed a hostel ERP and booking system for managing student accommodations",
      "Designed backend APIs for booking, room allocation, and user management",
      "Implemented database schema using PostgreSQL and Prisma ORM",
      "Built a responsive frontend interface for admins and users",
    ],
    technologies: ["Node.js", "Express", "PostgreSQL", "Prisma", "Next.js", "Tailwind CSS"],
    highlights: "Live system deployed for client use",
  },
];

export const PROJECTS = [
  {
    title: "ERP System – Timber5D Solutions",
    category: "Real-World / Client Projects",
    description:
      "Feb 2025 – Feb 2026 | Role: Backend Lead / Full Stack Developer\n\n• Led backend architecture for a multi-tenant ERP system serving multiple companies\n• Designed and implemented scalable REST APIs handling 10k+ requests per day using Node.js & Express\n• Implemented Role-Based Access Control (RBAC) and Policy-Based Access Control (PBAC) to secure sensitive company data\n• Developed subscription-based modules allowing companies to use features based on their plan\n• Built pipelines for leads → follow-ups → customers, inventory management → production schedule → order & dispatch, and other core operations\n• Automated manual operations: raw leads converted automatically after remarks, multi-step workflows streamlined across departments\n• Integrated complex inventory management, production scheduling, and order-dispatch management pipelines\n• Optimized PostgreSQL database for performance, scalability, and multi-tenant support\n• Contributed to frontend dashboards using Next.js and Tailwind CSS for admin and user interfaces\n\nKey Impact:\n• Reduced manual follow-up time by 70%\n• Increased order fulfillment efficiency by 50%\n• Supported 5+ companies simultaneously on multi-tenant platform",
    technologies: ["Node.js", "Express", "PostgreSQL", "Prisma", "Next.js", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
    github: "",
    demo: "https://timber5dsolutions.com",
  },
  {
    title: "Learning Platform – Elivate.info",
    category: "Real-World / Client Projects",
    description:
      "Mar 2024 – Dec 2024 | Role: Full Stack Developer Intern\n\n• Built an online platform for +2 students preparing for IOE and MBBS exams\n• Developed notes management and MCQ-based practice features\n• Designed backend APIs using Node.js & Express\n• Built responsive frontend using Next.js and Tailwind CSS\n• Worked in a fast-paced startup environment contributing across the full stack",
    technologies: ["Node.js", "Express", "PostgreSQL", "Prisma", "Next.js", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
    github: "",
    demo: "",
  },
  {
    title: "Hostel ERP & Booking System – Raica Boys Hostel",
    category: "Real-World / Client Projects",
    description:
      "Sep 2023 – Jan 2024 | Role: Backend / Full Stack Developer\n\n• Developed hostel ERP and booking system to manage student accommodations\n• Built backend APIs for booking, room allocation, and user management\n• Designed and optimized database schema using PostgreSQL and Prisma ORM\n• Created responsive frontend interface for admins and users\n• Deployed live system for client use",
    technologies: ["Node.js", "Express", "PostgreSQL", "Prisma", "Next.js", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&h=250&fit=crop",
    github: "",
    demo: "https://raicaboyshostel.com.np",
  },
  {
    title: "Website Penetration Testing System",
    category: "College / Academic Projects",
    description:
      "A comprehensive security tool that automates vulnerability scanning for websites, detecting OWASP Top 10 vulnerabilities, SQL injections, and XSS attacks with detailed reports and remediation suggestions.",
    technologies: [
      "Python",
      "Django",
      "Docker",
      "OWASP ZAP",
      "Selenium",
      "PostgreSQL",
      "React",
      "JWT Authentication",
      "Celery",
    ],
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=250&fit=crop",
    github: "https://github.com/sanandan-gh/pentest-platform",
    demo: "https://pentest.sanandanghimire.com",
  },
  {
    title: "Billing & Inventory Management System",
    category: "Self-Oriented / Personal / R&D Projects",
    description:
      "Jan 2024 – Mar 2024 | Role: Full Stack Developer\n\n• Developed a full-featured Billing & Inventory Management System with POS and reporting modules\n• Implemented real-time inventory updates synchronized with POS transactions for accurate stock tracking\n• Designed backend with NestJS + GraphQL for flexible queries and modular architecture\n• Built PostgreSQL database with Prisma ORM for products, inventory, sales, and users\n• Implemented role-based access control (Admin / Cashier) for secure operations\n• Generated dynamic sales and inventory reports to assist business decisions\n• Frontend developed with React + Vite + Tailwind CSS, providing responsive dashboards\n• Backend optimized for performance and scalability, supporting multiple concurrent POS sessions\n\nImpact / Metrics:\n• Processed 100+ daily transactions with real-time inventory updates\n• Reduced manual billing errors by 80%\n• Reports generated in seconds, improving operational efficiency\n• System ready for future AI/ML integration for sales forecasting or stock predictions",
    technologies: ["React", "Vite", "Tailwind CSS", "NestJS", "GraphQL", "PostgreSQL", "Prisma"],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
    github: "",
    demo: "",
  },
  {
    title: "E-commerce Platform",
    category: "Self-Oriented / Personal / R&D Projects",
    description:
      "A full-stack e-commerce solution with real-time inventory management, payment processing, and user authentication.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API", "AWS"],
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=250&fit=crop",
    github: "https://github.com/sanandan-gh/ecommerce-platform",
    demo: "https://ecommerce-demo.sanandanghimire.com",
  },
  {
    title: "Task Management System",
    category: "Self-Oriented / Personal / R&D Projects",
    description:
      "A collaborative project management tool with Kanban boards, task assignments, and progress tracking.",
    technologies: ["Vue.js", "Express", "PostgreSQL", "Socket.io", "Docker"],
    image:
      "https://images.unsplash.com/photo-1529119368496-2dfda6ec2804?w=400&h=250&fit=crop",
    github: "https://github.com/sanandan-gh/task-manager",
    demo: "https://tasks.sanandanghimire.com",
  },
  {
    title: "Weather Forecast App",
    description:
      "A mobile-responsive weather application with location detection, 7-day forecasts, and weather alerts.",
    technologies: [
      "React",
      "Redux",
      "OpenWeather API",
      "Geolocation API",
      "Tailwind CSS",
    ],
    image:
      "https://images.unsplash.com/photo-1532178910-7815d6919875?w=400&h=250&fit=crop",
    github: "https://github.com/sanandan-gh/weather-app",
    demo: "https://weather.sanandanghimire.com",
  },
];

export const TESTIMONIALS = [
  {
    text: "Working with Sanandan was an absolute pleasure. His attention to detail and problem-solving skills helped us deliver a complex project ahead of schedule. His expertise in modern web technologies is truly impressive.",
    name: "Sarthak Pokhrel",
    position: "AI/ML Engineer ",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
  },
  {
    text: "Sanandan's technical skills are matched only by his excellent communication abilities. He consistently delivered high-quality code and was always willing to explain complex concepts to the team.",
    name: "Shusbin Tripathi",
    position: "Web Developer",
    image: "",
  },
  // {
  //   text: "I was impressed by Sanandan's ability to quickly understand our requirements and implement solutions that exceeded our expectations. His work ethic and dedication to quality are outstanding.",
  //   name: "Abishek Shrestha",
  //   position: "Cyber Security Engineer",
  //   image: "",
  // },
];

export const ACHIEVEMENTS = {
  stats: [
    { label: "Projects Completed", value: "25+" },
    { label: "Happy Clients", value: "15+" },
    { label: "Years Experience", value: "3+" },
    { label: "Technologies", value: "20+" },
  ],
};

export const HERO_CONTENT = {
  mainHeading: "Backend Engineer | AI & R&D Enthusiast",
  subheading: "Building scalable backend systems and intelligent, data-driven applications",
  description: "I design and build scalable backend systems and production-ready applications. From ERP platforms to learning systems, I focus on performance, clean architecture, and real-world impact—while actively exploring AI and research-driven solutions.",
};

export const SKILLS = [
  {
    category: "Frontend",
    technologies: [
      "React",
      "JavaScript",
      "TypeScript",
      "HTML/CSS",
      "Tailwind CSS",
      "Vue.js",
      "Angular",
      "Next.js",
      "Redux",
      "WebSockets",
    ],
  },
  {
    category: "Backend",
    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "GraphQL",
      "Django",
      "Flask",
      "REST APIs",
      "Firebase",
      "Microservices",
    ],
  },
  {
    category: "Cyber Security",
    technologies: [
      "Penetration Testing",
      "Vulnerability Assessment",
      "Network Security",
      "OWASP Top 10",
      "Ethical Hacking",
      "Burp Suite",
      "Wireshark",
      "Metasploit",
      "Secure Coding Practices",
      "Security Auditing",
    ],
  },
  {
    category: "Tools & Deployment",
    technologies: [
      "Git",
      "Docker",
      "AWS",
      "CI/CD",
      "Jest",
      "Kubernetes",
      "Azure",
      "Terraform",
      "Jenkins",
      "Linux",
    ],
  },
];
