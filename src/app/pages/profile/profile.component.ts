import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {Profile} from "../../domain/profile";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private profile: Profile;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getProfile().subscribe(p => {
      this.profile = p;
    });
  }
}
