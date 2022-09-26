import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  _loggedUser: User= {};

  constructor() { }

  get loggedUser(){
    return this._loggedUser;
  }

  set loggedUser(user: User){
    this._loggedUser= user;
  }
}
