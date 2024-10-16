import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearsExperienceComponent } from './years-experience.component';

describe('YearsExperienceComponent', () => {
  let component: YearsExperienceComponent;
  let fixture: ComponentFixture<YearsExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YearsExperienceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YearsExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
