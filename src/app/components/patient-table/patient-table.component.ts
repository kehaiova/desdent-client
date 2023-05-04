import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-table',
  templateUrl: './patient-table.component.html',
  styleUrls: ['./patient-table.component.css']
})
export class PatientTableComponent implements OnInit {

  constructor() { }

  displayedColumns: string [] = ['names', 'identifier', 'visit-date','attending-dentist'];

  ngOnInit(): void {
  }

}
