import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-references-table',
  templateUrl: './references-table.component.html',
  styleUrls: ['./references-table.component.css']
})
export class ReferencesTableComponent implements OnInit {

  constructor() { }

  displayedColumns: string [] = ['names', 'identifier', 'visit-date', 'outpatient-list-no', 'attending-dentist'];

  ngOnInit(): void {
  }

}
