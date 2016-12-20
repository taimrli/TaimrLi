import {Project} from "./project";
export class Track {
  private _project: Project;

  get project(): Project {
    return this._project;
  }
}
