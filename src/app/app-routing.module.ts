import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ROUTE_PATHS} from './routing/top-routes';
import {AuthPageComponent} from "./auth/auth-page/auth-page.component";
import {HomePageComponent} from "./home/home-page/home-page.component";
import {HomeComponent} from "./home/home.component";
import {
  AuthForgottenPasswordPageComponent
} from "./auth/auth-forgotten-password-page/auth-forgotten-password-page.component";
import {AdministrationComponent} from "./administration/administration.component";
import {AdministrationPageComponent} from "./administration/administration-page/administration-page.component";
import {ReferencesComponent} from "./references/references.component";
import {ReferencesPageComponent} from "./references/references-page/references-page.component";
import {OutpatientListsPageComponent} from "./outpatient-lists/outpatient-lists-page/outpatient-lists-page.component";
import {OutpatientListsComponent} from "./outpatient-lists/outpatient-lists.component";

const routes: Routes = [
  {
    path: '',
    component: AuthPageComponent
  },
  {
    path: ROUTE_PATHS.login,
    component: AuthPageComponent
  },
  {
    path: '',
    component: HomeComponent,
    children: [{
      path: ROUTE_PATHS.home,
      component: HomePageComponent,
      title: 'Начало'
    }]
  },
  {
    path: '',
    component: AdministrationComponent,
    children: [{
      path: ROUTE_PATHS.administration,
      component: AdministrationPageComponent,
      title: 'Администриране'
    }]
  },
  {
    path: '',
    component: ReferencesComponent,
    children: [{
      path: ROUTE_PATHS.references,
      component: ReferencesPageComponent,
      title: 'Справки'
    }]
  },
  {
    path: '',
    component: OutpatientListsComponent,
    children: [{
      path: ROUTE_PATHS.outpatient_lists,
      component: OutpatientListsPageComponent,
      title: 'Амбулаторни листове'
    }]
  },

  {
    path: ROUTE_PATHS.forgotten_password,
    component: AuthForgottenPasswordPageComponent,
    title: 'Забравена парола'
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
