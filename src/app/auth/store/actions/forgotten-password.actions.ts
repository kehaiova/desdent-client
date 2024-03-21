import {Action} from "@ngrx/store";

export const FORGOTTEN_PASSWORD = '[Password] Forgotten Password'

export class ForgottenPassword implements Action{
  readonly type = FORGOTTEN_PASSWORD;

  constructor(public payload:{email: string}) {
  }
}

export type forgottenPasswordActions =
  ForgottenPassword
