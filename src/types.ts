export interface Project {
  title: string;
  description: string;
  extendedDescription: string;
  metrics: {
    label: string;
    value: string;
  }[];
  techStack: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}
