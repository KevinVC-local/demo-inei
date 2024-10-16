import { NgClass } from '@angular/common';
import { Component, signal, ViewChild } from '@angular/core';
import {
  EmblaCarouselDirective,
  EmblaCarouselType
} from 'embla-carousel-angular'
import { setupTweenScale, TWEEN_FACTOR_BASE } from '../../../../common/utils/EmblaCarouselTweenScale';


@Component({
  selector: 'app-professional-growth',
  standalone: true,
  imports: [EmblaCarouselDirective, NgClass],
  templateUrl: './professional-growth.component.html',
  styleUrl: './professional-growth.component.scss'
})
export class ProfessionalGrowthComponent {

  @ViewChild(EmblaCarouselDirective) emblaRef: EmblaCarouselDirective | undefined
  public options = { loop: true }

  public listButtons = signal<ButtonList[]>([
    {
      label: 'Masterclass',
      action: 'masterclass',
      active: true
    },
    {
      label: 'Programas',
      action: 'programas',
      active: false
    },
    {
      label: 'Cursos corporativos',
      action: 'cursos-corporativos',
      active: false
    }
  ]);
  public selectButton = signal<ButtonList | null>(null);
  private emblaApi?: EmblaCarouselType;
  public tweenNodes: HTMLElement[] = []
  public tweenFactor = signal<number>(0)
  public acountDotSignal = signal<number[]>([]);

  ngAfterViewInit() {
    this.emblaApi = this.emblaRef?.emblaApi;
    this.selectButton.set(this.listButtons()[0]);
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

  handleSelectButton(index: number, item: ButtonList) {
    this.selectButton.set(item);
    this.listButtons.update((buttons) => {
      buttons.forEach((button, i) => {
        button.active = i === index;
      });
      return buttons;
    });
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

  handlePrev(){
    this.emblaApi?.scrollPrev()
  }

  handleNext(){
    this.emblaApi?.scrollNext()
  }

  handleScrollTo(index: number){
    this.emblaApi?.scrollTo(index)
  }

}

interface ButtonList {
  label: string;
  action: string;
  active: boolean;
}