import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IOperation } from './operation';
import { Observable } from 'rxjs';

@Injectable()
export class OperationService {

    private _url: string = "http://agrcf.lib.id/exercice@dev/";

    constructor(private http: HttpClient) {}
    
    getOperations(): Observable<IOperation[]> {
        return this.http.get<IOperation[]>(this._url);
    }
}