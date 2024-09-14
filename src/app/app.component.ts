import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UCUICMPEvent, UCUICMPEventType } from '../types';

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
  consentGiven = false;

  @HostListener('window:UC_UI_CMP_EVENT', ['$event'])
  onUsercentricsEvent(event: UCUICMPEvent) {
    console.log('Usercentrics event:', event.detail.type);
    switch (event.detail.type) {
      case UCUICMPEventType.ACCEPT_ALL:
        this.consentGiven = true;
        break;
      case UCUICMPEventType.DENY_ALL:
        this.consentGiven = false;
        break;
    }
  }

  openCMP() {
    if (window.UC_UI) {
      window.UC_UI.showFirstLayer();
    }
  }
}
