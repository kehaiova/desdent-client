import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationPageComponent } from './administration-page/administration-page.component';
import { AdministrationComponent } from './administration.component';
import {ComponentsModule} from "../components/components.module";
import {MaterialModule} from "../material.module";



@NgModule({
  declarations: [
    AdministrationPageComponent,
    AdministrationComponent
  ],
    imports: [
        CommonModule,
        ComponentsModule,
        MaterialModule
    ]
})
export class AdministrationModule { }
