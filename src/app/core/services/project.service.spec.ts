import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { ProjectService } from './project.service';

describe('ProjectService', () => {
  let service: ProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()],
    });
    service = TestBed.inject(ProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all projects by default', () => {
    expect(service.filteredProjects().length).toBe(3);
  });

  it('should filter projects by quadrant', () => {
    service.updateFilter('data');

    expect(service.selectedFilter()).toBe('data');
    expect(service.filteredProjects().length).toBe(1);
    expect(service.filteredProjects()[0].quadrant).toBe('data');
  });

  it('should return an empty list when no project matches the filter', () => {
    service.updateFilter('devops');

    expect(service.selectedFilter()).toBe('devops');
    expect(service.filteredProjects()).toEqual([]);
  });
});
