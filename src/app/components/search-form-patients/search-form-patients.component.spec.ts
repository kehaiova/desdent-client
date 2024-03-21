import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFormPatientsComponent } from './search-form-patients.component';

describe('SearchFormPatientsComponent', () => {
  let component: SearchFormPatientsComponent;
  let fixture: ComponentFixture<SearchFormPatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFormPatientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchFormPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
