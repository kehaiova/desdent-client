import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ScheduleModel} from "../model/schedule.model";
import {environment} from "../../environments/environment";
import {DatePipe} from "@angular/common";

@Injectable({providedIn: "root"})
export class ScheduleService {

  constructor(private http: HttpClient,
              private datePipe: DatePipe) {
  }


  _fetchDentistSchedule(dentistId: number) {
    let todayDate = new Date();
    return this.http.get<ScheduleModel[]>(
      environment.baseUrl + "schedule/" + dentistId + "/" + this.datePipe.transform(todayDate, 'yyyy-MM-dd' )
    );
  }


}
