import {Component, Input, OnInit} from '@angular/core';
import {EMPTY, Observable} from "rxjs";
import {PatientModel} from "../../model/patient.model";

@Component({
  selector: 'app-outpation-list-personal-data',
  templateUrl: './outpation-list-personal-data.component.html',
  styleUrls: ['./outpation-list-personal-data.component.css']
})
export class OutpationListPersonalDataComponent implements OnInit {

  @Input() person$: Observable<PatientModel> = EMPTY;
  constructor() { }

  ngOnInit(): void {
  }

}
