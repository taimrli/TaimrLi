export class Project {
  private _subProjects: Project[];

  get subProjects(): Project[] {
    return this._subProjects;
  }
}
