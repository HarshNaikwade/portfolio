export interface PortfolioData {
  name: string;
  title: string;
  location: string;
  email: string;
  // phone: string;
  bio: string;
  about: string[];
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
  certifications: Certification[];
  education: Education[];
  socialLinks: SocialLink[];
}

export interface Skill {
  name: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  detailedDescription?: string;
  skills: string[];
  image?: string;
  link?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  previewLink?: string;
  externalLink?: string;
}

export interface Education {
  degree: string;
  major: string;
  institution: string;
  location: string;
  period: string;
  gpa: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

const portfolioData: PortfolioData = {
  name: "Harsh Naikwade",
  title: "Software Engineer & QA Test Engineer",
  location: "Pune, India",
  email: "harshnaikwade.work@gmail.com",
  // phone: "+91 (Your phone number here)",
  bio: "Software Engineer with expertise in full-stack development, automation testing, and cybersecurity.",
  about: [
    "I am a skilled Software Engineer and QA Test Engineer with a passion for building scalable applications and optimizing testing frameworks.",
    "My technical expertise spans ReactJS, Python (Django, Flask), NodeJS, SQL, MongoDB, and cloud platforms (AWS, Azure).",
    "I thrive in collaborative environments where I can leverage my experience in automation testing, quality assurance, and software development to deliver high-quality, user-friendly applications.",
  ],
  skills: [
    // Frontend
    { name: "HTML", category: "Frontend", level: "Advanced" },
    { name: "CSS", category: "Frontend", level: "Advanced" },
    { name: "JavaScript", category: "Frontend", level: "Advanced" },
    { name: "ReactJS", category: "Frontend", level: "Advanced" },

    // Backend
    { name: "Python", category: "Backend", level: "Advanced" },
    { name: "Django", category: "Backend", level: "Intermediate" },
    { name: "Flask", category: "Backend", level: "Intermediate" },
    { name: "NodeJS", category: "Backend", level: "Intermediate" },
    { name: "RESTful APIs", category: "Backend", level: "Advanced" },

    // Databases
    { name: "MySQL", category: "Database", level: "Advanced" },
    { name: "MongoDB", category: "Database", level: "Intermediate" },

    // Cloud & DevOps
    { name: "AWS", category: "Cloud & DevOps", level: "Intermediate" },
    { name: "Azure", category: "Cloud & DevOps", level: "Intermediate" },
    { name: "Docker", category: "Cloud & DevOps", level: "Intermediate" },
    { name: "CI/CD", category: "Cloud & DevOps", level: "Intermediate" },
    { name: "Git", category: "Cloud & DevOps", level: "Advanced" },
    {
      name: "Shell Scripting",
      category: "Cloud & DevOps",
      level: "Intermediate",
    },

    // Testing & Automation
    { name: "Jira", category: "Testing", level: "Beginner" },
    {
      name: "Jenkins",
      category: "Testing",
      level: "Intermediate",
    },
    { name: "Confluence", category: "Testing", level: "Advanced" },
    { name: "TestRail", category: "Testing", level: "Advanced" },
    {
      name: "API Testing",
      category: "Testing",
      level: "Advanced",
    },
  ],
  experience: [
    {
      title: "Test Engineer",
      company: "GlobalStep",
      location: "Pune, India",
      period: "Apr 2024 - Present",
      description: [
        "Developed and implemented automated testing frameworks, increasing test coverage by 30% and reducing manual testing time by 40%.",
        "Led QA processes for multiple projects, ensuring adherence to quality standards and timely releases.",
        "Identified and resolved critical system defects, improving system stability by 25% and enhancing user experience.",
        "Collaborated with cross-functional teams to optimize testing methodologies and implement best practices.",
      ],
      skills: [
        "Automation Testing",
        "QA Processes",
        "Defect Management",
        "Cross-functional Collaboration",
      ],
    },
    {
      title: "Data Analysis Intern",
      company: "Sanyukt Electrosolar & IT Solutions",
      location: "Pune, India",
      period: "May 2023 - Jul 2023",
      description: [
        "Analyzed large datasets to identify trends and patterns that informed business strategies.",
        "Developed data visualization tools that improved data interpretation and decision-making.",
        "Collaborated with the IT team to optimize data management systems and processes.",
      ],
      skills: ["Data Analysis", "Data Visualization", "System Optimization"],
    },
    {
      title: "Software Development Intern",
      company: "Kwiqreply.io",
      location: "Pune, India",
      period: "Feb 2023 - May 2023",
      description: [
        "Contributed to the development of customer engagement features, boosting user interaction by 35%.",
        "Assisted in system performance optimization, reducing page load times by 25%.",
        "Collaborated with senior developers to implement new features and fix bugs.",
      ],
      skills: [
        "Software Development",
        "Performance Optimization",
        "Feature Implementation",
      ],
    },
  ],
  projects: [
    {
      title: "JobSailor – Job Application Tracker",
      description:
        "Developed a web application to streamline job application processes.",
      detailedDescription:
        "This application allows users to track job applications, manage resumes, and receive notifications for new job postings. It integrates with various job boards and provides a user-friendly interface for managing applications.",
      skills: ["ReactJS", "NodeJS", "Firebase", "Vite", "TailwindCSS", "Git"],
      // image: "https://www.site-shot.com/3iatmhTAEfC5qwJCrBEAAw",
      link: "https://github.com/HarshNaikwade/JobSailor",
    },
    {
      title: "PEACE – AI-Powered Counseling Platform",
      description:
        "Developed an AI-powered counseling platform that provides personalized mental health support.",
      detailedDescription:
        "This platform enhances backend infrastructure to handle increased user traffic and integrates AI/ML models for improved user experience. The system provides personalized mental health support through intelligent algorithms and intuitive interfaces, making mental health resources more accessible to users.",
      skills: ["Python", "Flask", "AI/ML", "MongoDB", "ReactJS"],
      // image:
      //   "https://media.licdn.com/dms/image/v2/C4D1FAQFQixVys418Iw/feedshare-document-cover-images_1280/feedshare-document-cover-images_1280/0/1673285882578?e=1744574400&v=beta&t=Q1lC_z-fX8tN2yYIOpqAbRrsQPUI1vPfWLpjakzSt6o",
      link: "https://github.com/HarshNaikwade/Peace",
    },
    {
      title: "Hope – Blood Donation Management System",
      description:
        "Created a blood donation management system that facilitates seamless connections between donors and recipients.",
      detailedDescription:
        "The system implements real-time availability tracking and automated matching algorithms to ensure quick and accurate matches between donors and recipients. Features include donor registration, blood type matching, appointment scheduling, and emergency request handling.",
      skills: ["NodeJS", "MongoDB", "Express", "ReactJS", "RESTful APIs"],
      link: "https://github.com/HarshNaikwade/Hope",
    },
    {
      title: "Bingo – AI Chatbot",
      description:
        "Designed and developed an AI chatbot that reduced customer query resolution time by 50%.",
      detailedDescription:
        "This intelligent chatbot system increased customer engagement by implementing natural language processing capabilities for improved user interactions. It can understand context, remember previous conversations, and provide accurate responses to a wide range of queries in multiple domains.",
      skills: [
        "Python",
        "Natural Language Processing",
        "AI/ML",
        "API Integration",
      ],
      link: "https://github.com/HarshNaikwade/Bingo_Chatbot",
    },
  ],
  certifications: [
    {
      name: "Cisco Certified Network Associate (CCNA)",
      issuer: "Cisco",
      date: "Mar 2024",
      previewLink: "",
      externalLink: "",
    },
    {
      name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      date: "Jun 2023",
      previewLink: "",
      externalLink:
        "https://learn.microsoft.com/api/credentials/share/en-us/HarshNaikwade/DF93DA5DA37F334B",
    },
    {
      name: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
      issuer: "Microsoft",
      date: "Jun 2023",
      previewLink: "",
      externalLink:
        "https://learn.microsoft.com/api/credentials/share/en-us/HarshNaikwade/288DF8C05D7DCBE6",
    },
    {
      name: "Ethical Hacking & Cybersecurity",
      issuer: "Udemy",
      date: "Feb 2023",
      previewLink:
        "https://udemy-certificate.s3.amazonaws.com/image/UC-df939389-bb4d-48f1-82a0-9275c73e9c5d.jpg?v=1676117388000",
      externalLink: "http://ude.my/UC-df939389-bb4d-48f1-82a0-9275c73e9c5d",
    },
    {
      name: "Learning REST APIs",
      issuer: "LinkedIn Learning",
      date: "Jan 2023",
      previewLink:
        "https://media.licdn.com/dms/image/v2/C4D1FAQFQixVys418Iw/feedshare-document-cover-images_1280/feedshare-document-cover-images_1280/0/1673285882578?e=1744754400&v=beta&t=Lms3uD-tNY24BqAMYPMQbZ5HB7gyfuvPVyEBFUxr_gQ",
      externalLink:
        "https://drive.google.com/file/d/1YHbVsupZInNNzKwQ9YoVstTu0VUnVNOY/view?usp=drivesdk",
    },
    {
      name: "Machine Learning with Python and AI",
      issuer: "Microsoft",
      date: "Oct 2021",
      previewLink: "",
      externalLink:
        "https://drive.google.com/file/d/1YHbVsupZInNNzKwQ9YoVstTu0VUnVNOY/view?usp=drivesdk",
    },
  ],
  education: [
    {
      degree: "Bachelor of Engineering (B.E)",
      major: "Computer Engineering",
      institution: "Savitribai Phule Pune University",
      location: "Pune, India",
      period: "2020 - 2024",
      gpa: "8.39 CGPA",
    },
    {
      degree: "Higher Secondary School Certificate (HSC)",
      major: "Science",
      institution: "Arihant College of Arts Commerce and Science",
      location: "Pune, India",
      period: "2020",
      gpa: "59.08%",
    },
    {
      degree: "Indian Certificate of Secondary Education (ICSE)",
      major: "Science",
      institution: "Goldcrest High",
      location: "Latur, India",
      period: "2018",
      gpa: "78.80%",
    },
  ],
  socialLinks: [], // Check the socialLinks array below for the actual links
};

portfolioData.socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/harshnaikwade/",
    icon: "linkedin",
  },
  {
    name: "GitHub",
    url: "https://github.com/harshnaikwade",
    icon: "github",
  },
  {
    name: "Email",
    url: `mailto:${portfolioData.email}`,
    icon: "mail",
  },
];

export default portfolioData;
