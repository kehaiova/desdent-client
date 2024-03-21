import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import * as fromApp from "../../store/app.reducer";
import {map, Observable} from "rxjs";
import {ScheduleModel} from "../../model/schedule.model";
import {MatTableDataSource} from "@angular/material/table";
import {getAuthData} from "../../auth/store/selectors/auth.selector";
import * as ScheduleActions from "../../home/store/actions/schedule.actions"

@Component({
  selector: 'app-patient-table',
  templateUrl: './patient-table.component.html',
  styleUrls: ['./patient-table.component.css']
})
export class PatientTableComponent implements OnInit {

  constructor(private store: Store<fromApp.AppState>) {
  }

  displayedColumns: string [] = ['names', 'identifier', 'visit-date', 'attending-dentist'];

  schedule!: Observable<ScheduleModel[]>;
  dataSource = new MatTableDataSource<ScheduleModel>();
  dentistIds!: number;

  ngOnInit(): void {
    this.store.select(getAuthData).subscribe((resp => {
      this.dentistIds = resp.id;
    }));
    // Dispatch is calling the action to run
    // One action can be performed from 2 reducers
    this.store.dispatch(new ScheduleActions.FetchDentistSchedule({dentistId: this.dentistIds}));

    this.schedule = this.store.select('schedule')
      .pipe(map(sch => {
        this.dataSource = new MatTableDataSource<ScheduleModel>(sch.schedule);
        return sch.schedule;
      }))
  }

}
