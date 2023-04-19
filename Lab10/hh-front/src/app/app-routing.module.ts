import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {VacancyComponent} from "./vacancy/vacancy.component";
import {CompanyComponent} from "./company/company.component";
import {CompanyDoesNotExistComponent} from "./company-does-not-exist/company-does-not-exist.component";

const routes: Routes = [
  {path: '', redirectTo: '/companies', pathMatch: 'full'},
  {path: 'companies', component: CompanyComponent},
  {path: 'company/:companyID', component: VacancyComponent},
  {path: 'companynotfound', component: CompanyDoesNotExistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
