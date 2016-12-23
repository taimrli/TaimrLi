import {AuthService} from "./auth.service";
import {AngularFireDatabase} from "angularfire2";
import {Observer, Subject, Observable} from "rxjs";
import {serialize} from "serializer.ts/Serializer";
export class AsyncFirebaseObjectResolver {

  private userId: string;

  constructor(private db: AngularFireDatabase, private auth: AuthService) {
  }

  load<T>(obs: Observer<T>, fbRef: string): void {
    if (this.userId) {
      this.db.object('/users/' + this.userId + fbRef).subscribe(snap => {
        obs.next(snap);
      });
    } else {
      this.fetchUid().subscribe(() => this.load(obs, fbRef));
    }
  }

  save<T>(object: T, fbRef: string): void {
    if (this.userId) {
      let serialized = serialize(object);
      delete serialized.$key;

      this.db.object('/users/' + this.userId + fbRef).update(serialized);
    } else {
      this.fetchUid().subscribe(() => this.save(object, fbRef));
    }
  }

  private fetchUid(): Observable<any> {
    let sub = new Subject<any>();
    this.userId = this.auth.getUidCached();

    if (!this.userId) {
      // have to do it async
      this.auth.getUidObs().subscribe(uid => {
        this.userId = uid;
        sub.next();
      });
    } else {
      sub.next();
    }
    return sub;
  }
}
