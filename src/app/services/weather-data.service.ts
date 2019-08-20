import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IWeatherResultItem } from '../models/weather-result-item.interface';

@Injectable()
export class WeatherDataService {

  private readonly apiUrl = '/api/weatherdata';

  constructor(private http: HttpClient) { }

  getWeather(entriesAmount?: number): Observable<IWeatherResultItem[]> {
    let params = new HttpParams();
    
    if (entriesAmount) {
      params = params.append('entriesamount', `${entriesAmount}`);
    }

    return this.http.get(this.apiUrl, {params}) as Observable<IWeatherResultItem[]>;
  }
}
