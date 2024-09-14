import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UCUICMPEvent, UCUICMPEventType } from '../types';
import { ConsentService } from './consent.service';

declare global {
  interface Window {
    UC_UI: any;
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-usercentrics';

  constructor(public consentService: ConsentService) { }

  @HostListener('window:UC_UI_CMP_EVENT', ['$event'])
  onUsercentricsEvent(event: UCUICMPEvent) {
    switch (event.detail.type) {
      case UCUICMPEventType.ACCEPT_ALL:
        this.consentService.consentGiven = true;
        break;
      case UCUICMPEventType.DENY_ALL:
        this.consentService.consentGiven = false;
        break;
    }
  }

  openCMP() {
    if (window.UC_UI) {
      window.UC_UI.showFirstLayer();
    }
  }
}
