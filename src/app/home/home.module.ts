import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import {RouterOutlet} from "@angular/router";
import { HomeComponent } from './home.component';
import {ComponentsModule} from "../components/components.module";
import {MaterialModule} from "../material.module";



@NgModule({
  declarations: [
    HomePageComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    ComponentsModule,
    MaterialModule,
  ]
})
export class HomeModule { }
