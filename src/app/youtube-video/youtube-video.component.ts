import { Component, OnInit } from '@angular/core';
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
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrlString);
   }

  // ngOnInit()
  // ngDoCheck()
  // ngAfterContentInit()
  // ngAfterContentChecked()
  // ngAfterViewInit()
  // ngAfterViewChecked()
}
