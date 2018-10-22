import { Component, OnInit, Injectable } from '@angular/core';
import {Report} from '../_models/reports';
@Injectable()
@Component({
  selector: 'app-report-component',
  templateUrl: './report-component.component.html',
  styleUrls: ['./report-component.component.css']
})
export class ReportComponentComponent implements OnInit {
  report: Report[] = [{
    invoiceId: 32342,
    vendorCode: 'vendorCode',
    vendorName:'New Stuff',
    createdDate: new Date(),
    action:'authorized',
    createdBy: 'James',
    userId: 33,
    entityId: 23423
  },{
    invoiceId: 50333,
    vendorCode: 'OJD88',
    vendorName:'New Stuff',
    createdDate: new Date(),
    action:'authorized',
    createdBy: 'Fred',
    userId: 23,
    entityId: 23423
  },{
    invoiceId: 32342,
    vendorCode: 'OJD88',
    vendorName:'vendorName',
    createdDate: new Date(),
    action:'action',
    createdBy: 'createdBy',
    userId: 33,
    entityId: 23423
  },{
    invoiceId: 32342,
    vendorCode: 'vendorCode',
    vendorName:'New Stuff',
    createdDate: new Date(),
    action:'action',
    createdBy: 'createdBy',
    userId: 33,
    entityId: 23423
  }]
  constructor( ) {}
    
  ngOnInit() {
  }

}
