import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import * as fromApp from "../../store/app.reducer";
import * as fromForgottenPassword from "../../auth/store/actions/forgotten-password.actions"
@Component({
  selector: 'app-forgotten-password',
  templateUrl: './forgotten-password.component.html',
  styleUrls: ['./forgotten-password.component.css']
})
export class ForgottenPasswordComponent implements OnInit {

  constructor(private store: Store<fromApp.AppState>) { }

  email: string = ''

  ngOnInit(): void {
  }

  sendEmail(email: string) {
    this.store.dispatch(new fromForgottenPassword.ForgottenPassword({email}));
  }

}
