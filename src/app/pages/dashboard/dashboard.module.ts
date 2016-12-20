import { NgModule } from '@angular/core';
import {DashboardComponent} from "./dashboard.component";
import {routing} from "./dashboard.routing";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    RouterModule.forChild(routing),
    CommonModule
  ],
  declarations: [DashboardComponent],
  exports:[DashboardComponent]
})
export class DashboardModule {}
