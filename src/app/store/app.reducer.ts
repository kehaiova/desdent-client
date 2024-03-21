import {ActionReducerMap} from "@ngrx/store";
import * as fromAuth from "../auth/store/reducers/auth.reducer";
import * as fromSchedule from "../home/store/reducers/schedule.reducer"
import * as fromForgottenPassword from "../auth/store/reducers/forgotten-password.reducer"
export interface AppState {
  auth: fromAuth.AuthState,
  schedule: fromSchedule.DentistScheduleState,
  forgottenPassword: fromForgottenPassword.ForgottenPasswordState
}

export const reducers: ActionReducerMap<AppState, any> = {
  auth: fromAuth.authReducer,
  schedule: fromSchedule.scheduleReducer,
  forgottenPassword: fromForgottenPassword.forgottenPasswordReducer
}
