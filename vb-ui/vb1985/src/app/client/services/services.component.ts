import { Component } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  constructor(private util: UtilService) { }
  public services: any = [];

  ngOnInit(): void {
    this.util.getServices().subscribe(data => {
      this.services = data;
    });

  }
}
