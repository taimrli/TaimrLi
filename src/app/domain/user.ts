import {Project} from "./project";
import {Track} from "./track";
import {Profile} from "./profile";
import {Settings} from "./settings";

export class User {
  projects: Project[];
  tracks: Track[];
  currentTrack: Track;
  profile: Profile;
  settings: Settings;
}
