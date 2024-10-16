import { AfterViewInit, Component, ElementRef, inject, Renderer2, ViewChild } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-contact-circle',
  standalone: true,
  imports: [AngularSvgIconModule],
  templateUrl: './contact-circle.component.html',
  styleUrl: './contact-circle.component.scss'
})
export class ContactCircleComponent implements AfterViewInit {

  @ViewChild('contactCircle', { static: false }) contactCircle!: ElementRef;
  private readonly renderer = inject(Renderer2);

  ngAfterViewInit(): void {
    const btnBurger = this.contactCircle.nativeElement
    this.renderer.listen(btnBurger, 'mousemove', (event) => this.animateLink(event, btnBurger, 8));
    this.renderer.listen(btnBurger, 'mouseleave', (event) => this.resetAnimation(btnBurger));
  }

  animateLink(event: MouseEvent, link: HTMLElement, move = 8): void {
    const { offsetX: x, offsetY: y } = event;
    const { offsetWidth: width, offsetHeight: height } = link;

    const xMove = (x / width) * (move * 2) - move;
    const yMove = (y / height) * (move * 2) - move;

    this.renderer.setStyle(link, 'transform', `translate(${xMove}px, ${yMove}px)`);

    if (event.type === 'mouseleave') {
      this.renderer.setStyle(link, 'transform', '');
    }
  }

  private resetAnimation(link: HTMLElement): void {
    this.renderer.setStyle(link, 'transform', '');
  }

}
