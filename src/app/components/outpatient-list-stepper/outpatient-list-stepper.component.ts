import {Component, OnInit, ViewChild} from '@angular/core';
import {PatientsService} from "../../services/patients.service";
import {EMPTY, map, Observable} from "rxjs";
import {PatientModel} from "../../model/patient.model";
import {SheetsModel} from "../../model/sheets.model";
import {MatStepper} from "@angular/material/stepper";
import {SheetsService} from "../../services/sheets.service";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-outpatient-list-stepper',
  templateUrl: './outpatient-list-stepper.component.html',
  styleUrls: ['./outpatient-list-stepper.component.css']
})
export class OutpatientListStepperComponent implements OnInit {
  @ViewChild('stepper') stepper!: MatStepper;

  constructor(private patientService: PatientsService,
              private sheetsService: SheetsService) {
  }

  person$: Observable<PatientModel> = EMPTY;
  combinedDetails: SheetsModel = {} as SheetsModel;

  ngOnInit(): void {
  }

  searchByPersonIdentifier(personIdentifier: string) {
    this.person$ = this.patientService.getPersonByIdentifier(personIdentifier)
      .pipe(map(res => {
        this.combinedDetails.personId = res.id;
        return res;
      }));
    this.stepper?.next();
  }

  receiveSheetDetailsFromStep3(details: Partial<SheetsModel>) {
    this.combinedDetails = {...this.combinedDetails, ...details};
    this.stepper?.next();
  }

  receiveSheetDetailsFromStep4(details: Partial<SheetsModel>) {
    this.combinedDetails = {...this.combinedDetails, ...details};
    this.stepper?.next();
  }

  saveAndAdvance() {
    const userDataString = localStorage.getItem('userData');

    if (userDataString !== null) {
      // Parse the JSON string to convert it back to an object
      const userData = JSON.parse(userDataString);
      this.combinedDetails.dentistId = userData.id;
    }
    this.combinedDetails.issueDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');
    this.sheetsService.saveSheet(this.combinedDetails);
  }
}
