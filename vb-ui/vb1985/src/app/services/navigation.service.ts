import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router) { }

  navigateAndScroll(url: string): void {
    const scrollToOptions: ScrollToOptions = { top: 0, behavior: 'smooth' };

    this.router.navigateByUrl(url)
      .then(() => {
        window.scrollTo(scrollToOptions);
      });
  }
}
