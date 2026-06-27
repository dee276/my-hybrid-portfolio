export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  quadrant: 'data' | 'software' | 'devops' | 'hardware';
  techStack: string[];
  features: string[];
  gitLink?: string;
}
