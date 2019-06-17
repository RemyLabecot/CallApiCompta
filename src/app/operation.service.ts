import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStatut } from './statut';

@Injectable()
export class OperationService {

    private _url: string = 'http://agrcf.lib.id/exercice@dev/';

    constructor(private http: HttpClient) {}

    getOperations(): Observable<IStatut> {
        return this.http.get<IStatut>(this._url);
    }
}
