import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-medi-aplayer',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaplayerComponent implements OnInit, OnDestroy {

  @ViewChild('progressBar') progressBar: ElementRef = new ElementRef('');

  mockCover: TrackModel = {
    cover: 'https://i.scdn.co/image/ab67706f000000026e515187c071e45918e9f0de',
    album: 'Daylight',
    name: 'Evergreen',
    _id: 1,
    url: 'http://localhost/track.mp3',
    artist: []
  };

  listObervers$: Array<Subscription> = [];
  state: string = 'paused';

  constructor(
    public multimediaService: MultimediaService
  ) { }

  ngOnInit(): void {
    const observer1$ = this.multimediaService.playerStatus$.subscribe(status => this.state = status);
    this.listObervers$ = [observer1$];
  }

  ngOnDestroy(): void {
    this.listObervers$.forEach(u => u.unsubscribe());
    this.multimediaService.callback.unsubscribe();
  }

  handlePosition(event: MouseEvent): void {
    const { clientX } = event;
    const nativeElement: HTMLElement = this.progressBar.nativeElement;
    const { x, width } = nativeElement.getBoundingClientRect();
    const clickX = clientX - x;
    const percentageFromX = (clickX * 100) / width;
    this.multimediaService.changeAudio(percentageFromX);
  }

}
