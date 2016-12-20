import {Injectable} from '@angular/core';
import {Profile} from "../domain/profile";
import {AngularFireDatabase} from "angularfire2";
import {AuthService} from "./auth.service";
import {Observable, Observer} from "rxjs";
import {Settings} from "../domain/settings";
import {AsyncFirebaseObjectResolver} from "./async-firebase-object-resolver";

@Injectable()
export class UserService {
  private fbObjectResolver: AsyncFirebaseObjectResolver;

  constructor(private db: AngularFireDatabase, private auth: AuthService) {
    this.fbObjectResolver = new AsyncFirebaseObjectResolver(db, auth);
  }

  getProfile(): Observable<Profile> {
    return Observable.create((obs: Observer<Profile>) => this.fbObjectResolver.load<Profile>(obs, '/_profile'));
  }

  getSettings(): Observable<Settings> {
    return Observable.create((obs: Observer<Settings>) => this.fbObjectResolver.load<Settings>(obs, '/_settings'));
  }
}
