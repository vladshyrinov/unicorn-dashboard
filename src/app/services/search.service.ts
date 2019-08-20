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
        let arr = [
            {
                "tags": [
                    "reactjs",
                    "typescript",
                    "openlayers",
                    "typescript-typings"
                ],
                "owner": {
                    "reputation": 59,
                    "user_id": 10218664,
                    "user_type": "registered",
                    "profile_image": "https://www.gravatar.com/avatar/8d766c1e7e48fe51a07f9d674d705f48?s=128&d=identicon&r=PG&f=1",
                    "display_name": "Sruthi",
                    "link": "https://stackoverflow.com/users/10218664/sruthi"
                },
                "is_answered": false,
                "view_count": 6,
                "answer_count": 0,
                "score": 0,
                "last_activity_date": 1565075751,
                "creation_date": 1565075751,
                "question_id": 57370776,
                "link": "https://stackoverflow.com/questions/57370776/how-to-fix-property-settileurlfunction-does-not-exist-on-type-tilesource-err",
                "title": "How to fix &#39;Property &#39;setTileUrlFunction&#39; does not exist on type TileSource&#39; error while using openlayers with typescript"
            },
            {
                "tags": [
                    "javascript",
                    "typescript",
                    "interface"
                ],
                "owner": {
                    "reputation": 61320,
                    "user_id": 1333873,
                    "user_type": "registered",
                    "accept_rate": 84,
                    "profile_image": "https://www.gravatar.com/avatar/7ae9b432531de46073888f1a49c2391c?s=128&d=identicon&r=PG",
                    "display_name": "Golo Roden",
                    "link": "https://stackoverflow.com/users/1333873/golo-roden"
                },
                "is_answered": true,
                "view_count": 27,
                "accepted_answer_id": 57370602,
                "answer_count": 1,
                "score": 2,
                "last_activity_date": 1565075549,
                "creation_date": 1564984734,
                "question_id": 57352897,
                "link": "https://stackoverflow.com/questions/57352897/doesnt-avoiding-the-initial-i-for-interfaces-in-typescript-lead-to-naming-confl",
                "title": "Doesn&#39;t avoiding the initial I for interfaces in TypeScript lead to naming conflicts?"
            },
            {
                "tags": [
                    "javascript",
                    "node.js",
                    "typescript"
                ],
                "owner": {
                    "reputation": 61320,
                    "user_id": 1333873,
                    "user_type": "registered",
                    "accept_rate": 84,
                    "profile_image": "https://www.gravatar.com/avatar/7ae9b432531de46073888f1a49c2391c?s=128&d=identicon&r=PG",
                    "display_name": "Golo Roden",
                    "link": "https://stackoverflow.com/users/1333873/golo-roden"
                },
                "is_answered": false,
                "view_count": 21,
                "answer_count": 0,
                "score": 1,
                "last_activity_date": 1565074576,
                "creation_date": 1565074576,
                "question_id": 57370508,
                "link": "https://stackoverflow.com/questions/57370508/is-it-possible-to-use-typed-streams-in-typescript",
                "title": "Is it possible to use typed streams in TypeScript?"
            },
            {
                "tags": [
                    "angular",
                    "typescript"
                ],
                "owner": {
                    "reputation": 1,
                    "user_id": 9292943,
                    "user_type": "registered",
                    "profile_image": "https://lh5.googleusercontent.com/-FaazrMmlC0o/AAAAAAAAAAI/AAAAAAAAACM/BLIopGP0lNA/photo.jpg?sz=128",
                    "display_name": "Faiz Shaikh",
                    "link": "https://stackoverflow.com/users/9292943/faiz-shaikh"
                },
                "is_answered": false,
                "view_count": 38,
                "answer_count": 2,
                "score": 0,
                "last_activity_date": 1565072962,
                "creation_date": 1565008113,
                "last_edit_date": 1565019747,
                "question_id": 57358628,
                "link": "https://stackoverflow.com/questions/57358628/i-have-an-error-in-autocomplete-returning-object-object-value-in-angular-types",
                "title": "I have an error in autocomplete returning [object Object] value in angular typescript"
            },
            {
                "tags": [
                    "typescript",
                    "react-native",
                    "expo",
                    "react-native-flatlist"
                ],
                "owner": {
                    "reputation": 1572,
                    "user_id": 617434,
                    "user_type": "registered",
                    "accept_rate": 50,
                    "profile_image": "https://www.gravatar.com/avatar/b74d2a24b280d62c67c156fba6ca25e0?s=128&d=identicon&r=PG",
                    "display_name": "Joel",
                    "link": "https://stackoverflow.com/users/617434/joel"
                },
                "is_answered": false,
                "view_count": 17,
                "answer_count": 0,
                "score": 1,
                "last_activity_date": 1565071318,
                "creation_date": 1565038284,
                "last_edit_date": 1565071318,
                "question_id": 57365951,
                "link": "https://stackoverflow.com/questions/57365951/how-to-handle-onpress-events-for-menus-lists-using-react-native-typescript",
                "title": "How to handle onPress events for menus/lists? (Using React Native + TypeScript)"
            },
            {
                "tags": [
                    "typescript"
                ],
                "owner": {
                    "reputation": 12933,
                    "user_id": 223863,
                    "user_type": "registered",
                    "accept_rate": 71,
                    "profile_image": "https://www.gravatar.com/avatar/b01afd17285985a1cab24d7e3fe91458?s=128&d=identicon&r=PG",
                    "display_name": "Exitos",
                    "link": "https://stackoverflow.com/users/223863/exitos"
                },
                "is_answered": false,
                "view_count": 16,
                "answer_count": 3,
                "score": 0,
                "last_activity_date": 1565068389,
                "creation_date": 1565064808,
                "question_id": 57368839,
                "link": "https://stackoverflow.com/questions/57368839/check-for-existence-of-array-item-before-accessing-it-in-typescript",
                "title": "Check For Existence Of Array Item Before Accessing It In TypeScript"
            },
            {
                "tags": [
                    "reactjs",
                    "typescript",
                    "react-router"
                ],
                "owner": {
                    "reputation": 2390,
                    "user_id": 130560,
                    "user_type": "registered",
                    "accept_rate": 61,
                    "profile_image": "https://www.gravatar.com/avatar/6f55836a4db8dbcdfb44eae071d36d66?s=128&d=identicon&r=PG",
                    "display_name": "29er",
                    "link": "https://stackoverflow.com/users/130560/29er"
                },
                "is_answered": true,
                "view_count": 17699,
                "accepted_answer_id": 48455101,
                "answer_count": 6,
                "score": 18,
                "last_activity_date": 1565067506,
                "creation_date": 1515730281,
                "last_edit_date": 1515732367,
                "question_id": 48219432,
                "link": "https://stackoverflow.com/questions/48219432/react-router-typescript-errors-on-withrouter-after-updating-version",
                "title": "React Router - Typescript errors on withRouter after updating version"
            },
            {
                "tags": [
                    "node.js",
                    "angular",
                    "typescript",
                    "pgadmin-4"
                ],
                "owner": {
                    "reputation": 1,
                    "user_id": 11884721,
                    "user_type": "registered",
                    "profile_image": "https://www.gravatar.com/avatar/ee9e5a39ff6ff6c987dcb6386ae3d164?s=128&d=identicon&r=PG&f=1",
                    "display_name": "Geetha",
                    "link": "https://stackoverflow.com/users/11884721/geetha"
                },
                "is_answered": false,
                "view_count": 16,
                "answer_count": 0,
                "score": -3,
                "last_activity_date": 1565064798,
                "creation_date": 1565064798,
                "question_id": 57368837,
                "link": "https://stackoverflow.com/questions/57368837/how-to-insert-textbox-values-into-database-table-using-angular-typescript-fronte",
                "title": "How to insert textbox values into database table using Angular Typescript frontend and backend nodejs without using any api?"
            },
            {
                "tags": [
                    "typescript",
                    "nativescript",
                    "barcode-scanner"
                ],
                "owner": {
                    "reputation": 1587,
                    "user_id": 3657140,
                    "user_type": "registered",
                    "accept_rate": 89,
                    "profile_image": "https://www.gravatar.com/avatar/faa80e9ff4894c8f571a8a2ede55a866?s=128&d=identicon&r=PG&f=1",
                    "display_name": "harrrrrrry",
                    "link": "https://stackoverflow.com/users/3657140/harrrrrrry"
                },
                "is_answered": false,
                "view_count": 9,
                "answer_count": 0,
                "score": 0,
                "last_activity_date": 1565060127,
                "creation_date": 1565060127,
                "question_id": 57368317,
                "link": "https://stackoverflow.com/questions/57368317/how-to-deploy-nativescript-barcodescanner-in-typescript",
                "title": "How to deploy nativescript-barcodescanner in typescript?"
            },
            {
                "tags": [
                    "typescript",
                    "cucumber",
                    "cucumberjs"
                ],
                "owner": {
                    "reputation": 3313,
                    "user_id": 4695271,
                    "user_type": "registered",
                    "accept_rate": 69,
                    "profile_image": "https://i.stack.imgur.com/fNlXZ.png?s=128&g=1",
                    "display_name": "x80486",
                    "link": "https://stackoverflow.com/users/4695271/x80486"
                },
                "is_answered": false,
                "view_count": 23,
                "answer_count": 1,
                "score": 0,
                "last_activity_date": 1565059312,
                "creation_date": 1564888888,
                "last_edit_date": 1565059312,
                "question_id": 57343544,
                "link": "https://stackoverflow.com/questions/57343544/typescript-module-resolution-doesnt-quite-work-with-cucumber-js",
                "title": "TypeScript Module Resolution doesn&#39;t quite work with Cucumber-js"
            }
        ];
        
        if(pageSize) {
            arr = arr.slice(0, pageSize);
            this.apiUrl = this.apiUrl.replace(`pagesize=${this.defaultPageSize}`, `pagesize=${pageSize}`)
        }

        arr.sort((a, b) => b.creation_date - a.creation_date);

        return of(arr);
        // return this.http.get(this.apiUrl + keyword).pipe(
        //     map((data: ISearchResult) => {
        //         console.log('API USAGE: ' + data.quota_remaining + ' of ' + data.quota_max + ' requests available');
        //         return data.items.sort((a, b) => b.creation_date - a.creation_date);
        //     }),
        //     catchError((err: Error) => {
        //         console.log(err.message);
        //         return of(null);
        //     })
        // );
    };
}
