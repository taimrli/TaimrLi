import {Project} from "./project";
import {Track} from "./track";
import {Profile} from "./profile";
import {Settings} from "./settings";

export class User {

  private _projects: Project[];
  private _tracks: Track[];
  private _currentTrack: Track;
  private _profile: Profile;
  private _settings: Settings;

  get projects(): Project[] {
    return this._projects;
  }

  get tracks(): Track[] {
    return this._tracks;
  }

  get currentTrack(): Track {
    return this._currentTrack;
  }

  get profile(): Profile {
    return this._profile;
  }

  get settings(): Settings {
    return this._settings;
  }

  set projects(value: Project[]) {
    this._projects = value;
  }

  set tracks(value: Track[]) {
    this._tracks = value;
  }

  set currentTrack(value: Track) {
    this._currentTrack = value;
  }

  set profile(value: Profile) {
    this._profile = value;
  }

  set settings(value: Settings) {
    this._settings = value;
  }
}
