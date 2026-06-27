// src/app/core/services/project.service.ts
import { Injectable, signal, computed } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  // 1. État source (privé) : La liste brute de tes projets phares
  private projectsList = signal<Project[]>([
    {
      id: 'smart-factory-iot',
      title: 'SmartFactory IoT Gateway',
      subtitle: 'IoT & Data Pipeline',
      description: 'Collecte et traitement de signaux physiques simulés en temps réel avec aiguillage vers un stockage NoSQL.',
      quadrant: 'hardware',
      techStack: ['C++', 'Python', 'MongoDB', 'LabVIEW Logic'],
      features: [
        'Acquisition et simulation de signaux physiques (C++)',
        'Pipeline ETL de nettoyage et structuration (Python)',
        'Stockage flexible et persistance des données (MongoDB)'
      ],
      gitLink: 'https://github.com/DudleyOrestil/smart-factory-iot'
    },
    {
      id: 'lxtapp-architecture',
      title: 'LXTApp Architecture Engine',
      subtitle: 'Logiciel Pur & DevOps Costaud',
      description: 'Application métier robuste, hautement disponible, conteneurisée et déployée via des automatisations rigoureuses.',
      quadrant: 'software',
      techStack: ['C#', 'SQL', 'Docker', 'GitLab CI/CD'],
      features: [
        'Architecture logicielle multiniveaux (C#)',
        'Gestion et requêtage de base de données relationnelle (SQL)',
        'Conteneurisation d\'environnement et pipeline d\'automatisation (.gitlab-ci.yml)'
      ],
      gitLink: 'https://github.com/DudleyOrestil/lxtapp-engine'
    },
    {
      id: 'market-intelligence-scraper',
      title: 'Market Intelligence Automated Scraper',
      subtitle: 'Data Engineering & IA',
      description: 'Extraction automatisée de données du web à grande échelle combinée à de l\'analyse intelligente par modèle de langage.',
      quadrant: 'data',
      techStack: ['Python', 'Jupyter Labs', 'GenAI API', 'SQL'],
      features: [
        'Scripts de web scraping automatisés et robustes (Python)',
        'Exploration et feature engineering sous Jupyter Labs',
        'Intégration d\'API d\'IA générative pour le tri et la classification automatique'
      ],
      gitLink: 'https://github.com/DudleyOrestil/market-scraper'
    }
  ]);

  // 2. État du filtre (public) : 'all' ou un quadrant spécifique ('data', 'software', etc.)
  public selectedFilter = signal<string>('all');

  // 3. État dérivé (synchrone et ultra-performant) : Projets filtrés automatiquement
  // En mode Zoneless, ce 'computed' recalculera la liste dès que 'selectedFilter' changera.
  public filteredProjects = computed(() => {
    const filter = this.selectedFilter();
    const allProjects = this.projectsList();

    if (filter === 'all') {
      return allProjects;
    }

    return allProjects.filter(project => project.quadrant === filter);
  });

  constructor() {}

  /**
   * Met à jour le filtre actif
   * @param filter Le nom du quadrant ou 'all'
   */
  public updateFilter(filter: string): void {
    this.selectedFilter.set(filter);
  }
}
