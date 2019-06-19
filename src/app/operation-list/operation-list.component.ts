import { Component, OnInit } from '@angular/core';
import { OperationService } from '../operation.service';
import { IOperation } from '../operation';
import { map, groupBy } from 'rxjs/operators';
import { DatePipe } from '@angular/common';

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

  constructor(private _operationService: OperationService, public datepipe: DatePipe) { }

  ngOnInit() {
    this._operationService.getOperations()
      .subscribe(data => {
        this.operations = data.operations;
      });
  }

  getSelectedRib() {
    this._operationService.getOperations()
      .subscribe(data => {
        this.operations = data.operations;
        this.operationSelected = this.operations
          .filter(x =>
            x.RIB === this.ribSelected &&
              (this.invertDateFormat(x.Date) > this.dateMin && this.invertDateFormat(x.Date) < this.dateMax));
      });
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
