import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  constructor(private util: UtilService,  private sanitizer: DomSanitizer) { }
  public services: any = [];

  ngOnInit(): void {
    this.util.getServices().subscribe(data => {
      this.services = data;
    });
  }

  sanitizeSVG(svgContent: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(svgContent);
  }
  
}
