import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-youtube-video',
  standalone: true,
  imports: [],
  templateUrl: './youtube-video.component.html',
  styleUrl: './youtube-video.component.css'
})
export class YoutubeVideoComponent {

  @Input() videoId: string;

  trustedHtml: any;

  constructor(private sanitizer: DomSanitizer) {
    const unsafeHtml = `<iframe 
  width="560" 
  height="315" 
  uc-src="https://www.youtube.com/embed/${this.videoId}"
  frameborder="0" 
  allowfullscreen>
</iframe>`;

    this.trustedHtml = this.sanitizer.bypassSecurityTrustHtml(unsafeHtml);
  }

}
