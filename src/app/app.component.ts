import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'custom-icon-angular-material';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitzer: DomSanitizer) {
    
    this.matIconRegistry.addSvgIcon('customIcon1', this.domSanitzer.bypassSecurityTrustResourceUrl('assets/icons/customIcon1.svg'));
    this.matIconRegistry.addSvgIcon('customIcon2', this.domSanitzer.bypassSecurityTrustResourceUrl('assets/icons/customIcon2.svg'));
    this.matIconRegistry.addSvgIcon('customIcon3', this.domSanitzer.bypassSecurityTrustResourceUrl('assets/icons/customIcon3.svg'));
  }
}
