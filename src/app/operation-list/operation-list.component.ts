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
  public dateMin: Date;
  public dateMax: Date;

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
        const res = data.operations;
        // for (const i of res) {
        //   this.invertDateFormat(i.Date);
        // }
        this.operations = data.operations;
        console.log(this.dateMin);
        console.log(this.dateMax);
        this.operationSelected = this.operations
        .filter(x =>
          x.RIB === this.ribSelected &&
            (this.invertDateFormat(x.Date) > this.dateMin && this.invertDateFormat(x.Date) < this.dateMax));
      });
  }

  invertDateFormat(date: Date): Date {
    let stringDate: string;
    stringDate = date.toString();
    let dd: string;
    dd = stringDate.substring(0, 2);
    let mm: string;
    mm = stringDate.substring(3, 5);
    const yyyy = stringDate.substring(6, 10);
    const newStringDate = mm + '/' + dd + '/' + yyyy;
    let result: Date;
    result = new Date(newStringDate);
    return result;
  }
}
