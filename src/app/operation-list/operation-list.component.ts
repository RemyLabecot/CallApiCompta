import { Component, OnInit } from '@angular/core';
import { OperationService } from '../operation.service';
import { IOperation } from '../operation';
import { DatePipe } from '@angular/common';
import { IStatut } from '../statut';

@Component({
  selector: 'app-operation-list',
  templateUrl: './operation-list.component.html',
  styleUrls: ['./operation-list.component.css']
})
export class OperationListComponent implements OnInit {

  public operations: IOperation[];
  public operationSelected: IOperation[];
  public ribSelected: string;
  public dateMin: string;
  public dateMax: string;
  public message: string;

  constructor(private _operationService: OperationService, public datepipe: DatePipe) { }

  ngOnInit() {
  }

  getOperationsByRibAndDate() {

    this._operationService.getOperations().subscribe(
      data => {
        this.operations = data.operations;
        this.operationSelected = this.operations.
          filter(x =>
            x.RIB === this.ribSelected &&
            (this._operationService.invertDateFormat(x.Date) > this.dateMin
              && this._operationService.invertDateFormat(x.Date) < this.dateMax));
      },
      err => {this.message = 'BOUM'
      console.log('Erreur ' + err);}
    );
  }
}
