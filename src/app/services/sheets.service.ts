import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {SheetsModel} from "../model/sheets.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: "root"
})

export class SheetsService {

  constructor(private http: HttpClient) {
  }

  saveSheet(details: SheetsModel) {
    return this.http.post(environment.baseUrl + "sheets/save", details).subscribe();
  }
}
