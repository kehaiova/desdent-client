import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {SheetsModel} from "../../model/sheets.model";
import {MatStepper} from "@angular/material/stepper";

@Component({
  selector: 'app-outpation-list-details',
  templateUrl: './outpation-list-details.component.html',
  styleUrls: ['./outpation-list-details.component.css']
})
export class OutpationListDetailsComponent implements OnInit {

  @Output() details: EventEmitter<SheetsModel> = new EventEmitter<SheetsModel>();
  constructor() {
  }

  sheetsModel: SheetsModel = {} as SheetsModel;

  ngOnInit(): void {
  }

  emitSheetDetails(sheetsModel: SheetsModel) {
    this.details.emit(sheetsModel);
  }

}
