import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RightLocalComponent } from './right-local/right-local.component';
import { RightGlobalComponent } from './right-global/right-global.component';
import { RightPcrComponent } from './right-pcr/right-pcr.component';
import { DetailsHospitalsComponent } from './details-hospitals/details-hospitals.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    DashboardComponent,
    RightLocalComponent,
    RightGlobalComponent,
    RightPcrComponent,
    DetailsHospitalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
