import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpRequest } from '@angular/common/http';

import { BaseService } from "./base.service";
import { BehaviorSubject } from 'rxjs/Rx';
import { UserRegistration } from '../../models/identity/userRegistration';
import { User } from '../../models/identity/user';
import { ObservableInput } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable()
export class UserService extends BaseService {

  private _authNavStatusSource = new BehaviorSubject<boolean>(false);
  authNavStatus$ = this._authNavStatusSource.asObservable();

  private loggedIn = false;

  constructor(private http: HttpClient) {
    super();
    this.loggedIn = !!localStorage.getItem("loginData");
    this._authNavStatusSource.next(this.loggedIn);
  }

  public register(email: string, password: string, firstName: string, lastName: string) {
    let user = new UserRegistration(email, password, firstName, lastName);
    return this.http.post('api/Account/Register', user)
      .map(res => true)
      .catch(this.handleError);
  }

  public login(userName, password): Observable<any> {
    let user = new User(userName, password);
    return this.http.post('api/Account/Login', user, { responseType: 'text'})
      .catch(this.handleError);
  }

  public logout() {
    localStorage.clear();
    this.loggedIn = false;
    this._authNavStatusSource.next(false);
  }

  public isLoggedIn() {
    return this.loggedIn;
  }
}
