import {Action} from "@ngrx/store";
import {ScheduleModel} from "../../../model/schedule.model";

export const SET_DENTIST_SCHEDULE = '[Schedule] Set Dentist Schedule'
export const FETCH_DENTIST_SCHEDULE = '[Schedule] Fetch Dentist Schedule'

export class SetDentistSchedule implements Action {
  readonly type = SET_DENTIST_SCHEDULE;

  constructor(public payload: ScheduleModel[]) {
  }
}

export class FetchDentistSchedule implements Action {
  readonly type = FETCH_DENTIST_SCHEDULE;

  constructor(public payload: {dentistId: number}) {
  }
}

export type ScheduleActions =
  SetDentistSchedule |
  FetchDentistSchedule
