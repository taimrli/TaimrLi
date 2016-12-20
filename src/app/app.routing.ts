import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardModule'},
  {path: 'profile', loadChildren: './pages/profile/profile.module#ProfileModule'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
