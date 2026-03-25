import { Project, Skill, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    title: "InteraCalc – Interest Calculator Web Application",
    description: "A full-stack financial ecosystem engineered to manage complex lending and borrowing transactions with automated interest logic.",
    extendedDescription: "Built with React.js, Next.js, and Node.js, InteraCalc automates simple and compound interest calculations, including partial payments and tenure extensions. It features secure JWT-based authentication, cron-based payment reminders, and generates exportable financial reports. The system reduced manual tracking effort by ~40% and improved calculation accuracy by ~35%.",
    metrics: [
      { label: "Calculation Accuracy", value: "+35%" },
      { label: "Manual Effort Reduction", value: "40%" }
    ],
    techStack: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "AWS S3", "Firebase", "JWT"]
  },
  {
    title: "Smart Home Energy Analytics & Automation Simulator",
    description: "A software-based simulator designed to analyze residential energy usage patterns and identify waste windows without physical sensors.",
    extendedDescription: "Developed using Python, Pandas, and Matplotlib, this simulator implements context-aware logic to identify energy waste during unoccupied periods. It achieved a potential 15–20% reduction in energy costs and improved analytics visibility by ~30% through detailed and intuitive data visualizations.",
    metrics: [
      { label: "Cost Reduction", value: "15-20%" },
      { label: "Analytics Visibility", value: "~30%" }
    ],
    techStack: ["Python", "Pandas", "Matplotlib", "Seaborn"]
  },
  {
    title: "Fetal Health Classification Using Gradient Boosting Models",
    description: "A clinical-grade ML pipeline classifying fetal health from cardiotocography (CTG) data using state-of-the-art gradient boosting.",
    extendedDescription: "This project utilizes XGBoost, LightGBM, and CatBoost to classify fetal health states. By applying SMOTE to address data imbalance, it improved the detection of pathological cases by ~25%, achieving an overall accuracy of approximately 96% with XGBoost. The system features modular, reproducible ML pipelines with documented assumptions.",
    metrics: [
      { label: "XGBoost Accuracy", value: "96%" },
      { label: "Detection Improvement", value: "~25%" }
    ],
    techStack: ["Python", "Scikit-learn", "XGBoost", "LightGBM", "CatBoost", "SMOTE"]
  }
];

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/share/1CVyHJQD71/",
  instagram: "https://www.instagram.com/i._.charan?igsh=MWYwZW56M3U2eHNmNA==",
  linkedin: "https://www.linkedin.com/in/sri-charan-l-r-g-a5938031a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  email: "mailto:sricharanlrg@gmail.com"
};

export const SKILLS: Skill[] = [
  {
    category: "Programming",
    items: ["Python", "Java", "C++", "JavaScript"]
  },
  {
    category: "Frameworks",
    items: ["React.js", "Next.js", "Streamlit", "Express.js"]
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"]
  },
  {
    category: "Tools & Cloud",
    items: ["Git", "GitHub", "Docker", "AWS EC2 & S3", "Firebase"]
  },
  {
    category: "Core Concepts",
    items: ["DSA", "OOP", "RESTful APIs", "DBMS", "SDLC"]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Web Developer Intern",
    company: "Unlox",
    period: "August 2025 – October 2025",
    highlights: [
      "Developed responsive web interfaces using React.js and JavaScript, reducing UI development effort by ~30%.",
      "Integrated frontend components with RESTful backend services using Node.js and Express.js.",
      "Collaborated using Git and GitHub for version control and code reviews.",
      "Resolved UI defects and optimized rendering performance, improving usability by ~25%."
    ]
  }
];

export const EDUCATION = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    major: "Computer Science and Engineering (Core)",
    institution: "VIT-AP University, Amaravati, Andhra Pradesh",
    period: "Year of Completion: 2027",
    score: "CGPA: 7.0/10"
  }
];

export const CERTIFICATIONS = [
  "NPTEL – Introduction to Industrial IoT 4.0",
  "NPTEL – Affective Computing"
];
