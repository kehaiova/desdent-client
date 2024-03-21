import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ReferencesForm} from "../../model/references.model";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-references-form',
  templateUrl: './references-form.component.html',
  styleUrls: ['./references-form.component.css']
})
export class ReferencesFormComponent implements OnInit {

  @Output() emitDates: EventEmitter<ReferencesForm> = new EventEmitter<ReferencesForm>();

  constructor() { }

  referencesForm: ReferencesForm = {} as ReferencesForm;

  ngOnInit(): void {
  }

  emitPeriod(referencesForm: ReferencesForm) {
    this.referencesForm.startDate = formatDate(this.referencesForm.startDate, 'yyyy-MM-dd', 'bg');
    this.referencesForm.endDate = formatDate(this.referencesForm.endDate, 'yyyy-MM-dd', 'bg');
    this.emitDates.emit(referencesForm);
  }
}
