import { Component, Inject, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-youtube-video',
  standalone: true,
  imports: [],
  template: `<div [innerHTML]="trustedHtml"></div>`
})
export class YoutubeVideoComponent implements OnInit{

  @Input({ required: true }) videoId: string;
  trustedHtml: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {}

  /* seule solution trouvée pour que usercentrics gère les iframes dans les routes */
  ngOnInit() {
    let unsafeHtml:string = 'videoId must match the expected pattern';
    if(/^[A-Za-z0-9_\-]{11}$/.test(this.videoId)) {
      unsafeHtml = `<iframe 
  width="560" 
  height="315" 
  uc-src="https://www.youtube.com/embed/${this.videoId}"
  frameborder="0" 
  allowfullscreen>
</iframe>`;
    }
    this.trustedHtml = this.sanitizer.bypassSecurityTrustHtml(unsafeHtml);
  }
}
