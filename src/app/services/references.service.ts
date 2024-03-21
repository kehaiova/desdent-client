import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ReferencesForm, ReferencesModel} from "../model/references.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: "root"
})

export class ReferencesService {

  constructor(private http: HttpClient) {
  }

  getReferencesByDateAndDentistId(referencesForm: ReferencesForm, dentistId: number): Observable<ReferencesModel[]> {
    return this.http.get<ReferencesModel[]>(environment.baseUrl + "references/" + referencesForm.startDate + "/" + referencesForm.endDate + "/" + dentistId);
  }
}
