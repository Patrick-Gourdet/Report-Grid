import { NgModule } from '@angular/core';
import {Routes , RouterModule} from '@angular/router';
import {ReportComponentComponent} from './report-component/report-component.component'

const appRoutes: Routes = [
    {path: '', component: ReportComponentComponent}
]


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }