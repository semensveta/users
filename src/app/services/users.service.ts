import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TableDataInterface} from '../interfaces/table-data';

const URLS = {
  USERS: 'https://reqres.in/api/users?page=0',
  USER: 'https://reqres.in/api/users/:id'
};

@Injectable()

export class UsersDataService {

  constructor(
    private http: HttpClient
  ) { }

  public getUsers(pageNumber: number): Observable<TableDataInterface> {
      return this.http.get(URLS.USERS,
        {
          params: { page: pageNumber.toString() },
          headers: new HttpHeaders().set('_Cache', 'true')
        }) as Observable<TableDataInterface>;
  }

}
