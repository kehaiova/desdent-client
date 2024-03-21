import {Component, OnInit} from '@angular/core';
import {getAuthData} from "../../auth/store/selectors/auth.selector";
import {Store} from "@ngrx/store";
import * as fromApp from "../../store/app.reducer";
import {map, Observable, of} from "rxjs";
import {DentistModel} from "../../model/dentist.model";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(private store: Store<fromApp.AppState>,
              private authService: AuthService) {
  }

  edit: boolean = false;

  userData$!: Observable<DentistModel>;
  dentistId: number = 0;

  ngOnInit(): void {
    // this.userData$ = this.store.select(getAuthData).pipe(map(res => {
    //   this.dentistId = res.id;
    //   return res;
    // }));

    const userData: DentistModel | null = JSON.parse(localStorage.getItem('userData') || 'null');
    if (userData) {
      this.userData$ = of(userData).pipe(map(res => {
        this.dentistId = res.id;
        return res;
      }));
    } else {
      return;
    }
  }

  enableEditMode() {
    this.edit = true;
  }

  editUserData(model: DentistModel) {
    console.log(model);
    this.userData$ = this.authService._edit(model, this.dentistId).pipe(map(updatedUserData => {
      this.edit = false;
      return updatedUserData;
    }));
  }
}
