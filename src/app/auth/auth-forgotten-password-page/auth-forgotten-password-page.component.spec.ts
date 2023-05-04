import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthForgottenPasswordPageComponent } from './auth-forgotten-password-page.component';

describe('AuthForgottenPasswordPageComponent', () => {
  let component: AuthForgottenPasswordPageComponent;
  let fixture: ComponentFixture<AuthForgottenPasswordPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthForgottenPasswordPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthForgottenPasswordPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
