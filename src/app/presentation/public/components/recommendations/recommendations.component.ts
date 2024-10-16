import { Component, ElementRef, signal, ViewChild } from '@angular/core';

@Component({
  selector: 'app-recommendations',
  standalone: true,
  imports: [],
  templateUrl: './recommendations.component.html',
  styleUrl: './recommendations.component.scss',
})
export class RecommendationsComponent {

  @ViewChild('videoPlayer', { static: false }) videoPlayer!: ElementRef<HTMLVideoElement>;
  public changeClick = signal(false);

  playVideo(): void {
    const video: HTMLVideoElement = this.videoPlayer.nativeElement;
    video.controls = true;
    video.play();
    this.changeClick.set(true);
  }

}
