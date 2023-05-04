import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {AuthModule} from "./auth/auth.module";
import {ComponentsModule} from "./components/components.module";
import {HomeModule} from "./home/home.module";
import {ReferencesModule} from './references/references.module';
import {AdministrationModule} from './administration/administration.module';
import {OutpatientListsModule} from './outpatient-lists/outpatient-lists.module';
import {DateAdapter} from "@angular/material/core";
import {CustomDateAdapter} from "./configuration/CustomDateAdapter";
import {MatPaginatorIntl} from "@angular/material/paginator";
import {MatPaginatorIntlBg} from "./configuration/MatPaginatorIntl";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AuthModule,
    ComponentsModule,
    HomeModule,
    ReferencesModule,
    AdministrationModule,
    OutpatientListsModule
  ],
  providers: [
    {provide: DateAdapter, useClass: CustomDateAdapter},
    {provide: LOCALE_ID, useValue: 'bg-BG'},
    {provide: MatPaginatorIntl, useClass: MatPaginatorIntlBg},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
