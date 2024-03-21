import {ScheduleModel} from "../../../model/schedule.model";
import * as ScheduleActions from "../actions/schedule.actions";

// reducer saves the data in the store from the string in action
export interface DentistScheduleState {
  schedule: ScheduleModel[]
}

const initialState: DentistScheduleState = {
  schedule: []
}

export function scheduleReducer (
  state = initialState,
  action: ScheduleActions.ScheduleActions
): DentistScheduleState {
  switch (action.type) {
    case ScheduleActions.SET_DENTIST_SCHEDULE:
      return {
        // spread operator, state is the global store at the moment, the spread reduces the state in object
        // state.schedule = action.payload have the same effect
        // reducers always return new object with deconstructed old state
        ...state,
        schedule: [...action.payload]
      };
    default:
      return state;
  }
}
