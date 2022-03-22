import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RistorantiComponent } from './ristoranti/ristoranti.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"home", component: HomeComponent},
  {path:"ristoranti", component: RistorantiComponent},
  {path:"menu/:nome", component: MenuComponent},
  {path: "dashboard/:id", component: DashboardComponent },//localhost:4200/dashboard/<IdUtente>
  

  {path:"**", component: PagenotfoundComponent},//tutte le altre rotte non esistenti
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
