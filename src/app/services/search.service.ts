import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ISearchResult } from '../models/search-result.interface';

@Injectable()
export class SearchService {

    private readonly apiUrl =
        'https://api.stackexchange.com/2.2/search?pagesize=20&order=desc&sort=activity&site=stackoverflow&intitle=';

    constructor(private http: HttpClient) { }

    search(keyword: string): Observable<ISearchResult> {
        return this.http.get(this.apiUrl + keyword).pipe(
            tap((data: ISearchResult) => {
                console.log('API USAGE: ' + data.quota_remaining + ' of ' + data.quota_max + ' requests available');
            }),
            catchError((err: Error) => {
                console.log(err.message);
                return Observable.of(null);
            })
        );
    };
}
