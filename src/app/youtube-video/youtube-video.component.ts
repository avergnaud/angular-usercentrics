import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ConsentService } from '../consent.service';

@Component({
  selector: 'app-youtube-video',
  standalone: true,
  imports: [],
  templateUrl: './youtube-video.component.html',
  styleUrl: './youtube-video.component.css'
})
export class YoutubeVideoComponent {
  @Input() videoId: string;
  safeUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer,
    public consentService: ConsentService
  ) { }

  ngOnInit() {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.videoId}`);
  }
}
