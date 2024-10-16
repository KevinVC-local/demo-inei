import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCircleComponent } from './contact-circle.component';

describe('ContactCircleComponent', () => {
  let component: ContactCircleComponent;
  let fixture: ComponentFixture<ContactCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactCircleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
