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

    /*
  ngOnInit() {
    window.UC_UI.restartEmbeddings();
    window.UC_UI.enableScriptsForServicesWithConsent();
  }
  ngDoCheck() {
    console.log('UC_UI.restartEmbeddings()');
    window.UC_UI.restartEmbeddings();
  }
    
  ngAfterContentInit() {
    window.UC_UI.restartEmbeddings();
    window.UC_UI.enableScriptsForServicesWithConsent();
  }
    */
  /*
  ngAfterContentChecked() {
    console.log('UC_UI.restartEmbeddings()');
    window.UC_UI.restartEmbeddings();
  }
  même pas de contenu
  */
 /*
  ngAfterViewInit() {
    console.log('UC_UI.restartEmbeddings()');
    window.UC_UI.enableScriptsForServicesWithConsent();
  }
  ngAfterViewChecked() {
    console.log('UC_UI.restartEmbeddings()');
    window.UC_UI.restartEmbeddings();
    window.UC_UI.enableScriptsForServicesWithConsent();
  }
    */
}
