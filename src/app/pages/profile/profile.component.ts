import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {Profile} from "../../domain/profile";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private profile: Profile;
  private name = new BehaviorSubject<string>("");

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getProfile().subscribe(p => {
      this.profile = p;
      this.name.next(p.name);
    });
    this.name.subscribe((newVal) => this.updateName(newVal))
  }

  updateName(newVal: string) {
    console.log('name changed to ' + newVal);
  }
}
