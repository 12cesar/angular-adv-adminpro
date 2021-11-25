import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProgressComponent } from './admin/progress/progress.component';
import { Grafica1Component } from './admin/grafica1/grafica1.component';
import { NopagefoundComponent } from './admin/nopagefound/nopagefound.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes=[
  {
    path:'admin', 
    component:AdminComponent,
    children:[
      {path:'dashboard', component:DashboardComponent},
      {path:'progress', component:ProgressComponent},
      {path:'grafica1', component:Grafica1Component},
      {path:'', redirectTo:'/admin/dashboard', pathMatch:'full'},
    ]
  },
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  //{path:'', redirectTo:'/dashboard', pathMatch:'full'},
  {path:'**', component:NopagefoundComponent},
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
