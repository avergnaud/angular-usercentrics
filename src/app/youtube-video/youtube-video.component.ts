import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Component({
  selector: 'app-youtube-video',
  standalone: true,
  imports: [],
  templateUrl: './youtube-video.component.html',
  styleUrl: './youtube-video.component.css'
})
export class YoutubeVideoComponent {
 
  videoUrlString:string = "https://www.youtube.com/embed/dQw4w9WgXcQ";
  videoUrl:SafeResourceUrl;

  constructor(private sanitizer:DomSanitizer) {
    //debugger
    if (window.UC_UI && window.UC_UI.isInitialized()) {
      console.log('UC UI is already initialized');
    } else {
      console.log('UC UI is not initialized');
    }
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrlString);
  }
}
