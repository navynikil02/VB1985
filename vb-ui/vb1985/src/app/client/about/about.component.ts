import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  showTeam: boolean = true;

  constructor (private router: Router) {
    router.events.subscribe(() => {
      if (NavigationEnd) {
        if (router.url == '/about-us') {
          this.showTeam = true;
        } else {
          this.showTeam = false;
        }
      }
    });
  }
}
