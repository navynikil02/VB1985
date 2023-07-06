import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

import { LoginComponent } from './login/login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ManageGalleryComponent } from './manage-gallery/manage-gallery.component';

@NgModule({
  declarations: [
    AdminComponent,
    LoginComponent,
    AdminHomeComponent,
    AdminHeaderComponent,
    AddEmployeeComponent,
    ManageGalleryComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }