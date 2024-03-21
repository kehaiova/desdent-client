import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {AuthResponseData} from "../auth/store/effects/auth.effects";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {map, Observable} from "rxjs";
import {DentistModel} from "../model/dentist.model";
import {SnackbarService} from "./snackbar.service";

@Injectable({providedIn: 'root'})
export class AuthService {

  constructor(private http: HttpClient,
              private snackbarService: SnackbarService,
              private router: Router) {
  }

  _login(username: string, password: string) {
    return this.http.post<AuthResponseData>(environment.baseUrl + "users/login", {
      username: username,
      password: password
    });
  }

  _logout() {
    localStorage.removeItem('userData');
    return this.http.post(environment.baseUrl + "users/logout", {})
      .subscribe();
  }

  _redirect() {
    this.router.navigate(['home'], {}).then(r => {
    });
  }

  _forgottenPassword(email: string) {
    return this.http.put<string>(environment.baseUrl + "users/forgotten-pass", {email}).subscribe(res => {
      this.snackbarService.openSnackbar('Имейлът беше изпратен успешно!', 'success')
    });
  }

  _edit(data: DentistModel, id: number): Observable<DentistModel> {
    return this.http.put<DentistModel>(environment.baseUrl + "users/" + id, data)
      .pipe(map(res => {
        this.snackbarService.openSnackbar('Успешна актуализация на информацията!', 'success');
        return res;
      }));
  }


}
