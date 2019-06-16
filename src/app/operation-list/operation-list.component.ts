import { Component, OnInit } from '@angular/core';
import { OperationService } from '../operation.service';
import { IOperation } from '../operation';

@Component({
  selector: 'app-operation-list',
  templateUrl: './operation-list.component.html',
  styleUrls: ['./operation-list.component.css']
})
export class OperationListComponent implements OnInit {

  public operations :IOperation[] =  [];
  public emps = [];

  constructor(private _operationService : OperationService) { }

  ngOnInit() {
    this._operationService.getOperations()
    .subscribe(data => this.operations = data);

    //test transform to array
    let arr = [];
    // Object.keys(this.operations).map(function(key) {
    //   arr.push({[key]: this.operations[key]})
    //   return arr;
    // });
    arr = Object.keys(this.operations);
    console.log(arr);

  }

}
