import {Component, OnInit} from '@angular/core';
import {getAuthData} from "../../auth/store/selectors/auth.selector";
import {Store} from "@ngrx/store";
import * as fromApp from "../../store/app.reducer";
import {Observable} from "rxjs";
import {DentistModel} from "../../model/dentist.model";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(private store: Store<fromApp.AppState>) {
  }

  edit: boolean = false;

  userData$!: Observable<DentistModel>;

  ngOnInit(): void {
    this.userData$ = this.store.select(getAuthData);
  }

  enableEditMode() {
    this.edit = true;
  }

  editUserData() {

  }


}
