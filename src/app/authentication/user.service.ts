import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {Subject, BehaviorSubject} from 'rxjs';

import {AuthenticationService} from './authentication.service';

import {User} from '../shared/models/user.model';
import {LoginData} from '../shared/interfaces/login-data.interface';

import {Permission} from '../shared/models/permission.model';
import {UserPermission} from '../shared/models/user-permission.model';

//import localStorage from 'localStorage'; // I'm not sure why, but we apparently don't need to do this....

/*
 Some examples of sending authenticated requests to the server may be found here:

 https://medium.com/@blacksonic86/angular-2-authentication-revisited-611bf7373bf9#.6y6tryhmo
 https://github.com/auth0-blog/angular2-authentication-sample/blob/master/src/home/home.ts

 NOTE: The latter uses authHttp, which (I think) uses the angular2-jwt package.  We have
 installed that package, but it is not set up all the way yet (gives errors).  The
 former approach sends an authenticated request without the help of the angular2-jwt package.

 dates:
 ISO-8601 standard: YYYY-MM-DDTHH:mm:ss.sssZ
 ref: http://www.w3schools.com/jsref/jsref_tojson.asp

 broadcasting: ReplaySubject (for cases when the receiver may have missed the broadcast):
 https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/subjects/replaysubject.md
 */

const BASE_URL = 'http://localhost:3001';
const DEFAULT_REDIRECT_URL = '/end-user/dashboard';
const CURRENT_USER_KEY = 'current-user';

@Injectable()
export class UserService  {
  private currentUser: Subject<User> = new BehaviorSubject<User>(null);

  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              private http: Http) {
    // Load up the current user if there's one in local storage.
    let user_data: string = localStorage.getItem(CURRENT_USER_KEY);
    if (user_data) {
      let user: User = new User(JSON.parse(user_data));
      this.currentUser.next(user);
    }
  }

  login(email: string, password: string) {
    this.authenticationService.authenticate(email, password)
      .subscribe((user: User) => {
        if (this.authenticationService.isAuthenticated()) {
          console.log("Authenticated as", user);
          this.setCurrentUser(user);

          let redirect = this.authenticationService.redirectUrl || DEFAULT_REDIRECT_URL;
          this.router.navigate([redirect]);
        } else {
          console.log("Failed to authenticate");
          this.clearCurrentUser();
        }
      });
  }

  signup(email, password, first_name, last_name) {
    return this.http
      .post('http://localhost:3000/users/signup', {
        email: email,
        password: password,
        first_name: first_name,
        last_name: last_name
      });
  }

  private setCurrentUser(user: User): void {
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
    this.currentUser.next(user);
  }

  private clearCurrentUser(): void {
    localStorage.removeItem(CURRENT_USER_KEY);
    this.currentUser.next(null);
  }

  logout() {
    this.authenticationService.revokeAuthentication();
    this.clearCurrentUser();
  }

  isLoggedIn() {
    return this.authenticationService.isAuthenticated();
  }

  getCurrentUser(): Subject<User> {
    return this.currentUser;
  }

  getUsers() {
    return this.http.get('http://localhost:3000/users')
      .map(res => res.json());
  }

  getPermissionTypes() {
    // TODO: How do these two methods differ??
    return this.getInitialUserPermissions();
  }

  getInitialUserPermissions() {
    return this.http.get('http://localhost:3000/users/permissions')
      .map(res => res.json());
  }

}
