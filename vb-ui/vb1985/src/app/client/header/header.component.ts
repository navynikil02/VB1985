import { Component } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private navigationService: NavigationService) { }

  reloadPage(url: string): void {
    this.navigationService.navigateAndScroll(url);
  }

}
