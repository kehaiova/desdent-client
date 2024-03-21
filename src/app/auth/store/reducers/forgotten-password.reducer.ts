import * as ForgottenPasswordActions from "../actions/forgotten-password.actions"
export interface ForgottenPasswordState {
  email: string,
}

const initialState: ForgottenPasswordState = {
  email: ''
}

export function forgottenPasswordReducer(
  state = initialState,
  action: ForgottenPasswordActions.forgottenPasswordActions
): ForgottenPasswordState {
  switch (action.type) {
    case ForgottenPasswordActions.FORGOTTEN_PASSWORD:
    {
      return state = action.payload
    }
    default:
      return state;
  }
}
