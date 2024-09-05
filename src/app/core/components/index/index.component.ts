import { NgClass, NgForOf, NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ButtonComponent } from '../../../common/components/button/button.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [NgIf, NgClass, ButtonComponent, AngularSvgIconModule, NgForOf],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

  public item = signal('light')
  public openMenu = signal(false);
  public listNavItems = signal([
    {
      id: 'home-1',
      name: 'Home',
      href: '#',
      active: true
    },
    {
      id: 'skills-1',
      name: 'Skills',
      href: '',
      active: false,
    },
    {
      id: 'projects-1',
      name: 'Projects',
      href: '',
      active: false
    },
    {
      id: 'experience-1',
      name: 'Experience',
      href: '',
      active: false
    },
    {
      id: 'contact-1',
      name: 'Contact',
      href: '',
      active: false
    }
  ])

  toggleThemeMode(){}
  onButtonClick(){}


handleToggleMenu(){
  this.openMenu.set(!this.openMenu());
}

}
