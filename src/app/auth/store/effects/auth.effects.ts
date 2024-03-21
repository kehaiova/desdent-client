import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType, ROOT_EFFECTS_INIT} from "@ngrx/effects";
import * as AuthActions from "../actions/auth.actions"
import {catchError, map, of, switchMap, tap} from "rxjs";
import {DentistModel} from "../../../model/dentist.model";
import {AuthService} from "../../../services/auth.service";

export interface AuthResponseData {
  id: number,
  username: string,
  email: string,
  firstName: string,
  lastName: string,
  phoneNum: string,
  roleName: string,
  address: string,
}

const handleAuthentication = (
  id: number,
  username: string,
  email: string,
  firstName: string,
  lastName: string,
  phoneNum: string,
  roleName: string,
  address: string,
) => {
  const user = {id, username, email, firstName, lastName, phoneNum, roleName, address};
  localStorage.setItem('userData', JSON.stringify(user));
  return new AuthActions.AuthenticateSuccess({
    id: id,
    username: username,
    email: email,
    firstName: firstName,
    lastName: lastName,
    phoneNum: phoneNum,
    roleName: roleName,
    address: address,
  });
};

const handleError = (errorRes: any) => {
  let errorMessage = 'Възникна грешка';
  if (!errorRes.error || !errorRes.error.error) {
    return of(new AuthActions.AuthenticateFail(errorMessage));
  }
  switch (errorRes.error.error.message) {
    case 'EMAIL_NOT_FOUND':
      errorMessage = 'Имейлът не съществува!';
      break;
    case 'USERNAME_NOT_FOUND':
      errorMessage = 'Грешно потребителско име!';
      break;
    case 'INVALID_PASSWORD':
      errorMessage = 'Грешна парола!';
      break;
  }
  return of(new AuthActions.AuthenticateFail(errorMessage));
};

@Injectable()
export class AuthEffects {
  authLogin = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.LOGIN_START),
    switchMap((authData: AuthActions.LoginStart) => {
      return this.authService._login(authData.payload.username, authData.payload.password)
    }),
    map(resData => {
      return handleAuthentication(
        resData.id,
        resData.username,
        resData.email,
        resData.firstName,
        resData.lastName,
        resData.phoneNum,
        resData.roleName,
        resData.address,

      );
    }),
    catchError(err => {
      return handleError(err);
    })));

  authLogout = createEffect(() => this.actions$.pipe(
      ofType(AuthActions.LOGOUT),
      tap(() => {
        return this.authService._logout();
      }),
      catchError(err => {
        return handleError(err);
      })),
    {dispatch: false});

  authRedirect = createEffect(() => this.actions$.pipe(
      ofType(AuthActions.AUTHENTICATE_SUCCESS),
      tap(() => {
        this.authService._redirect();
      }),
      catchError(err => {
        return handleError(err);
      })),
    {dispatch: false}
  );

  authGetLocalStorageData = createEffect(() => this.actions$.pipe(
    ofType(ROOT_EFFECTS_INIT),
    map(() => {
      let data = localStorage.getItem('userData');
      if (data) {
        let dentist: DentistModel = JSON.parse(data);
        return new AuthActions.AuthenticateSuccess(dentist);
      }
      return new AuthActions.AuthenticateFail("Error");
    })
  ))

  constructor(
    private actions$: Actions,
    private authService: AuthService,
  ) {
  }
}
