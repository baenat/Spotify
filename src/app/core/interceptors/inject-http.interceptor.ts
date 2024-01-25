import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class InjectHttpInterceptor implements HttpInterceptor {

  constructor(
    private cookieService: CookieService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    try {

      const authToken = this.cookieService.get('token');
      let authReq = request;

      if (authToken) {
        authReq = request.clone({
          setHeaders: {
            'Authorization': `Bearer ${authToken}`
          }
        });
      }

      return next.handle(authReq);
    } catch (e) {
      console.log('Error interceptor', e);
      return next.handle(request);
    }

  }
}
