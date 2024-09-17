import { Component } from '@angular/core';
import { YoutubeVideoComponent } from '../youtube-video/youtube-video.component';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [YoutubeVideoComponent],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css'
})
export class VideosComponent {

}
