import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly URL = environment.api;

  constructor(
    private httpClient: HttpClient,
    private cookie: CookieService
  ) { }

  sendCredentials(email: string, password: string): Observable<any> {
    return this.httpClient.post(`${this.URL}/auth/login`, { email, password })
      .pipe(
        map((response: any) => response.data),
        tap((response: any) => {
          const { token } = response;
          const expire = new Date();
          const time = Date.now() + ((3600 * 1000) * 2);
          expire.setTime(time);
          this.cookie.set('token', token, expire);
        }),
      );
  }
}
