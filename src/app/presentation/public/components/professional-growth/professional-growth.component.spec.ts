import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalGrowthComponent } from './professional-growth.component';

describe('ProfessionalGrowthComponent', () => {
  let component: ProfessionalGrowthComponent;
  let fixture: ComponentFixture<ProfessionalGrowthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessionalGrowthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalGrowthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
