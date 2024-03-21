import { Component, OnInit } from '@angular/core';
import {ReferencesService} from "../../services/references.service";
import {EMPTY, map, Observable} from "rxjs";
import {ReferencesForm, ReferencesModel} from "../../model/references.model";
import {getAuthData} from "../../auth/store/selectors/auth.selector";
import {Store} from "@ngrx/store";
import * as fromApp from "../../store/app.reducer";
import {DentistModel} from "../../model/dentist.model";

@Component({
  selector: 'app-references-page',
  templateUrl: './references-page.component.html',
  styleUrls: ['./references-page.component.css']
})
export class ReferencesPageComponent implements OnInit {

  constructor(private referencesService: ReferencesService,
              private store: Store<fromApp.AppState>) { }

  userData$: Observable<DentistModel> = EMPTY;
  references$: Observable<ReferencesModel[]> = EMPTY;
  dentistId: number = 0;

  ngOnInit(): void {
    this.userData$ = this.store.select(getAuthData)
      .pipe(map(res => {
        this.dentistId = res.id;
        return res;
      }));
  }

  getReferences(referencesForm: ReferencesForm) {
    this.references$ = this.referencesService.getReferencesByDateAndDentistId(referencesForm, this.dentistId);
  }

}
