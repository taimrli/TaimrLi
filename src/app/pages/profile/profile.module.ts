import { NgModule } from '@angular/core';
import {routing} from "./profile.routing";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {ProfileComponent} from "./profile.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    RouterModule.forChild(routing),
    CommonModule,
    FormsModule
  ],
  declarations: [ProfileComponent],
  exports:[ProfileComponent]
})
export class ProfileModule {}
