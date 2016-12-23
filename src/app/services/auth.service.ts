import {Injectable} from '@angular/core';
import {FirebaseAuth} from "angularfire2";
import {Observable, Subject, Observer} from "rxjs";

@Injectable()
export class AuthService {
  private isAuthenticated = new Subject<boolean>();

  private uid = new Subject<string>();
  private uidCached: string = null;

  constructor(private auth: FirebaseAuth) {
    auth.subscribe(state => {
      this.isAuthenticated.next(state !== null);
      if(state !== null) {
        this.uidCached = state.uid;
      }
      this.uid.next(state.uid);
    });
  }

  login(): void {
    this.auth.login();
  }

  logout(): void {
    this.auth.logout();
  }

  isAuthenticatedObs(): Observable<boolean> {
    return this.isAuthenticated;
  }

  getUidObs(): Observable<string> {
    return this.uid;
  }

  getUidCached(): string {
    return this.uidCached;
  }
}
