import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsMatrixComponent } from './skills-matrix.component';

describe('SkillsMatrixComponent', () => {
  let component: SkillsMatrixComponent;
  let fixture: ComponentFixture<SkillsMatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsMatrixComponent],
      providers: [provideZonelessChangeDetection()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update the selected skill group when a matrix button is clicked', () => {
  const compiled = fixture.nativeElement as HTMLElement;
  const buttons = compiled.querySelectorAll('button');

  expect(buttons.length).toBe(4);

  const dataButton = Array.from(buttons).find((button) =>
    button.textContent?.includes('Data'),
  );

  dataButton?.click();
  fixture.detectChanges();

  expect(compiled.querySelector('.details h2')?.textContent).toContain('Data');
  });

});
