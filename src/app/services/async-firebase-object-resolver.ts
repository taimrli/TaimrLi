import {AuthService} from "./auth.service";
import {AngularFireDatabase} from "angularfire2";
import {Observer} from "rxjs";
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
      this.auth.getUidObs().subscribe(uid => {
        this.userId = uid;
        this.load(obs, fbRef);
      });
    }
  }
}
