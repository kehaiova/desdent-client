import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {SheetsModel} from "../../model/sheets.model";
import {MatStepper} from "@angular/material/stepper";

@Component({
  selector: 'app-patient-status',
  templateUrl: './patient-status.component.html',
  styleUrls: ['./patient-status.component.css']
})
export class PatientStatusComponent implements OnInit {

  @Output() details: EventEmitter<SheetsModel> = new EventEmitter<SheetsModel>();

  constructor() {
  }

  sheetsModel: SheetsModel = {} as SheetsModel;

  ngOnInit(): void {
  }

  emitSheetDetails(sheet: SheetsModel) {
    this.details.emit(sheet);
  }

}
