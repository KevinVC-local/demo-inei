import { Component, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { AngularSvgIconModule, SvgIconRegistryService } from 'angular-svg-icon';
import { EmblaCarouselDirective, EmblaCarouselType } from 'embla-carousel-angular';

@Component({
  selector: 'app-years-experience',
  standalone: true,
  imports: [AngularSvgIconModule, EmblaCarouselDirective],
  templateUrl: './years-experience.component.html',
  styleUrl: './years-experience.component.scss'
})
export class YearsExperienceComponent {
  @ViewChild('worldMap', { static: false }) worldMap!: ElementRef;
  @ViewChild(EmblaCarouselDirective) emblaRef: EmblaCarouselDirective | undefined

  public options = { loop: true };
  private emblaApi?: EmblaCarouselType;
  public acountDotSignal = signal<number[]>([])
  private readonly iconReg = inject(SvgIconRegistryService);

  ngAfterViewInit() {
    this.emblaApi = this.emblaRef?.emblaApi;
    this.generateDotButtons();
  }

  generateDotButtons() {
    const acountDot = this.emblaApi?.scrollSnapList().length;
    const dotButtons = Array(acountDot).fill(0);
    this.acountDotSignal.set(dotButtons);
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
