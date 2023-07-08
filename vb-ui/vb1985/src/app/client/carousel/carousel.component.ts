import { Component } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  constructor(private util: UtilService) { }
  public carousel: any = [];

  ngOnInit(): void {
    this.util.getCarousel().subscribe(data => {
      this.carousel = data;
    });

  }
}
