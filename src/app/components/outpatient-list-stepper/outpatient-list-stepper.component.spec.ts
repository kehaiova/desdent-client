import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutpatientListStepperComponent } from './outpatient-list-stepper.component';

describe('OutpatientListStepperComponent', () => {
  let component: OutpatientListStepperComponent;
  let fixture: ComponentFixture<OutpatientListStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutpatientListStepperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutpatientListStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
