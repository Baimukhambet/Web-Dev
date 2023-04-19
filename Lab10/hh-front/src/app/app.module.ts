import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VacancyComponent } from './vacancy/vacancy.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import {HttpClientModule} from "@angular/common/http";
import { CompanyComponent } from './company/company.component';
import { CompanyDoesNotExistComponent } from './company-does-not-exist/company-does-not-exist.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    VacancyComponent,
    TopBarComponent,
    CompanyComponent,
    CompanyDoesNotExistComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
