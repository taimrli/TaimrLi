import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {Profile} from "../../../domain/profile";

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
  private profile: Profile;

  private newName: string;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getProfile().subscribe(p => {
      this.profile = p;
    });
  }

  save(): void {
    console.log('save name: ' + this.newName);
    this.profile.name = this.newName;
    this.userService.saveProfile(this.profile);
  }
}
