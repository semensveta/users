import { Injectable } from '@angular/core';
import { HttpEvent, HttpResponse, HttpRequest, HttpInterceptor, HttpHandler } from '@angular/common/http';
import { of ,  Observable } from 'rxjs';
import {tap} from 'rxjs/operators';
import {CacheService} from './cashe.service';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {

  constructor(private cache: CacheService) {
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const isCache = request.method.toLowerCase() === 'get' && request.headers.has('_Cache');

    if (isCache) {
      const headers = request.headers.delete('_Cache');
      request = request.clone({ headers });
      const cachedResponse = this.cache.find(cached => cached.url === request.urlWithParams);
      if (cachedResponse) {
        return of(cachedResponse.response);
      }
    }

    return next.handle(request).pipe(tap(response => {
      if (isCache && response instanceof HttpResponse && response.ok) {
        this.cache.push({
          url: request.urlWithParams,
          response
        });
      }
    }));
  }
}
