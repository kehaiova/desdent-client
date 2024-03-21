import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import * as fromApp from '../../store/app.reducer';
import * as AuthActions from "../../auth/store/actions/auth.actions";
@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {

  constructor(private store: Store<fromApp.AppState>) {
  }

  userData = {
    username: '',
    password: '',
  }

  ngOnInit(): void {
  }

  login(username: string, password: string) {
    this.store.dispatch(
      new AuthActions.LoginStart({username,password}));
  }

}
