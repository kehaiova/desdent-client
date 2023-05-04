import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferencesTableComponent } from './references-table.component';

describe('ReferencesTableComponent', () => {
  let component: ReferencesTableComponent;
  let fixture: ComponentFixture<ReferencesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferencesTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferencesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
