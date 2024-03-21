import {Injectable} from "@angular/core";
import {AuthService} from "../../../services/auth.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as ForgottenPasswordActions from "../actions/forgotten-password.actions"
import {tap} from "rxjs";

@Injectable()
export class ForgottenPasswordEffects {
  constructor(private authService: AuthService,
              private actions$: Actions) {
  }

  forgottenPassword = createEffect(() => this.actions$.pipe(
    ofType(ForgottenPasswordActions.FORGOTTEN_PASSWORD),
    tap((authData: ForgottenPasswordActions.ForgottenPassword) => {
      console.log('in tap method')
      return this.authService._forgottenPassword(authData.payload.email);
    })), {dispatch: false});
}
