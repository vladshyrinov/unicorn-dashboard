import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map } from 'rxjs/operators';

import { ISearchResult } from '../models/search-result.interface';

@Injectable()
export class SearchService {
    private defaultPageSize = 10;

    private apiUrl =
        `https://api.stackexchange.com/2.2/search?pagesize=${this.defaultPageSize}&order=desc&sort=activity&site=stackoverflow&intitle=`;

    constructor(private http: HttpClient) { }

    search(keyword: string, pageSize?: number): Observable<any> {
        if (pageSize) {
            this.apiUrl = this.apiUrl.replace(`pagesize=${this.defaultPageSize}`, `pagesize=${pageSize}`);
        }

        return this.http.get(this.apiUrl + keyword).pipe(
            map((data: ISearchResult) => {
                console.log('API USAGE: ' + data.quota_remaining + ' of ' + data.quota_max + ' requests available');
                return data.items.sort((a, b) => b.creation_date - a.creation_date);
            }),
            catchError((err: Error) => {
                console.log(err.message);
                return of(null);
            })
        );
    };
}
