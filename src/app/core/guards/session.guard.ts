import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const sessionGuard: CanActivateFn = (route, state) => {
  return checkCookieSession();
};

const checkCookieSession = (): boolean => {

  const cookieService = inject(CookieService);
  const router = inject(Router);

  try {

    const token: boolean = cookieService.check('token');
    if (!token) router.navigate(['/', 'auth']);
    return token;

  } catch (error) {
    console.log('Error sessionGuard', error);
    return false;
  }

}
