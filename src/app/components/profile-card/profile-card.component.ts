import {Component, OnInit} from '@angular/core';
import {getAuthData} from "../../auth/store/selectors/auth.selector";
import {Store} from "@ngrx/store";
import * as fromApp from "../../store/app.reducer";
import {Observable} from "rxjs";
import {DentistModel} from "../../model/dentist.model";

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {

  constructor(private store: Store<fromApp.AppState>) {
  }

  userData$!: Observable<DentistModel>;

  ngOnInit(): void {
    this.userData$ = this.store.select(getAuthData)
  }

}
