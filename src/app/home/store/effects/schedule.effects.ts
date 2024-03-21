import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as ScheduleActions from "../actions/schedule.actions";
import {map, switchMap} from "rxjs";
import {ScheduleService} from "../../../services/schedule.service";

@Injectable()
export class ScheduleEffects {
  setDentistSchedule = createEffect(() => this.actions$.pipe(
      ofType(ScheduleActions.FETCH_DENTIST_SCHEDULE),
      switchMap((data: ScheduleActions.FetchDentistSchedule) => {
        return this.scheduleService._fetchDentistSchedule(data.payload.dentistId);
      }),
      map(schedule => {
        return new ScheduleActions.SetDentistSchedule(schedule);
      })
    )
  )

  constructor(
    private actions$: Actions,
    private scheduleService: ScheduleService) {
  }
}
