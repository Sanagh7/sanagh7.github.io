import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I'm a passionate full stack developer specializing in building exceptional digital experiences. Currently focused on creating accessible, human-centered products at the intersection of technology and design. My expertise spans React, Node.js, and cloud technologies with a strong emphasis on performance and user experience.`;

export const ABOUT_TEXT = `I'm a full stack developer with 3+ years of experience building web applications that solve real-world problems. My journey began with a Computer Science degree from Tribhuvan University, where I developed a strong foundation in algorithms and software engineering principles.

Throughout my career, I've worked with startups and established companies, helping them create scalable and maintainable codebases. I specialize in JavaScript ecosystems, particularly React and Node.js, and have experience with various databases and cloud platforms.

I'm passionate about clean code, accessibility, and creating intuitive user experiences. When I'm not coding, you can find me hiking in the mountains, contributing to open-source projects, or mentoring junior developers.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "TechNova Solutions",
    description: `Lead developer for a team of 5 engineers building a SaaS platform serving 20,000+ users. Implemented microservices architecture using Node.js, Express, and MongoDB that improved system reliability by 35%. Designed and built the frontend using React and Redux, reducing load times by 40%.`,
    technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Digital Horizon",
    description: `Developed responsive web applications using Next.js and TypeScript. Built reusable component libraries that improved development velocity by 25%. Implemented CI/CD pipelines that reduced deployment times from hours to minutes. Collaborated with designers to create pixel-perfect UIs and improve user experience.`,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "GraphQL", "Jest"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Innovative Systems",
    description: `Developed a real-time analytics dashboard using the MERN stack that processed data for 50+ enterprise clients. Integrated third-party APIs and payment gateways. Implemented security best practices that passed rigorous penetration testing. Mentored junior developers through pair programming and code reviews.`,
    technologies: ["JavaScript", "React", "Express.js", "MongoDB", "Redis"],
  },
  {
    year: "2020 - 2021",
    role: "Junior Web Developer",
    company: "WebCraft Studios",
    description: `Built and maintained client websites using modern web technologies. Collaborated with cross-functional teams to deliver projects on schedule. Optimized existing codebases for better performance and SEO. Participated in Agile development processes including daily standups and sprint planning.`,
    technologies: ["HTML/CSS", "JavaScript", "PHP", "MySQL", "WordPress"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Platform",
    image: project1,
    description:
      "A comprehensive e-commerce solution with product management, user authentication, cart functionality, and payment processing. Features include real-time inventory updates, user reviews, and an admin dashboard.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe API",
      "Redux",
    ],
    github: "https://github.com/sanandan-ghimire/ecommerce-platform",
    demo: "https://ecommerce-platform-demo.netlify.app",
  },
  {
    title: "Project Management System",
    image: project2,
    description:
      "A collaborative project management tool with task tracking, team management, and real-time updates. Includes features like Kanban boards, time tracking, file sharing, and detailed analytics dashboards.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Firebase",
      "Tailwind CSS",
      "React Query",
    ],
    github: "https://github.com/sanandan-ghimire/project-management-app",
    demo: "https://project-management-app.vercel.app",
  },
  {
    title: "AI Content Generator",
    image: project3,
    description:
      "An AI-powered content generation tool that helps users create blog posts, social media content, and marketing copy. Integrates with OpenAI's GPT API and includes customization options for different content types.",
    technologies: ["React", "Node.js", "OpenAI API", "MongoDB", "JWT Auth"],
    github: "https://github.com/sanandan-ghimire/ai-content-generator",
    demo: "https://ai-content-generator.herokuapp.com",
  },
  {
    title: "Real Estate Marketplace",
    image: project4,
    description:
      "A full-featured real estate platform allowing users to list properties, search with filters, schedule viewings, and connect with agents. Includes map integration, virtual tours, and mortgage calculators.",
    technologies: [
      "React",
      "Express",
      "PostgreSQL",
      "Google Maps API",
      "AWS S3",
    ],
    github: "https://github.com/sanandan-ghimire/realestate-marketplace",
    demo: "https://realestate-marketplace.netlify.app",
  },
];

export const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    position: "CTO at TechNova",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    text: "Sanandan is an exceptional developer who consistently delivers high-quality code. His ability to understand complex requirements and translate them into elegant solutions is remarkable. He's not just a developer; he's a problem solver and a valuable asset to any team.",
  },
  {
    name: "Michael Chen",
    position: "Project Manager at Digital Horizon",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    text: "Working with Sanandan was a pleasure. His technical skills are top-notch, but what truly sets him apart is his communication and commitment to deadlines. He takes ownership of his work and consistently goes above and beyond to ensure project success.",
  },
  {
    name: "Emily Rodriguez",
    position: "UI/UX Designer at Innovative Systems",
    image: "https://randomuser.me/api/portraits/women/17.jpg",
    text: "As a designer, I've worked with many developers, but Sanandan stands out for his attention to detail and commitment to pixel-perfect implementation. He not only brings designs to life accurately but also contributes valuable insights to improve user experience.",
  },
];

export const SKILLS = [
  {
    category: "Frontend",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Redux",
      "HTML5/CSS3",
      "Tailwind CSS",
      "SASS/SCSS",
      "JavaScript (ES6+)",
      "Responsive Design",
      "Webpack",
    ],
  },
  {
    category: "Backend",
    technologies: [
      "Node.js",
      "Express",
      "NestJS",
      "REST APIs",
      "GraphQL",
      "WebSockets",
      "Authentication/Authorization",
      "Serverless Functions",
    ],
  },
  {
    category: "Databases",
    technologies: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Firebase",
      "Prisma ORM",
      "Mongoose",
    ],
  },
  {
    category: "DevOps & Tools",
    technologies: [
      "Git",
      "GitHub Actions",
      "Docker",
      "AWS",
      "Vercel",
      "Netlify",
      "CI/CD",
      "Jest",
      "React Testing Library",
      "Postman",
    ],
  },
];

export const CONTACT = {
  address: "Kathmandu, Nepal",
  phoneNo: "+977 9800000000",
  email: "sanandanghimire6688@gmail.com",
  socialLinks: {
    github: "https://github.com/sanandan-ghimire",
    linkedin: "https://linkedin.com/in/sanandan-ghimire",
    twitter: "https://twitter.com/sanandan_ghimire",
    instagram: "https://instagram.com/sanandan.ghimire",
  },
};
