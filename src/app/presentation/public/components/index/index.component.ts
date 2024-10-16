import { Component, inject, OnInit, signal } from '@angular/core';
import { CounterNumberComponent } from "../../../../common/components/counter-number/counter-number.component";
import { LoaderService } from '../../../../common/services/loader.service';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CounterNumberComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent implements OnInit {

  public listVideo = signal([
    {
      id: 'video-1',
      title: 'INEL',
      url: 'videos/index.mp4?v=1.0',
      active: true
    },
    {
      id: 'video-2',
      title: 'INEL',
      url: 'videos/start_2.mp4?v=1.0',
      active: false
    }
  ]);
  public targetRating = signal(9.5);
  public currentRating = signal(1);
  public precision = signal(0.1);

  private readonly loaderService = inject(LoaderService);

  ngOnInit(): void {
    this.loaderService.loadingSubject.subscribe({
      next: (value) => {
        if (value) {
          this.startRating();
        }
      }
    })
  }

  handleActiveVideo(index: number){
    this.listVideo.update((video) => {
      video.forEach((video) => {
        video.active = false;
      });
      video[index].active = true;
      return video;
    })
  }

  startRating() {
    const duration = 2000; // Duración en milisegundos (2 segundos en este caso)
    const increment = (this.targetRating() - this.currentRating()) / (duration / 16); // Incremento por frame (~16ms)

    const ratingInterval = setInterval(() => {
      this.currentRating.set(this.currentRating() + increment);
      if (this.currentRating() >= this.targetRating()) {
        this.currentRating.set(this.targetRating());
        clearInterval(ratingInterval); // Detener el contador cuando llega al objetivo
      }
    }, 16); // Intervalo aproximado para 60 FPS (~16ms por frame)
  }

}
