import {ChangeDetectorRef, Component, Input, OnChanges, OnInit} from '@angular/core';
import {EMPTY, map, Observable} from "rxjs";
import {ReferencesModel} from "../../model/references.model";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-references-table',
  templateUrl: './references-table.component.html',
  styleUrls: ['./references-table.component.css']
})
export class ReferencesTableComponent implements OnChanges {

  @Input() references$: Observable<ReferencesModel[]> = EMPTY;

  constructor(private cdr: ChangeDetectorRef) { }

  displayedColumns: string [] = ['names', 'identifier', 'visit-date', 'outpatient-list-no','time','tooth-code', 'attending-dentist'];
  dataSource: MatTableDataSource<ReferencesModel> = new MatTableDataSource<ReferencesModel>();

  ngOnChanges(): void {
    this.references$ = this.references$.pipe(map(res => {
      console.log(res);
      this.dataSource = new MatTableDataSource<ReferencesModel>(res);
      this.cdr.detectChanges();
      return res;
    }))
    this.cdr.detectChanges();
  }

}
