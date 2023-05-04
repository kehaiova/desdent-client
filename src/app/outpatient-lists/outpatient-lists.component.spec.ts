import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutpatientListsComponent } from './outpatient-lists.component';

describe('OutpatientListsComponent', () => {
  let component: OutpatientListsComponent;
  let fixture: ComponentFixture<OutpatientListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutpatientListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutpatientListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
