import { TestBed } from '@angular/core/testing';

import { InjectHttpInterceptor } from './inject-http.interceptor';

describe('InjectHttpInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InjectHttpInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: InjectHttpInterceptor = TestBed.inject(InjectHttpInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
