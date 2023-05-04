import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutpatientListsPageComponent } from './outpatient-lists-page/outpatient-lists-page.component';
import { OutpatientListsComponent } from './outpatient-lists.component';
import {ComponentsModule} from "../components/components.module";
import {MaterialModule} from "../material.module";



@NgModule({
  declarations: [
    OutpatientListsPageComponent,
    OutpatientListsComponent
  ],
    imports: [
        CommonModule,
        ComponentsModule,
        MaterialModule
    ]
})
export class OutpatientListsModule { }
