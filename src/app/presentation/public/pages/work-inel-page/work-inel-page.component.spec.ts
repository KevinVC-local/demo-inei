import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkInelPageComponent } from './work-inel-page.component';

describe('WorkInelPageComponent', () => {
  let component: WorkInelPageComponent;
  let fixture: ComponentFixture<WorkInelPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkInelPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkInelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
