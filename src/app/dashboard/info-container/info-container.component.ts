import { Component, OnInit, Input } from '@angular/core';

import { timer } from 'rxjs/observable/timer';
import { switchMap, mergeMap, map } from 'rxjs/operators';
import { Observable, Subscribable } from 'rxjs/Observable';
import {forkJoin} from 'rxjs/observable/forkJoin';

import { WeatherDataService } from '../../services/weather-data.service';
import { SearchService } from '../../services/search.service';
import { IWeatherResultItem } from '../../models/weather-result-item.interface';
import { ISearchResult } from '../../models/search-result.interface';
import { IResultItem } from '../../models/result-item.interface';
import { ISearchResultItem } from '../../models/search-result-item.interface';
import { of } from 'rxjs/observable/of';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-info-container',
  templateUrl: './info-container.component.html',
  styleUrls: ['./info-container.component.scss']
})
export class InfoContainerComponent implements OnInit {

  public resultData: IResultItem[];
  public bellSubscription: Subscription;
  public bellSubscribed = false;
  public bellInscription = 'OFF';

  @Input() public container: any;

  constructor(private searchService: SearchService,
          private weatherDataService: WeatherDataService) {}

  ngOnInit() {
    this.requestResultData(this.container.type).subscribe((data: IResultItem[]) => {
      this.resultData = data;

      console.log('info-container: ', this.resultData);
    });
  }

  public requestResultData(containerType: number) {
    switch (containerType) {
      case 1:
        return this.getSearchData('typescript');
      case 2:
        return this.getSearchData('angular2');
      case 3:
        return this.getCombinedData('weather');
      default:
        return of(null);
    }
  }

  public getCombinedData(keyword: string): Observable<IResultItem[]> {
    return forkJoin(this.getWeatherData(), this.getSearchData(keyword))
    .pipe(
      map(([arr1, arr2]) => {
        return this.combineArrays(arr1, arr2);
      })
    );
  }

  public getWeatherData(): Observable<IWeatherResultItem[]> {
    return this.weatherDataService.getWeather();
  }

  public getSearchData(keyword: string): Observable<any> {
    return this.searchService.search(keyword);
  }

  public setBell(): void {
    if (!this.bellSubscribed) {

      this.bellSubscription = timer(0, 1000).pipe(
        switchMap(() => this.getSearchData('angular2'))
        ).subscribe((data: any) => {
          this.resultData = data;
          console.log(data);
        });

    } else {
      this.bellSubscription.unsubscribe();
    }

    this.bellSubscribed = !this.bellSubscribed;
    this.bellInscription = this.bellSubscribed ? 'ON' : 'OFF';
    console.log('dzin', this.bellSubscribed);
    console.log(this.bellSubscription);
  }

  private combineArrays(fArr: IWeatherResultItem[], sArr: ISearchResultItem[]): any[] {
    const combinedArr = [];

    while (fArr.length || sArr.length) {
      if (fArr.length) {
        combinedArr.push(fArr.pop());
      }

      if(sArr.length) {
        combinedArr.push(sArr.pop());
      }
    }

    return combinedArr;
  }
}
