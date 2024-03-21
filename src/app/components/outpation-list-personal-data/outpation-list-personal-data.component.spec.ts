import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutpationListPersonalDataComponent } from './outpation-list-personal-data.component';

describe('OutpationListPersonalDataComponent', () => {
  let component: OutpationListPersonalDataComponent;
  let fixture: ComponentFixture<OutpationListPersonalDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutpationListPersonalDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutpationListPersonalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
