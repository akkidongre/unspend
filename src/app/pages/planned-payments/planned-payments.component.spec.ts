import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannedPaymentsComponent } from './planned-payments.component';

describe('PlannedPaymentsComponent', () => {
  let component: PlannedPaymentsComponent;
  let fixture: ComponentFixture<PlannedPaymentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PlannedPaymentsComponent]
    });
    fixture = TestBed.createComponent(PlannedPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
