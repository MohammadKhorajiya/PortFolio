export const portfolioData = {
  personal: {
    name: "Mohammad Khorajiya",
    role: "Java Backend Developer",
    headline: "I build secure, scalable REST APIs with Java, Spring Boot and Spring Security.",
    shortIntro: "Java Backend Developer crafting secure REST APIs with Spring Boot, Spring Security, MongoDB and Redis.",
    about: `I am a Java Backend Developer with hands-on experience developing secure, high-performance REST APIs using Java, Spring Boot, Spring Security, MongoDB, and Redis.

I specialize in architecting stateless JWT authentication, Role-Based Access Control (RBAC), thread-safe asynchronous processing, and external API integrations using Spring WebClient with resilient retry and rate-limiting patterns.

With a strong technical foundation in Core Java (OOP, Multithreading, Collections, Streams, Lambdas), database optimization, automated testing (JUnit 5, Mockito), and SonarQube code quality analysis, I focus on engineering clean, maintainable, and cloud-ready backend systems.`,
    phone: "+91 87802-70802",
    email: "khorajiyamohammad724@gmail.com",
    github: "https://github.com/MohammadKhorajiya",
    linkedin: "https://www.linkedin.com/in/mohammadkhorajiya724",
    location: "India",
    resumeUrl: "/resume.pdf",
    availability: "Open to Java Backend roles",
    stats: [
      { label: "Core Stack", value: "Java & Spring Boot" },
      { label: "Security", value: "JWT & RBAC" },
      { label: "Data Layer", value: "MongoDB & Redis" },
      { label: "Test Coverage", value: "90%+ JUnit / Mockito" }
    ]
  },

  navLinks: [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" }
  ],

  skillCategories: [
    {
      name: "Languages & Core Java",
      description: "Core programming & language features",
      skills: [
        { name: "Java 8+", level: 92, icon: "Code2", primary: true },
        { name: "OOP Principles", level: 90, icon: "Layers" },
        { name: "Java Collections", level: 90, icon: "Database" },
        { name: "Streams & Lambdas", level: 88, icon: "Zap" },
        { name: "Multithreading", level: 85, icon: "Cpu" },
        { name: "SQL", level: 82, icon: "FileCode" }
      ]
    },
    {
      name: "Backend Frameworks",
      description: "Server-side services & REST architecture",
      skills: [
        { name: "Spring Boot", level: 92, icon: "Server", primary: true },
        { name: "Spring Security", level: 88, icon: "ShieldCheck", primary: true },
        { name: "Spring Data MongoDB", level: 86, icon: "HardDrive" },
        { name: "REST APIs", level: 94, icon: "Network" },
        { name: "JWT & RBAC", level: 90, icon: "Lock" }
      ]
    },
    {
      name: "Database & Caching",
      description: "NoSQL storage & high-performance caching layers",
      skills: [
        { name: "MongoDB", level: 88, icon: "Database", primary: true },
        { name: "Redis Caching", level: 84, icon: "Zap" }
      ]
    },
    {
      name: "Testing & Tooling",
      description: "Build tools, API documentation & deployment",
      skills: [
        { name: "JUnit 5 & Mockito", level: 88, icon: "CheckCircle2", primary: true },
        { name: "Maven", level: 85, icon: "Package" },
        { name: "Git & GitHub", level: 90, icon: "GitBranch" },
        { name: "Postman", level: 88, icon: "Send" },
        { name: "SonarQube", level: 82, icon: "FileCheck" },
        { name: "Swagger / OpenAPI", level: 88, icon: "FileText" },
        { name: "Render Cloud", level: 80, icon: "Cloud" },
        { name: "IntelliJ IDEA", level: 92, icon: "Terminal" }
      ]
    }
  ],

  projects: [
    {
      id: "project-bhadas-ai",
      title: "Bhadas AI",
      subtitle: "Intelligent Prompt & AI Service API",
      period: "May 2026 – Present",
      description: "A resilient Spring Boot backend integrating Generative AI APIs with prompt processing, sanitization, non-blocking HTTP WebClient communication, and structured response handling.",
      technologies: ["Java", "Spring Boot", "REST APIs", "Spring WebClient", "Generative AI", "Render"],
      githubUrl: "https://github.com/MohammadKhorajiya/bhadas-ai",
      liveUrl: "https://bhadas-ai.vercel.app/",
      apiDocs: null,
      featured: true,
      highlights: [
        "Integrated Generative AI APIs with prompt processing, sanitization, and structured response handling.",
        "Implemented non-blocking external API communication using Spring WebClient with retry and rate-limiting."
      ]
    },
    {
      id: "project-journal-app",
      title: "JournalApp",
      subtitle: "Secure Journal Management API",
      period: "Jan 2026 – Present",
      description: "A secure RESTful backend featuring stateless JWT authentication, role-based access control, MongoDB persistence, and Redis caching for fast API response times.",
      technologies: ["Java", "Spring Boot", "Spring Security", "MongoDB", "Redis", "JUnit 5", "Mockito"],
      githubUrl: "https://github.com/MohammadKhorajiya/JournalApp",
      liveUrl: "https://journalapp-7skc.onrender.com/swagger-ui/index.html",
      apiDocs: "Swagger UI",
      featured: true,
      highlights: [
        "Developed a secure REST API with JWT authentication and role-based access control.",
        "Integrated MongoDB and Redis caching with automated testing using JUnit 5 and Mockito."
      ]
    },
    {
      id: "project-task-assignment",
      title: "Task Assignment System",
      subtitle: "Asynchronous Task API",
      period: "Apr 2026 – Present",
      description: "A RESTful task assignment engine supporting thread-safe task synchronization, JWT security, and asynchronous email notifications leveraging Spring @Async.",
      technologies: ["Java", "Spring Boot", "Spring Security", "MongoDB", "JavaMailSender", "@Async"],
      githubUrl: "https://github.com/MohammadKhorajiya/task-assignment",
      liveUrl: "https://task-assignment-mgvz.onrender.com/swagger-ui/index.html",
      apiDocs: "Swagger UI",
      featured: false,
      highlights: [
        "Developed a task-assignment REST API with JWT authentication and role-based authorization.",
        "Implemented thread-safe synchronization using ConcurrentHashMap and asynchronous email notifications using Spring @Async."
      ]
    }
  ],

  timeline: [
    {
      id: "exp-1",
      type: "experience",
      role: "Java Backend Developer Intern",
      organization: "Pulse Circle",
      period: "Mar 2026 – May 2026",
      location: "Remote",
      description: "Developed secure REST APIs using Java, Spring Boot, and Spring Security with stateless JWT authentication and role-based authorization.",
      highlights: [
        "Developed secure REST APIs using Java, Spring Boot, and Spring Security with stateless JWT authentication and role-based authorization.",
        "Designed MongoDB data-access layers using Spring Data MongoDB, including indexing and aggregation queries.",
        "Developed unit and integration tests using JUnit 5 and Mockito; supported API testing, SonarQube analysis, and Render deployment."
      ],
      skills: ["Java", "Spring Boot", "Spring Security", "MongoDB", "JUnit 5", "Mockito", "SonarQube", "Render"]
    },
    {
      id: "edu-1",
      type: "education",
      role: "Bachelor of Computer Applications (BCA)",
      organization: "Hemchandracharya North Gujarat University (HNGU)",
      period: "2023 – 2026",
      location: "Gujarat, India",
      gpa: "CGPA 6.47",
      description: "Coursework across Java development, data structures, database systems, and software engineering.",
      highlights: [
        "Focused on Object-Oriented Programming (OOP) & Java development",
        "Graduated with CGPA 6.47"
      ],
      skills: ["Core Java", "Data Structures", "Database Management", "Software Engineering"]
    }
  ],

  certifications: [
    {
      id: "cert-1",
      title: "Java Backend Development Internship Certification",
      issuer: "Pulse Circle — Remote",
      date: "2026",
      credentialUrl: null
    }
  ]
};
