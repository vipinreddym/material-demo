import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { DemoComponent } from './demo/demo.component';
import { PracComponent } from './prac/prac.component';
import { ModelDemoComponent, DialogOverviewExampleDialog } from './model-demo/model-demo.component';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';

const routes: Routes = [

  { path: '', component: SampleComponent ,children: [


    // { path: 'dashboard', loadChildren: "../dashboard/dashboard.module#DashboardModule" },
    { path: '', redirectTo: 'demo', pathMatch: "full" },
    { path: "demo",component:DemoComponent},
    { path: "prac", component:PracComponent},
    { path: "model", component:ModelDemoComponent}
  ]}
 

]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MaterialModuleModule,
    FileUploadModule
    
  ],
  entryComponents: [DialogOverviewExampleDialog],
  declarations: [SampleComponent, DemoComponent, PracComponent, ModelDemoComponent,
    DialogOverviewExampleDialog]
})
export class SampleModule { }
