import { Component } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private navigationService: NavigationService) { }

  reloadPage(url: string): void {
    this.navigationService.navigateAndScroll(url);
  }
  
}
