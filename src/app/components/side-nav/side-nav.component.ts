import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import * as fromApp from "../../store/app.reducer";
import * as AuthActions from "../../auth/store/actions/auth.actions";
import {Observable} from "rxjs";
import {DentistModel} from "../../model/dentist.model";
import {getAuthData} from "../../auth/store/selectors/auth.selector";
import {Router} from "@angular/router";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  constructor(private store: Store<fromApp.AppState>,
              private router: Router) {
  }

  userData$!: Observable<DentistModel>;

  isExpanded: boolean = false;
  ngOnInit(): void {
    this.userData$ = this.store.select(getAuthData);
  }

  logout() {
    this.store.dispatch(new AuthActions.Logout);
    this.router.navigate(['login']).then(r => {});
  }

}
