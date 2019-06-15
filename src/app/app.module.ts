import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { OperationService } from './operation.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OperationListComponent } from './operation-list/operation-list.component';

@NgModule({
  declarations: [
    AppComponent,
    OperationListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [OperationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
