import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ClientRoutingModule } from './client/client-routing.module';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './client/header/header.component';
import { FooterComponent } from './client/footer/footer.component';
import { PortfolioComponent } from './client/portfolio/portfolio.component';
import { CarouselComponent } from './client/carousel/carousel.component';
import { GalleryComponent } from './client/gallery/gallery.component';
import { ServicesComponent } from './client/services/services.component';
import { ContactComponent } from './client/contact/contact.component';
import { TeamComponent } from './client/team/team.component';
import { LoginComponent } from './admin/login/login.component';
import { HomeComponent } from './client/home/home.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AddEmployeeComponent } from './admin/add-employee/add-employee.component';
import { ManageGalleryComponent } from './admin/manage-gallery/manage-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    PortfolioComponent,
    CarouselComponent,
    GalleryComponent,
    ServicesComponent,
    ContactComponent,
    TeamComponent,
    LoginComponent,
    HomeComponent,
    AdminHomeComponent,
    AdminHeaderComponent,
    AddEmployeeComponent,
    ManageGalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientRoutingModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
