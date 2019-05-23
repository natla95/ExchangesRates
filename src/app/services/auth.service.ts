import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user = {
    login: 'admin',
    password: 'password'
  };
  private isUserLoggedIn = false;

  constructor() { }

  signIn(login: string, password: string) {
    if (login === this.user.login && password === this.user.password) {
      this.isUserLoggedIn = true;
    } else {
      this.isUserLoggedIn = false;
    }
    return this.isUserLoggedIn;
  }

  isUserLogged() {
    return this.isUserLoggedIn;
  }

}
