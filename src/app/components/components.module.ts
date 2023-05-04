import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthFormComponent} from './auth-form/auth-form.component';
import {MaterialModule} from "../material.module";
import {SideNavComponent} from './side-nav/side-nav.component';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {ForgottenPasswordComponent} from './forgotten-password/forgotten-password.component';
import {ReferencesFormComponent} from './references-form/references-form.component';
import {ReferencesTableComponent} from './references-table/references-table.component';
import {OutpatientListStepperComponent} from './outpatient-list-stepper/outpatient-list-stepper.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { PatientTableComponent } from './patient-table/patient-table.component';


@NgModule({
  declarations: [
    AuthFormComponent,
    SideNavComponent,
    ForgottenPasswordComponent,
    ReferencesFormComponent,
    ReferencesTableComponent,
    OutpatientListStepperComponent,
    ProfileCardComponent,
    EditProfileComponent,
    PatientTableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    BrowserAnimationsModule
  ],
  exports: [
    AuthFormComponent,
    SideNavComponent,
    ForgottenPasswordComponent,
    ReferencesFormComponent,
    ReferencesTableComponent,
    OutpatientListStepperComponent,
    ProfileCardComponent,
    EditProfileComponent,
    PatientTableComponent
  ],
})
export class ComponentsModule {
}
