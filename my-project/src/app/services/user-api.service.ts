import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private httpClient: HttpClient) { }

  login(user: User): Observable<User> {
    return this.httpClient.post<User>('http://localhost:8080/user/login', user)
  }

}
