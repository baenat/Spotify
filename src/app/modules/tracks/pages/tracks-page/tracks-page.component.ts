import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit, OnDestroy {

  tracksTrending: Array<TrackModel> = [];
  tracksRandom: Array<TrackModel> = [];

  listObservers$: Array<Subscription> = [];

  constructor(
    private trackServic: TrackService,
  ) { }

  ngOnInit(): void {
    this.loadDataTrending();
    this.loadDataRandom();
  }

  ngOnDestroy(): void { }

  loadDataTrending() {
    this.trackServic.getAllTracks().subscribe({
      next: (response) => {
        this.tracksTrending = response;
      }
    });
  }

  loadDataRandom() {
    this.trackServic.getAllRandom().subscribe({
      next: (response) => {
        setTimeout(() => {
          this.tracksRandom = response;
        }, 4000);
      },
      error: (error) => {
        console.error('Error de conexión', error)
      }
    });
  }


}
