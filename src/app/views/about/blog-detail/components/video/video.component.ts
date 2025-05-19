import { Component } from '@angular/core'
import { LightgalleryModule } from 'lightgallery/angular'
import lgVideo from 'lightgallery/plugins/video'

@Component({
  selector: 'blog-detail-video',
  standalone: true,
  imports: [LightgalleryModule],
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss',
})
export class VideoComponent {
  settings = {
    counter: false,
    plugins: [lgVideo],
    selector: 'a',
    download: false,
  }
}
