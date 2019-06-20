import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStatut } from './statut';

@Injectable()
export class OperationService {

    private _url: string = 'http://agrcf.lib.id/exercice@dev/';

    constructor(private http: HttpClient) { }

    getOperations(): Observable<IStatut> {
        return this.http.get<IStatut>(this._url);
    }

    invertDateFormat(date: string): string {
        // come with 24/04/2017 format
        let dd: string;
        dd = date.substring(0, 2);
        let mm: string;
        mm = date.substring(3, 5);
        const yyyy = date.substring(6, 10);
        const newStringDate = yyyy + '-' + mm + '-' + dd;
        return newStringDate;
    }
}
