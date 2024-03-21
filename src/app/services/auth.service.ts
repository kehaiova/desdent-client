import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {AuthResponseData} from "../auth/store/effects/auth.effects";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {map} from "rxjs";
import {DentistModel} from "../model/dentist.model";

@Injectable({providedIn: 'root'})
export class AuthService {

  constructor(private http: HttpClient,
              private router: Router) {
  }

  _login(username: string, password: string) {
    return this.http.post<AuthResponseData>(environment.baseUrl + "users/login", {
      username: username,
      password: password});
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
    return this.http.put<string>(environment.baseUrl + "users/forgotten-pass", {email}).subscribe();
  }

  _edit(data: DentistModel) {
    return this.http.put<DentistModel>(environment.baseUrl + "", {data}).subscribe();
  }


}
