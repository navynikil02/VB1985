import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private http: HttpClient) { }

  public getCarousel() {
    return this.http.get('./assets/api/carousel.json');
  }
  
  public getServices() {
    return this.http.get('./assets/api/our-services.json');
  }

  public getGallery() {
    return this.http.get('./assets/api/gallery.json');
  }
}
