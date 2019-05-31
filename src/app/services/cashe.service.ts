import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

const CASH_CLEAN_TIMER = 900000;
const CASH_ARRAY_LENGTH = 200;

interface HttpCacheInterface {
  url: string;
  response: HttpResponse<any>;
}

type FindCallback = (value: HttpCacheInterface, index: number, obj: HttpCacheInterface[]) => boolean;
type FilterCallback = (value: HttpCacheInterface, index: number, obj: HttpCacheInterface[]) => boolean;

@Injectable()
export class CacheService {

  private data: Array<HttpCacheInterface>;

  constructor() {
    this.reset();
    const interval = Number(CASH_CLEAN_TIMER);
    if (!isNaN(interval) && interval > 0) {
      setInterval(() => this.reset(), interval);
    }
  }

  reset(): void {
    this.data = [];
  }

  find(cb: FindCallback): HttpCacheInterface {
    return this.data.find(cb);
  }

  push(item: HttpCacheInterface): void {
    if (this.data.length >= CASH_ARRAY_LENGTH) {
      this.data.shift();
    }
    this.data.push(item);
  }

}
