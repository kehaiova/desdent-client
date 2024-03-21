import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutpationListDetailsComponent } from './outpation-list-details.component';

describe('OutpationListDetailsComponent', () => {
  let component: OutpationListDetailsComponent;
  let fixture: ComponentFixture<OutpationListDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutpationListDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutpationListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
