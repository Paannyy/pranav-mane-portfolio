export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  badge?: string;
  description: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
  highlights: string[];
  modules?: string[];
  workflowSteps?: { step: string; actor: string; desc: string }[];
  onChainOffChain?: {
    offChain: { title: string; tech: string; duties: string[] };
    onChain: { title: string; tech: string; duties: string[] };
  };
  githubUrl: string; // TODO: Replace with Pranav's actual repository URL
  publicationUrl?: string; // For IEEE Xplore
  publicationTitle?: string;
  caseStudy: {
    context: string;
    systemArchitecture: string;
    engineeringDecisions: string[];
    security: string[];
    dataStorage: string;
    testValidation: {
      summary: string;
      counts: string[];
    };
    outcome: string;
  };
}

export interface TechGroup {
  name: string;
  description: string;
  items: {
    name: string;
    note?: string;
    isPrimary?: boolean;
  }[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "PRANAV BIBHISHAN MANE",
    shortName: "Pranav Mane",
    initials: "PM.",
    location: "Pune, Maharashtra, India",
    email: "pranavmane103@gmail.com",
    phone: "+91 9325112083",
    status: "Open to Backend & Software Engineering Roles",
    headline: "Building reliable backend systems with Python.",
    summary:
      "Computer Engineering graduate focused on Python backend development, REST APIs, databases, authentication, testing, and production-oriented software engineering.",
    targetRoles: [
      "Python Backend Developer",
      "Backend Engineer",
      "Software Engineer",
      "Entry-Level Software Developer",
    ],
    headshotPath: "/assets/pranav_headshot.jpg",
    resumePath: "/assets/pranav_mane_resume.pdf",
    githubPlaceholder: "https://github.com/#", // TODO: Update with Pranav's actual GitHub profile
  },

  // Recruiter Quick Audit Data
  recruiterSummary: {
    role: "Python Backend Developer / Software Engineer",
    coreStack: "Python • FastAPI • Django • PostgreSQL • REST APIs",
    degree: "B.E. Computer Engineering (CGPA 7.6) • 2022–2026",
    location: "Pune, Maharashtra, India",
    projectTests: "300 Django tests • 38 FastAPI backend tests • 24 frontend tests",
  },

  // Engineering Identity / Philosophy - 100% Interview Defensible
  engineeringIdentity: {
    headline: "I care about the parts of software that make systems reliable.",
    subheadline:
      "A clean frontend is only as dependable as the backend beneath it. I focus on REST APIs, relational database design, authentication, and test-verified application logic.",
    pillars: [
      {
        number: "01",
        title: "Relational Database Design",
        description:
          "Structuring clean relational schemas in PostgreSQL and MySQL with well-defined table relationships, primary keys, and SQL queries to keep data reliable across user workflows.",
      },
      {
        number: "02",
        title: "Stateless JWT Authentication & Authorization",
        description:
          "Implementing JSON Web Token verification and role-based permissions to isolate Administrator, Authority, and Client workflows across protected REST API endpoints.",
      },
      {
        number: "03",
        title: "Automated Testing Suites",
        description:
          "Writing thorough automated tests to verify endpoint logic, permissions, and edge cases—including 300 Django tests and 24 frontend tests in ShopHub, and 38 backend tests in Smart Civic Response.",
      },
      {
        number: "04",
        title: "Auditability & Verification",
        description:
          "Engineering systems with traceable operations—from Household ID deduplication and partial-allocation records to Hyperledger Fabric on-chain audit trails.",
      },
    ],
  },

  // Tools I work with - Strictly from resume
  techGroups: [
    {
      name: "Backend",
      description: "Server-side languages, frameworks, and API architectures",
      items: [
        { name: "Python", isPrimary: true, note: "Core Language" },
        { name: "FastAPI", isPrimary: true, note: "Backend Framework" },
        { name: "Django", isPrimary: true, note: "Full-Stack Framework" },
        { name: "Django REST Framework", isPrimary: true, note: "REST API Toolkit" },
        { name: "Java (Basic)", note: "Core OOP" },
      ],
    },
    {
      name: "Databases",
      description: "Relational modeling, SQL queries, and document storage",
      items: [
        { name: "PostgreSQL", isPrimary: true, note: "Relational Database" },
        { name: "MySQL", isPrimary: true, note: "Relational Database" },
        { name: "SQL", isPrimary: true, note: "DDL & DML Queries" },
        { name: "MongoDB", note: "Document Store" },
      ],
    },
    {
      name: "Engineering",
      description: "Protocols, authentication, and computer science foundations",
      items: [
        { name: "REST APIs", isPrimary: true, note: "API Architecture" },
        { name: "JWT Authentication", isPrimary: true, note: "Token Auth" },
        { name: "JSON", note: "Data Format" },
        { name: "HTTP", note: "Protocol" },
        { name: "Object-Oriented Programming (OOP)", isPrimary: true },
        { name: "Data Structures & Algorithms (DSA)", isPrimary: true },
        { name: "DBMS", isPrimary: true },
        { name: "Operating Systems (Basic)" },
        { name: "Computer Networks (Basic)" },
      ],
    },
    {
      name: "Frontend",
      description: "User interfaces and component-driven frontends",
      items: [
        { name: "React.js", note: "UI Components" },
        { name: "TypeScript", note: "Type Safety" },
        { name: "JavaScript", note: "Web Fundamentals" },
        { name: "HTML", note: "Markup" },
        { name: "CSS", note: "Styling" },
      ],
    },
    {
      name: "Tools",
      description: "Version control, API testing, and development environment",
      items: [
        { name: "Git", isPrimary: true, note: "Version Control" },
        { name: "GitHub", isPrimary: true, note: "Code Repository" },
        { name: "Postman", isPrimary: true, note: "API Testing" },
        { name: "VS Code", note: "Code Editor" },
      ],
    },
  ] as TechGroup[],

  currentlyDeepening: [
    {
      topic: "Advanced Python Backend Development",
      detail: "Strengthening Python core concepts, clean code patterns, and backend design principles",
    },
    {
      topic: "API Design",
      detail: "Deepening RESTful endpoint structure, consistent schemas, and API documentation",
    },
    {
      topic: "PostgreSQL",
      detail: "Advancing query optimization, relational indexing, and performance tuning",
    },
  ],

  // What I Build - 6 Clean Engineering Cards
  capabilities: [
    {
      number: "01",
      title: "Backend APIs",
      description:
        "Building RESTful APIs with Python, FastAPI, and Django REST Framework. Developing clean endpoints, structured JSON payloads, and HTTP request/response flows.",
      techs: ["Python", "FastAPI", "Django REST Framework", "REST APIs"],
    },
    {
      number: "02",
      title: "Authentication & Authorization",
      description:
        "Implementing JWT-based authentication and role-based authorization to secure sensitive endpoints and enforce distinct user role permissions.",
      techs: ["JWT", "Role-Based Auth", "REST Security", "Token Verification"],
    },
    {
      number: "03",
      title: "Database Systems",
      description:
        "Designing relational databases and writing SQL queries with PostgreSQL and MySQL to model application entities and support reliable data operations.",
      techs: ["PostgreSQL", "MySQL", "SQL", "Relational Database Design"],
    },
    {
      number: "04",
      title: "Full-Stack Systems",
      description:
        "Connecting Python and Node backend APIs with responsive React and TypeScript frontends, verifying end-to-end data communication across client and server.",
      techs: ["React.js", "TypeScript", "REST APIs", "Full-Stack Integration"],
    },
    {
      number: "05",
      title: "Automated Testing",
      description:
        "Developing automated test suites to validate backend and frontend logic, including 300 Django tests and 24 frontend tests in ShopHub, and 38 backend tests in Smart Civic Response.",
      techs: ["Django Tests (300)", "FastAPI Backend Tests (38)", "Frontend Tests (24)"],
    },
    {
      number: "06",
      title: "Problem Solving & Core CS",
      description:
        "Applying core computer science fundamentals—Object-Oriented Programming, Data Structures & Algorithms, and DBMS concepts—to build maintainable software.",
      techs: ["OOP", "DSA", "DBMS", "Software Fundamentals"],
    },
  ],

  // Projects - Factual, strictly backed by resume
  projects: [
    {
      id: "disaster-relief",
      number: "01",
      title: "Hybrid On-Chain & Off-Chain Disaster Relief Management System",
      tagline:
        "Disaster relief platform combining React/Node/Express/MongoDB with Hyperledger Fabric for immutable on-chain audit trails.",
      badge: "Final Year Project • IEEE Xplore Mention",
      description:
        "Architected a disaster-relief platform spanning Administrator, Donor, and Beneficiary roles to improve transparency and accountability in aid distribution.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Hyperledger Fabric",
        "REST APIs",
        "JWT",
      ],
      metrics: [
        { label: "Role Dashboards", value: "Admin, Donor, Beneficiary" },
        { label: "Blockchain", value: "Hyperledger Fabric" },
        { label: "Verification", value: "Household ID (HH-ID)" },
      ],
      highlights: [
        "Role-based dashboards secured with JWT-based authentication and authorization flows",
        "Engineered a Household ID (HH-ID) verification scheme to prevent duplicate beneficiary registrations and fraudulent aid claims",
        "Built a partial-allocation engine to split donations across multiple beneficiaries while keeping fund reconciliation records accurate",
        "Integrated Hyperledger Fabric to record aid allocations and beneficiary transactions as immutable, on-chain audit trails",
        "Developed a proof-of-delivery upload and verification workflow so donors could track a contribution from submission to delivery confirmation",
      ],
      onChainOffChain: {
        offChain: {
          title: "Off-Chain Application Layer",
          tech: "React.js • Node.js / Express.js • MongoDB • REST APIs",
          duties: [
            "Administrator, Donor, and Beneficiary role-based dashboards",
            "JWT-based authentication and authorization flows",
            "Household ID (HH-ID) verification scheme to prevent duplicate registrations",
            "Partial allocation engine to split donations across multiple beneficiaries",
            "Fund reconciliation records and MongoDB storage",
          ],
        },
        onChain: {
          title: "On-Chain Audit Trail Layer",
          tech: "Hyperledger Fabric Blockchain",
          duties: [
            "Hyperledger Fabric integration for immutable on-chain audit trails",
            "Recording aid allocations and beneficiary transactions on-chain",
            "Proof-of-delivery upload and verification workflow",
            "Donor contribution tracking from submission to delivery confirmation",
          ],
        },
      },
      workflowSteps: [
        {
          step: "01. Verification",
          actor: "Household ID Scheme",
          desc: "Household ID (HH-ID) verification scheme prevents duplicate beneficiary registrations and fraudulent aid claims.",
        },
        {
          step: "02. Partial Allocation",
          actor: "Allocation Engine",
          desc: "Partial-allocation engine splits donations across multiple beneficiaries while keeping fund reconciliation records accurate.",
        },
        {
          step: "03. Audit Trail",
          actor: "Hyperledger Fabric",
          desc: "Aid allocations and beneficiary transactions are recorded as immutable on-chain audit trails.",
        },
        {
          step: "04. Proof of Delivery",
          actor: "Verification Workflow",
          desc: "Proof-of-delivery upload and verification workflow allows donors to track contributions to confirmed delivery.",
        },
      ],
      githubUrl: "https://github.com/#disaster-relief-project", // TODO: Replace with Pranav's actual Disaster Relief GitHub repository URL
      publicationUrl: "https://ieeexplore.ieee.org/#", // TODO: Replace with Pranav's actual IEEE Xplore publication link
      publicationTitle: "Research Publication: IEEE Xplore",
      caseStudy: {
        context:
          "Traditional disaster relief distribution often suffers from duplicate beneficiary registrations, fraudulent claims, and lack of transparency in aid allocation.",
        systemArchitecture:
          "The system utilizes a hybrid approach: React.js on the frontend with role-based dashboards, Node.js and Express.js REST APIs with MongoDB off-chain for user workflows and allocation logic, and Hyperledger Fabric on-chain to record aid allocations as immutable audit trails.",
        engineeringDecisions: [
          "Role-Based Architecture: Created distinct dashboards and permission flows for Administrator, Donor, and Beneficiary roles.",
          "Household ID (HH-ID) Verification: Engineered an HH-ID verification scheme to prevent duplicate beneficiary registrations and fraudulent aid claims.",
          "Partial Allocation Engine: Built allocation logic to split donations across multiple beneficiaries while maintaining accurate fund reconciliation records.",
        ],
        security: [
          "JWT-based authentication and authorization flows across all user roles.",
          "Fraudulent aid-claim prevention via HH-ID verification scheme.",
          "Immutable on-chain audit trails via Hyperledger Fabric.",
        ],
        dataStorage:
          "MongoDB for off-chain application records and operational data, paired with Hyperledger Fabric for immutable on-chain audit trails.",
        testValidation: {
          summary: "Verified role-based dashboards, authentication flows, and proof-of-delivery verification workflows.",
          counts: [
            "Administrator, Donor, and Beneficiary role workflows verified",
            "Household ID deduplication logic verified",
            "Proof-of-delivery upload and verification verified",
          ],
        },
        outcome:
          "Delivered a transparent disaster relief platform with verified role workflows and immutable audit trails, featured in a research publication on IEEE Xplore.",
      },
    },
    {
      id: "shophub-ecommerce",
      number: "02",
      title: "ShopHub — Full-Stack E-Commerce Platform",
      tagline:
        "Full-stack e-commerce platform with Django REST API, React/TypeScript frontend, and 300 Django tests.",
      badge: "Django REST Framework • 300 Django Tests",
      description:
        "Developed a full-stack e-commerce platform with a Django REST API and a responsive React/TypeScript frontend, supporting customer shopping and role-based admin workflows.",
      technologies: [
        "Python",
        "Django",
        "Django REST Framework",
        "React",
        "TypeScript",
        "PostgreSQL",
        "JWT",
      ],
      metrics: [
        { label: "Django Tests", value: "300 Passing" },
        { label: "Frontend Tests", value: "24 Passing" },
        { label: "Build Verification", value: "Production Build Verified" },
      ],
      modules: [
        "Customer Shopping Workflows",
        "Role-Based Admin Workflows",
        "JWT Authentication",
        "Role-Based Authorization",
        "Product Catalog",
        "Search & Filtering",
        "Cart & Wishlist",
        "Coupons & Checkout",
        "Orders & Notifications",
        "Product Management",
        "Inventory Management",
        "Shipment Management",
        "Reviews & Admin Dashboard",
      ],
      highlights: [
        "Customer shopping workflows: product catalog, search, filtering, cart, wishlist, coupons, checkout, and orders",
        "Role-based admin workflows: product management, inventory management, shipment management, reviews, and admin dashboard",
        "Implemented JWT authentication and role-based authorization",
        "Added automated testing across the stack, with 300 Django tests and 24 frontend tests passing and a verified production frontend build",
      ],
      githubUrl: "https://github.com/#shophub-ecommerce", // TODO: Replace with Pranav's actual ShopHub GitHub repository URL
      caseStudy: {
        context:
          "Full-stack e-commerce systems require reliable customer shopping experiences alongside comprehensive role-based administrative control over inventory, orders, and shipments.",
        systemArchitecture:
          "Full-stack platform with a Django REST API backend and a responsive React/TypeScript frontend. PostgreSQL serves as the relational database for products, orders, inventory, and user data. Authentication and authorization are handled via JWT.",
        engineeringDecisions: [
          "Role-Based Workflows: Built dedicated customer shopping workflows and role-based admin workflows for product, inventory, and shipment management.",
          "Structured REST API: Developed Django REST Framework endpoints for catalog search, filtering, cart, wishlist, coupons, checkout, and orders.",
          "Automated Test Coverage: Added automated testing across the stack to ensure stability across both backend and frontend.",
        ],
        security: [
          "JWT authentication for secure user sessions.",
          "Role-based authorization separating customer and administrator capabilities.",
        ],
        dataStorage:
          "PostgreSQL database housing products, categories, inventory, orders, coupons, shipments, reviews, and notifications.",
        testValidation: {
          summary: "Comprehensive automated test suite covering backend and frontend functionality.",
          counts: [
            "300 Django tests passing",
            "24 frontend tests passing",
            "Production frontend build verified",
          ],
        },
        outcome:
          "A production-ready e-commerce platform thoroughly verified with 300 Django tests and 24 frontend tests.",
      },
    },
    {
      id: "smart-civic-response",
      number: "03",
      title: "Smart Civic Response System",
      tagline:
        "Full-stack civic complaint management platform with Citizen, Authority, and Admin workflows using React.js and FastAPI.",
      badge: "FastAPI Backend • 38 Backend Tests",
      description:
        "Built a full-stack civic complaint management platform with Citizen, Authority, and Admin role-based workflows using React.js and FastAPI.",
      technologies: [
        "React.js",
        "FastAPI",
        "PostgreSQL",
        "Python",
        "JWT",
        "REST API",
      ],
      metrics: [
        { label: "Backend Tests", value: "38 Passing" },
        { label: "Frontend", value: "Lint/Build Validated" },
        { label: "Version Control", value: "Git-Based Management" },
      ],
      workflowSteps: [
        {
          step: "01. Complaint Creation",
          actor: "Citizen Workflow",
          desc: "Citizen submits complaint through authenticated REST APIs with complaint details and category.",
        },
        {
          step: "02. Authority Assignment",
          actor: "Automatic Assignment",
          desc: "System performs automatic authority assignment routing the complaint to the appropriate department.",
        },
        {
          step: "03. Status Tracking",
          actor: "Authority Workflow",
          desc: "Authority manages departmental queue and updates complaint status with resolution progress.",
        },
        {
          step: "04. History & Admin",
          actor: "Admin Workflow",
          desc: "Citizen views complaint history and status tracking while Admin oversees platform activity.",
        },
      ],
      highlights: [
        "Citizen workflow, Authority workflow, and Admin workflow with JWT authentication",
        "Complaint creation, automatic authority assignment, status tracking, filtering, and complaint history through REST APIs",
        "Developed and tested the application with 38 passing backend tests",
        "Frontend lint/build validation and integrated Git-based project management",
      ],
      githubUrl: "https://github.com/#smart-civic-response", // TODO: Replace with Pranav's actual Smart Civic Response GitHub repository URL
      caseStudy: {
        context:
          "Civic complaints often suffer from manual triage delays, unassigned grievances, and lack of status tracking for citizens.",
        systemArchitecture:
          "Full-stack complaint management platform with Citizen, Authority, and Admin workflows using React.js on the frontend and FastAPI on the backend. PostgreSQL is utilized as the database, connected through REST APIs with JWT authentication.",
        engineeringDecisions: [
          "Three Role-Based Workflows: Built Citizen workflow, Authority workflow, and Admin workflow with JWT authentication.",
          "Automatic Authority Assignment: Implemented automatic authority assignment to route complaints directly to relevant authorities.",
          "REST API Design: Built endpoints for complaint creation, status tracking, filtering, and complaint history.",
        ],
        security: [
          "JWT authentication securing Citizen, Authority, and Admin workflows.",
          "Role-based access control protecting administrative and authority functions.",
        ],
        dataStorage:
          "PostgreSQL database storing user accounts, complaints, authority assignments, and complaint history.",
        testValidation: {
          summary: "Developed and tested the application with automated backend test coverage.",
          counts: [
            "38 passing backend tests",
            "Frontend lint and build validation verified",
            "Git-based project management",
          ],
        },
        outcome:
          "A functional civic response platform with automatic authority assignment and 38 passing backend tests.",
      },
    },
  ] as Project[],

  // Education - Strictly from resume
  education: [
    {
      period: "Sep 2022 – Jun 2026",
      degree: "Bachelor of Engineering (B.E.) — Computer Engineering",
      institution: "Keystone School of Engineering, Pune",
      score: "CGPA: 7.6",
      isPrimary: true,
      description:
        "Computer Engineering program covering Object-Oriented Programming, Data Structures & Algorithms, DBMS, Operating Systems (Basic), and Computer Networks (Basic). Final Year Project: Hybrid On-Chain & Off-Chain Disaster Relief Management System (IEEE Xplore publication mention).",
      highlights: [
        "Core focus on Python, REST APIs, and Database Management Systems",
        "Final Year Project: Hybrid On-Chain & Off-Chain Disaster Relief Management System (IEEE Xplore)",
      ],
    },
    {
      period: "Mar 2022",
      degree: "XII (HSC)",
      institution: "R.R. Shinde Jr. College, Pune",
      score: "62%",
      isPrimary: false,
      description: "Higher Secondary Certificate examination.",
    },
    {
      period: "Mar 2020",
      degree: "X (SSC)",
      institution: "Adarsh High School, Pune",
      score: "89%",
      isPrimary: false,
      description: "Secondary School Certificate examination.",
    },
  ],

  // Certifications - Strictly from resume
  certifications: [
    {
      title: "Database Management Systems",
      issuer: "NPTEL",
      date: "Jul 2024",
      description:
        "Certification in Database Management Systems (DBMS) covering relational data concepts, SQL queries, and database fundamentals.",
      tag: "DBMS & SQL",
    },
    {
      title: "HTML, CSS & JavaScript",
      issuer: "Simplilearn",
      date: "Feb 2024",
      description:
        "Foundational web technologies covering HTML, CSS, and JavaScript fundamentals.",
      tag: "Web Basics",
    },
  ],

  // Training & Seminars - Strictly from resume
  training: [
    {
      title: "National-Level Short-Term Training Program",
      focus: "Java Full Stack Development",
      year: "2024",
      description:
        "National-Level Short-Term Training Program — Java Full Stack Development (2024): Exposure to full-stack development concepts, including frontend basics with React.js and backend fundamentals with Java.",
      skills: ["Full-Stack Concepts", "React.js Basics", "Java Backend Fundamentals"],
    },
  ],
};
