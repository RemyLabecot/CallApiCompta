import { Component, OnInit } from '@angular/core';
import { OperationService } from '../operation.service';
import { IOperation } from '../operation';
import { map } from 'rxjs/operators';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-operation-list',
  templateUrl: './operation-list.component.html',
  styleUrls: ['./operation-list.component.css']
})
export class OperationListComponent implements OnInit {

  public operations: IOperation[];


  constructor(private _operationService: OperationService, public datepipe: DatePipe) { }

  ngOnInit() {
    this._operationService.getOperations()
    .subscribe(data => {
      const res = data.operations;
      for (const i of res) {
        let dd: string;
        dd = i.Date.substring(0, 2);
        let mm: string;
        mm = i.Date.substring(3, 5);
        const yyyy = i.Date.substring(6, 10);
        const newString = mm + '/' + dd + '/' + yyyy;
        i.Date = newString;
        i.Date = this.datepipe.transform(new Date(i.Date), 'dd/MM/yy');
       }
      this.operations = data.operations;
    });
  }
}
