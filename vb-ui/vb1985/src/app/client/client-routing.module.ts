import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  {
    path :'',
    component: ClientComponent,
    children : [
      {path: '', component: HomeComponent, data: { title: 'Video Boys - 1985'}},
      {path: 'gallery', component: GalleryComponent, data: { title: 'VB - Gallery'}},
      {path: '',
        redirectTo: '',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
