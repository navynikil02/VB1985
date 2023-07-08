import { Component } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  public images: any = [];
  selectedCategory: string = 'Wedding';

  constructor(private util: UtilService) { }

  ngOnInit(): void {
    this.util.getGallery().subscribe(data => {
      this.images = data;
    });

  }

  isActiveCategory(category: string): boolean {
    return this.selectedCategory === category;
  }

  filterImages(category: string): void {
    this.selectedCategory = category;
  }

  getFilteredImages() {
    if (this.selectedCategory === 'all') {
      return this.images;
    } else {
      return this.images.filter((image: { category: string; }) => image.category === this.selectedCategory);
    }
  }
}
