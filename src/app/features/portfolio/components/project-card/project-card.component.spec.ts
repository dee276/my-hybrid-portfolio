import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Project } from '../../../../core/models/project.model';
import { ProjectCardComponent } from './project-card.component';

describe('ProjectCardComponent', () => {
  let component: ProjectCardComponent;
  let fixture: ComponentFixture<ProjectCardComponent>;
  const project: Project = {
    id: 'test-project',
    title: 'Test Project',
    subtitle: 'Testing',
    description: 'A project used by the component spec.',
    quadrant: 'software',
    techStack: ['Angular', 'TypeScript'],
    features: ['Required input coverage'],
    gitLink: 'https://github.com/example/test-project',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCardComponent],
      providers: [provideZonelessChangeDetection()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectCardComponent);
    fixture.componentRef.setInput('project', project);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
