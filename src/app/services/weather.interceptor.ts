import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { mergeMap } from 'rxjs/operators';
import * as data from './weatherdata.json';

@Injectable()
export class WeatherInterceptor implements HttpInterceptor {

    entriesAmount = 5;

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let weatherData: any = data;

        return of({}).pipe(
            mergeMap(() => {

                if (request.url.includes('/api/weatherdata') && request.method === 'GET') {

                    const entriesAmount = parseInt(request.params.get('entriesamount'), 10);

                    if (!isNaN(entriesAmount)) {
                        this.entriesAmount = entriesAmount;
                    }

                    weatherData = this.chooseRandomizedWeather(weatherData);

                    return of(new HttpResponse({ status: 200, body: weatherData }));
                }

                return next.handle(request);
            })
        );
    }

    chooseRandomizedWeather(weatherData: any[]): any[] {
        const maxIdx = weatherData.length - 1;
        const weatherDataToReturn = new Array(this.entriesAmount);

        const rndStartIdx = Math.round(Math.random() * maxIdx) - 4;

        for (let i = 0; i < weatherDataToReturn.length; i++) {
            weatherDataToReturn[i] = weatherData[rndStartIdx + i];
        }

        return weatherDataToReturn;
    }
}

export let weatherInterceptor = {
    provide: HTTP_INTERCEPTORS,
    useClass: WeatherInterceptor,
    multi: true
};
