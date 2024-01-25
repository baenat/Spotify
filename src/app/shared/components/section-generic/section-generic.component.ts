import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

type mode = 'small' | 'big';

@Component({
  selector: 'app-section-generic',
  templateUrl: './section-generic.component.html',
  styleUrls: ['./section-generic.component.css']
})
export class SectionGenericComponent implements OnInit {

  @Input() title: string = '';
  @Input() mode: mode = 'small';
  @Input() dataTracks: Array<TrackModel> = [];

  constructor() { }

  ngOnInit(): void { }

}
