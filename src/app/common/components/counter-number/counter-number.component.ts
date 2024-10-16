import { DecimalPipe } from '@angular/common';
import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-counter-number',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './counter-number.component.html',
  styleUrl: './counter-number.component.scss'
})
export class CounterNumberComponent implements OnInit {

  @Input() targetNumber = 24000;
  currentNumber = signal(0);
  private readonly loaderService = inject(LoaderService);

  ngOnInit(): void {
    this.loaderService.loadingSubject.subscribe({
      next: (value) => {
        if (value) {
          this.startCounter();
        }
      }
    })
  }

  startCounter() {
    const duration = 2000; // Duración en milisegundos (2 segundos en este caso)
    const increment = Math.ceil(this.targetNumber / (duration / 16)); // Incremento en cada frame (~16ms)

    const counterInterval = setInterval(() => {
      this.currentNumber.update((value) => value + increment);
      if (this.currentNumber() >= this.targetNumber) {
        this.currentNumber.set(this.targetNumber);
        clearInterval(counterInterval); // Detener el contador cuando llega al objetivo
      }
    }, 16); // Intervalo aproximado para 60 FPS (~16ms por frame)
  }

}
