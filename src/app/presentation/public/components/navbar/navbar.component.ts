import { AfterViewInit, Component, ElementRef, inject, Renderer2, signal, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, AngularSvgIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements AfterViewInit {

  @ViewChild('navBar', { static: false }) navBar!: ElementRef;
  @ViewChild('navLinks', { static: false }) navLinks!: ElementRef;
  @ViewChild('burgerMenu', { static: false }) burgerMenu!: ElementRef;
  public openMenu = signal(false);
  public listNavItems = signal<NavItem[]>([
    {
      id: 'home-1',
      name: 'Inicio',
      url: 'home',
      active: true
    },
    {
      id: 'about-1',
      name: 'Conócenos',
      url: 'about',
      active: false,
    },
    {
      id: 'study-1',
      name: 'Estudia',
      url: 'study',
      active: false
    },
    {
      id: 'companies-1',
      name: 'Empresas',
      url: 'companies',
      active: false
    },
    {
      id: 'contact-1',
      name: 'Trabaja en INEL',
      url: 'work-with-me',
      active: false
    }
  ]);
  scrollPosition = signal<number>(0);
  private readonly renderer = inject(Renderer2);

  constructor() {

  }

  ngAfterViewInit(): void {
    const scrollContainer = this.renderer.selectRootElement('section.scrollbar-thumb-rounded', true);
    const links: HTMLElement[] = Array.from(this.navLinks.nativeElement.querySelectorAll('a'));
    this.renderer.listen(scrollContainer, 'scroll', () => {
      this.scrollPosition.set(scrollContainer.scrollTop);
      if (scrollContainer.scrollTop > 620) {
        this.navBar.nativeElement?.classList.add("scrolling");
      } else {
        this.navBar.nativeElement?.classList.remove("scrolling");
      }
    });
    if (links.length > 0) {
      links && links.forEach((link: HTMLElement) => {
        this.renderer.listen(link, 'mousemove', (event) => this.animateLink(event, link));
        this.renderer.listen(link, 'mouseleave', (event) => this.resetAnimation(link));
      });
    }
    const btnBurger = this.burgerMenu.nativeElement
    this.renderer.listen(btnBurger, 'mousemove', (event) => this.animateLink(event, btnBurger, 3));
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

  handleToggleMenu(){
    this.openMenu.set(!this.openMenu());
  }

  private resetAnimation(link: HTMLElement): void {
    this.renderer.setStyle(link, 'transform', '');
  }

}

interface NavItem {
  id: string;
  name: string;
  url: string;
  active: boolean;
}