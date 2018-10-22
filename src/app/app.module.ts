import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app.routing-module'
import { AppComponent } from './app.component';
import { ReportComponentComponent } from './report-component/report-component.component';
import 'hammerjs';

@NgModule({
   declarations: [
      AppComponent,
      ReportComponentComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
