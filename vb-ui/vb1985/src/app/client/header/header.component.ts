import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private navigationService: NavigationService, private router: Router) { }

  reloadPage(url: string): void {
    this.navigationService.navigateAndScroll(url);
  }

  isFixedHeader = false;
  isHomePage = false;
  isHeaderActive = false;

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isHomePage = event.url === '/';
        this.setIsFixedHeader();
        this.setIsHeaderActive();
      }
    });

    this.isHomePage = this.router.url === '/';
    this.setIsFixedHeader();
    this.setIsHeaderActive();
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.setIsHeaderActive();
  }

  private setIsFixedHeader() {
    this.isFixedHeader = this.isHomePage;
  }

  private setIsHeaderActive() {
    this.isHeaderActive = this.isHomePage && window.pageYOffset < 20;
  }
}
