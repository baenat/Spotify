import { Injectable } from '@angular/core';
import { Observable, catchError, map, mergeMap, of, tap } from 'rxjs';
import { TrackModel } from '@core/models/tracks.model';
import * as dataRaw from '@data/tracks.json'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private readonly URL = environment.api;

  dataTracksTrending$: Observable<TrackModel[]> = of([]);
  dataTracksRandom$: Observable<TrackModel[]> = of([]);

  constructor(
    private httpClient: HttpClient
  ) { }

  private skipId(data: Array<TrackModel>, id: string): Promise<TrackModel[]> {
    return new Promise((resolve, reject) => {
      const listTmp = data.filter((t) => t._id !== id);
      resolve(listTmp);
    });
  }

  getAllTracks(): Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`)
      .pipe(
        map(({ data }: any) => data),
        map((data: any) => data.map((obj: any) => ({ ...obj, url: obj.audio.url }))),
        catchError((err) => {
          const { status, statusText } = err;
          console.log('Ocurrio un error', status, statusText)
          return of([])
        })
      );
  }

  getAllRandom(): Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`)
      .pipe(
        mergeMap(({ data }: any) => this.skipId(data, '65810ca29f86a9dd0b1784c4')),
        map((data: any) => data.map((obj: any) => ({ ...obj, url: obj.audio.url }))),
        catchError((err) => {
          const { status, statusText } = err;
          console.log('Ocurrio un error', status, statusText)
          return of([])
        })
      );
  }
}
