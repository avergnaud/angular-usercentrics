import { Component, Inject, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-youtube-video',
  standalone: true,
  imports: [],
  template: `<div [innerHTML]="trustedHtml"></div>`
})
export class YoutubeVideoComponent implements OnInit{

  @Input({ required: true }) videoId: string;
  private readonly sanitizer= Inject(DomSanitizer);
  trustedHtml: string;


  ngOnInit() {
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
