import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from '../../services/weather-data.service';
import { SearchService } from '../../services/search.service';
import { timer } from 'rxjs/observable/timer';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { IWeatherResultItem } from '../../models/weather-result-item.interface';

@Component({
  selector: 'app-info-container',
  templateUrl: './info-container.component.html',
  styleUrls: ['./info-container.component.scss']
})
export class InfoContainerComponent implements OnInit {

  weatherData: any;

  constructor(private searchService: SearchService, 
          private weatherDataService: WeatherDataService) { }

  ngOnInit() {
    this.getWeatherData().subscribe((data: any) => {
      this.weatherData = data;
    });
  }

  setBell(): void {
    console.log('dzin');
    timer(3000, 5000).pipe(
      switchMap(() => this.getWeatherData())
    ).subscribe((data: any) => {
      this.weatherData = data;
    });
  }

  getWeatherData(): Observable<IWeatherResultItem[]> {
    return this.weatherDataService.getWeather();
  }
}
