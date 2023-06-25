import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children:[
      {path: '', component: LoginComponent, data: { title: 'VB Admin'}},
      {path: 'home', component: AdminHomeComponent, data: { title: 'Admin Home'}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
