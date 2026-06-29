export type ProjectQuadrant = 'data' | 'software' | 'devops' | 'hardware';

export type ProjectFilter = 'all' | ProjectQuadrant;

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  quadrant: ProjectQuadrant;
  techStack: string[];
  features: string[];
  gitLink?: string;
}