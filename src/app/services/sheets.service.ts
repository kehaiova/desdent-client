import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {SheetsModel} from "../model/sheets.model";
import {environment} from "../../environments/environment";
import {SnackbarService} from "./snackbar.service";

@Injectable({
  providedIn: "root"
})

export class SheetsService {

  constructor(private http: HttpClient,
              private snackbarService: SnackbarService) {
  }

  saveSheet(details: SheetsModel) {
    return this.http.post(environment.baseUrl + "sheets/save", details).subscribe(res => {
      this.snackbarService.openSnackbar('Успешно запазване!', 'success');
    });
  }
}
