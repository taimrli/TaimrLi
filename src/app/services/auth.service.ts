import {Injectable} from '@angular/core';
import {FirebaseAuth} from "angularfire2";
import {Observable, Subject, Observer} from "rxjs";

@Injectable()
export class AuthService {
  private isAuthenticated = new Subject<boolean>();

  private uid = new Subject<string>();
  private uidCache: string;

  constructor(private auth: FirebaseAuth) {
    auth.subscribe(state => {
      this.isAuthenticated.next(state !== null);
      this.uid.next(state.uid);
      this.uidCache = state.uid;
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

  getUid(): string {
    return this.uidCache;
  }

  getUidObs(): Observable<string> {
    return this.uid;
  }

}
