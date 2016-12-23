import {ProfileComponent} from "./profile.component";
import {ProfileEditComponent} from "./profile-edit/profile-edit.component";

export const routing = [
  {path: '', component: ProfileComponent},
  {path: 'editProfile', component: ProfileEditComponent}
];
