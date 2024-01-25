import { Component, Input } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css']
})
export class PlayListBodyComponent {

  @Input() tracks: Array<TrackModel> = [];

  optionSort: { prop: string | null, order: string } = { prop: null, order: 'desc' };

  constructor() { }

  ngOnInit(): void {

  }

  changeSort(prop: string) {

    const { order } = this.optionSort;
    this.optionSort = {
      prop,
      order: order === 'desc' ? 'asc' : 'desc'
    }

  }

}
