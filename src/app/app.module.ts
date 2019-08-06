import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { SearchService } from './services/search.service';
import { AppRoutingModule } from './app.routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutModule } from './core/layout/layout.module';
import { SearchComponent } from './search/search.component';
import { InfoContainerComponent } from './dashboard/info-container/info-container.component';
import { InfoEntryComponent } from './dashboard/info-entry/info-entry.component';
import { WeatherDataService } from './services/weather-data.service';
import { weatherInterceptor } from './services/weather.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SearchComponent,
    InfoContainerComponent,
    InfoEntryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

    LayoutModule,
    AppRoutingModule
  ],
  providers: [
    weatherInterceptor,
    SearchService,
    WeatherDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
