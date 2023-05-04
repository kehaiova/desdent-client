import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutpatientListsPageComponent } from './outpatient-lists-page.component';

describe('OutpatientListsPageComponent', () => {
  let component: OutpatientListsPageComponent;
  let fixture: ComponentFixture<OutpatientListsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutpatientListsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutpatientListsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
