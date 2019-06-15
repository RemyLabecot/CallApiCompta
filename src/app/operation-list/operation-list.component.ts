import { Component, OnInit } from '@angular/core';
import { OperationService } from '../operation.service';

@Component({
  selector: 'app-operation-list',
  templateUrl: './operation-list.component.html',
  styleUrls: ['./operation-list.component.css']
})
export class OperationListComponent implements OnInit {

  public operations =  [];

  constructor(private _operationService : OperationService) { }

  ngOnInit() {
    this._operationService.getOperations()
    .subscribe(data => this.operations = data);
    
  }

}
