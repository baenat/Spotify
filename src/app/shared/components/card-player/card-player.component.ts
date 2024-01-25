import { Component, Input } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css']
})
export class CardPlayerComponent {

  @Input() mode: string = '';
  @Input() track!: TrackModel;

  constructor(
    private multimediaService: MultimediaService,
  ) { }

  sendPlay(track: TrackModel) {
    console.log('Enviando cancion al reproductor ▶ ...');
    // this.multimediaService.callback.emit(track);
    this.multimediaService.trackInfo$.next(track);
  }

}
