import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { IndexComponent } from "../../components/index/index.component";
import { ProfessionalGrowthComponent } from "../../components/professional-growth/professional-growth.component";
import { YearsExperienceComponent } from "../../components/years-experience/years-experience.component";
import { RecommendationsComponent } from "../../components/recommendations/recommendations.component";
import { TrainingsComponent } from "../../components/trainings/trainings.component";
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-start-page',
  standalone: true,
  imports: [IndexComponent, ProfessionalGrowthComponent, YearsExperienceComponent, RecommendationsComponent, 
    TrainingsComponent, NgOptimizedImage],
  templateUrl: './start-page.component.html',
  styleUrl: './start-page.component.scss'
})
export class StartPageComponent implements AfterViewInit {

  @ViewChild('logos', { static: false }) logos!: ElementRef<HTMLUListElement>;

  ngAfterViewInit(): void {
    const ul = this.logos.nativeElement;

    // Clonar el ul después del original
    const clone = ul.cloneNode(true) as HTMLElement;
    ul.insertAdjacentElement('afterend', clone);

    // Añadir atributo aria-hidden al clon
    clone.setAttribute('aria-hidden', 'true');
  }

}
