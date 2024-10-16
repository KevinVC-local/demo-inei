import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterNumberComponent } from './counter-number.component';

describe('CounterNumberComponent', () => {
  let component: CounterNumberComponent;
  let fixture: ComponentFixture<CounterNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterNumberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
