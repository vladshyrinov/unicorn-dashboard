import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from 'app/services/weather-data.service';
import { SearchService } from '../../services/search.service';

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
    this.weatherDataService.getWeather().subscribe((data: any) => {
      this.weatherData = data;
      console.log('data', data)
    })
  }
}
