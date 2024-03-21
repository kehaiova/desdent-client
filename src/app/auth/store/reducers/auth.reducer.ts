import {DentistModel} from "../../../model/dentist.model";
import * as AuthActions from "../actions/auth.actions"
export interface AuthState {
  user: DentistModel,
  authError: string,
  loading: boolean
}

const initialState: AuthState = {
  user: {} as DentistModel,
  authError: '',
  loading: false
}

export function authReducer(
  state = initialState,
  action: AuthActions.AuthActions
): AuthState {
  switch (action.type) {
    case AuthActions.AUTHENTICATE_SUCCESS:
      const user = {
        id: action.payload.id,
        username: action.payload.username,
        email: action.payload.email,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        phoneNum: action.payload.phoneNum,
        roleName: action.payload.roleName,
        address: action.payload.address,

      }
      return <AuthState>{
        ...state,
        authError: '',
        user: user,
        loading: false
      };
    case AuthActions.LOGOUT:
      return {
        ...state,
        user: {} as DentistModel
      };
    case AuthActions.LOGIN_START:
    case AuthActions.AUTHENTICATE_FAIL:
      return {
        ...state,
        user: {} as DentistModel,
        authError: '',
        loading: false
      }
    default:
      return state;
  }
}
