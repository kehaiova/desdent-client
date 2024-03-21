import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-form-patients',
  templateUrl: './search-form-patients.component.html',
  styleUrls: ['./search-form-patients.component.css']
})
export class SearchFormPatientsComponent implements OnInit {

  @Output() searchPersonIdentifier: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  personIdentifier: string = '';

  ngOnInit(): void {
  }

  emitPersonIdentifier(personIdentifier: string) {
    this.searchPersonIdentifier.emit(personIdentifier);
  }
}
