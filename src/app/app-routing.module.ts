import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import{HeroDetailComponent} from '../app/Components/hero-detail/hero-detail.component'
import {HeroesComponent} from '../app/Components/heroes/heroes.component';
import {DashboardComponent} from "../app/Components/dashboard/dashboard.component"
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({ //metadata initializes the router and starts it listening for browser location changes.
  //AppRoutingModule imports array and configures it with the routes in one step by calling RouterModule.forRoot()
  imports: [RouterModule.forRoot(routes)],
  //The method is called forRoot() because you configure the router at the application's root level.
  exports: [RouterModule]
})
export class AppRoutingModule { }
