import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @Output() callbackSearch: EventEmitter<any> = new EventEmitter();

  searchValue: string = '';

  constructor() { }

  callSearch(term: string) {
    if (term.length >= 3) {
      this.callbackSearch.emit(term);
    }
  }

}
