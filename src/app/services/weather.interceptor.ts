import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import * as data from './weatherdata.json';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class WeatherInterceptor implements HttpInterceptor {

    entriesAmount = 5;

    constructor() {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> { 
        let weatherData: any = data;

        return Observable.of({}).mergeMap(() => {

            if (request.url.includes('/api/weatherdata') && request.method === 'GET') {

                const entriesAmount = parseInt(request.params.get('entriesamount'), 10);

                if (!isNaN(entriesAmount)) {
                    this.entriesAmount = entriesAmount;
                }

                weatherData = this.chooseRandomizedWeather(weatherData);

                return Observable.of(new HttpResponse({ status: 200, body: weatherData }));
            }

            return next.handle(request);
        }).delay(500);
    }

    chooseRandomizedWeather(weatherData: any[]): any[] {
        const maxIdx = weatherData.length - 1;
        let weatherDataToReturn = new Array(this.entriesAmount);

        for (let i = 0; i < weatherDataToReturn.length; i++) {
            weatherDataToReturn[i] = weatherData[Math.round(Math.random() * maxIdx)];
        }

        return weatherDataToReturn;
    }
}

export let weatherInterceptor = {
    provide: HTTP_INTERCEPTORS,
    useClass: WeatherInterceptor,
    multi: true
};
