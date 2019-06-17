import { Component, OnInit } from '@angular/core';
import { OperationService } from '../operation.service';
import { IOperation } from '../operation';
import { IStatut } from '../statut';

@Component({
  selector: 'app-operation-list',
  templateUrl: './operation-list.component.html',
  styleUrls: ['./operation-list.component.css']
})
export class OperationListComponent implements OnInit {

  public operations: IOperation[];


  constructor(private _operationService: OperationService) { }

  ngOnInit() {
    this._operationService.getOperations()
    .subscribe(data => {
      let statut: IStatut;
      statut = data;
      this.operations = statut.operations; });
  }
}
