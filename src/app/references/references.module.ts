import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReferencesPageComponent } from './references-page/references-page.component';
import { ReferencesComponent } from './references.component';
import {ComponentsModule} from "../components/components.module";
import {MaterialModule} from "../material.module";



@NgModule({
  declarations: [
    ReferencesPageComponent,
    ReferencesComponent
  ],
    imports: [
        CommonModule,
        ComponentsModule,
        MaterialModule
    ]
})
export class ReferencesModule { }
