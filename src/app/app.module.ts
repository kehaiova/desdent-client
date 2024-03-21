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
import {StoreModule} from "@ngrx/store";
import * as fromApp from './store/app.reducer'
import {AuthEffects} from "./auth/store/effects/auth.effects";
import {EffectsModule} from "@ngrx/effects";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment";
import {CustomInterceptor} from "./configuration/CustomInterceptor";
import {ScheduleEffects} from "./home/store/effects/schedule.effects";
import {DatePipe, registerLocaleData} from "@angular/common";
import localeBg from '@angular/common/locales/bg';
import {ForgottenPasswordEffects} from "./auth/store/effects/forgotten-password.effects";
registerLocaleData(localeBg);
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AuthModule,
    ComponentsModule,
    HomeModule,
    ReferencesModule,
    AdministrationModule,
    OutpatientListsModule,
    StoreModule.forRoot(fromApp.reducers),
    StoreModule.forFeature("user", fromApp.reducers.auth),
    EffectsModule.forRoot([
      AuthEffects,
      ScheduleEffects,
      ForgottenPasswordEffects
    ]),
    StoreDevtoolsModule.instrument({logOnly: environment.production}),
  ],
  providers: [
    DatePipe,
    {provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor, multi: true},
    {provide: DateAdapter, useClass: CustomDateAdapter},
    {provide: LOCALE_ID, useValue: 'bg-BG'},
    {provide: MatPaginatorIntl, useClass: MatPaginatorIntlBg},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
