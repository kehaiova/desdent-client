import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AuthState} from "../reducers/auth.reducer";

const getAuthState = createFeatureSelector<AuthState>('user')
export const getAuthData = createSelector(getAuthState, (state) => {
  return state.user;
});
