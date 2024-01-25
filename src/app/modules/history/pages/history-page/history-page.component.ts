import { Component } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { SearchService } from '@modules/history/services/search.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent {

  // listResults: TrackModel[] = [];
  listResults$: Observable<any> = of([]);

  constructor(
    private searchService: SearchService,
  ) { }

  receiveData(event: string) {
    this.listResults$ = this.searchService.searchTracks$(event);
    // .subscribe({
    //   next: ({ data }) => {
    //     this.listResults = data;
    //     console.log(this.listResults);
    //   }
    // })
  }

}
