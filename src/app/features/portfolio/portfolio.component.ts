import { Component, inject } from '@angular/core';

import { ProjectFilter } from '../../core/models/project.model';
import { ProjectService } from '../../core/services/project.service';
import { ProjectCardComponent } from './components/project-card/project-card.component';

@Component({
  selector: 'app-portfolio',
  imports: [ProjectCardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  protected readonly projectService = inject(ProjectService);

  protected readonly filters: { label: string; value: ProjectFilter }[] = [
    { label: 'Tous', value: 'all' },
    { label: 'Data', value: 'data' },
    { label: 'Software', value: 'software' },
    { label: 'DevOps', value: 'devops' },
    { label: 'Hardware', value: 'hardware' },
  ];
}