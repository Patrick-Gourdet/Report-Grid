import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app.routing-module'
import { AppComponent } from './app.component';
import { ReportComponentComponent } from './report-component/report-component.component';
import 'hammerjs';
import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule} from '@angular/material/Icon';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
@NgModule({
   declarations: [
      AppComponent,
      ReportComponentComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatMenuModule,
      MatIconModule,
      MatButtonModule,
      MatToolbarModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
