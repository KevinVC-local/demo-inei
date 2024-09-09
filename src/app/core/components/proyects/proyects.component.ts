import { NgFor } from '@angular/common';
import { Component, signal, ViewChild } from '@angular/core';
import {
  EmblaCarouselDirective,
  EmblaCarouselType
} from 'embla-carousel-angular'
import { setupTweenScale, TWEEN_FACTOR_BASE } from '../../../common/utils/EmblaCarouselTweenScale';


@Component({
  selector: 'app-proyects',
  standalone: true,
  imports: [EmblaCarouselDirective, NgFor],
  templateUrl: './proyects.component.html',
  styleUrl: './proyects.component.scss'
})
export class ProyectsComponent {
  @ViewChild(EmblaCarouselDirective) emblaRef: EmblaCarouselDirective | undefined

  private emblaApi?: EmblaCarouselType
  public options = { loop: true }
  public acountDotSignal = signal<number[]>([])
  public tweenNodes: HTMLElement[] = []
  public tweenFactor = signal<number>(0)

  ngAfterViewInit() {
    this.emblaApi = this.emblaRef?.emblaApi
    setupTweenScale(this.emblaApi!)
    this.generateDotButtons();
    this.setTweenNodes(this.emblaApi!);
    this.setTweenFactor(this.emblaApi!);

    this.emblaApi?.on('reInit', () => {
      this.setTweenNodes(this.emblaApi!);
      this.setTweenFactor(this.emblaApi!);
    });
  }

  generateDotButtons() {
    const acountDot = this.emblaApi?.scrollSnapList().length;
    const dotButtons = Array(acountDot).fill(0);
    this.acountDotSignal.set(dotButtons);
  }

  handleNext(){
    this.emblaApi?.scrollNext()
  }

  handlePrev(){
    this.emblaApi?.scrollPrev()
  }

  handleScrollTo(index: number){
    this.emblaApi?.scrollTo(index)
  }

  setTweenNodes(emblaApi: EmblaCarouselType): void {
    if (emblaApi) {
      this.tweenNodes = emblaApi.slideNodes().map((slideNode: HTMLElement) => {
        return slideNode.querySelector('.embla__slide__number') as HTMLElement;
      });
    }
  }

  setTweenFactor(emblaApi: EmblaCarouselType): void {
    if (emblaApi) {
      this.tweenFactor.set( TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length);
    }
  }

}
