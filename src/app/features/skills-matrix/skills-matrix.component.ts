import { Component, computed, signal } from '@angular/core';

type SkillGroupId = 'hardware' | 'software' | 'data' | 'devops';

interface SkillGroup {
  id: SkillGroupId;
  label: string;
  title: string;
  description: string;
  skills: string[];
}

@Component({
  selector: 'app-skills-matrix',
  imports: [],
  templateUrl: './skills-matrix.component.html',
  styleUrl: './skills-matrix.component.scss',
})
export class SkillsMatrixComponent {
  protected readonly skillGroups: SkillGroup[] = [
    {
      id: 'hardware',
      label: '01',
      title: 'Hardware',
      description:
        "Comprendre les signaux, les capteurs et les contraintes physiques d'un système.",
      skills: ['Instrumentation', 'Électronique', 'LabVIEW', 'C/C++'],
    },
    {
      id: 'software',
      label: '02',
      title: 'Software',
      description:
        'Concevoir des applications structurées, lisibles et maintenables.',
      skills: ['C#', 'Java', 'Architecture logicielle', 'Angular'],
    },
    {
      id: 'data',
      label: '03',
      title: 'Data',
      description:
        'Transformer des données brutes en information exploitable pour la décision.',
      skills: ['Python', 'SQL', 'MongoDB', 'Jupyter Labs'],
    },
    {
      id: 'devops',
      label: '04',
      title: 'DevOps',
      description:
        "Automatiser la livraison, l'environnement et les outils autour du développement.",
      skills: ['Git', 'Docker', 'GitLab CI/CD', 'Automatisation'],
    },
  ];

  protected readonly selectedGroupId = signal<SkillGroupId>('hardware');

  protected readonly selectedGroup = computed(() =>
    this.skillGroups.find((group) => group.id === this.selectedGroupId()),
  );

  protected selectGroup(groupId: SkillGroupId): void {
    this.selectedGroupId.set(groupId);
  }
}