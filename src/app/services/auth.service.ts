import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _userName: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  
  constructor() { }

  getUserName(){
    return this._userName.asObservable();
  }

  setUserName(user: string){
    this._userName.next(user);
  }
}
