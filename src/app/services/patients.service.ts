import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PatientModel} from "../model/patient.model";
import {environment} from "../../environments/environment";

@Injectable({providedIn: "root"})

export class PatientsService {
  constructor(private http: HttpClient) {
  }

  getPersonByIdentifier(patientIdentifier: string): Observable<PatientModel> {
    return this.http.get<PatientModel>(environment.baseUrl + "patients/" + patientIdentifier);
  }
}
