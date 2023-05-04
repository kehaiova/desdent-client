import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthPageComponent} from './auth-page/auth-page.component';
import {MaterialModule} from "../material.module";
import {ComponentsModule} from "../components/components.module";
import {RouterOutlet} from "@angular/router";
import {
  AuthForgottenPasswordPageComponent
} from './auth-forgotten-password-page/auth-forgotten-password-page.component';


@NgModule({
  declarations: [
    AuthPageComponent,
    AuthForgottenPasswordPageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ComponentsModule,
    RouterOutlet
  ]
})
export class AuthModule {
}
