import { NgClass, NgIf } from '@angular/common';
import { Component, signal, Output, EventEmitter } from '@angular/core';
import { ButtonComponent } from '../../../common/components/button/button.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [NgIf, NgClass, ButtonComponent, AngularSvgIconModule],
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
      href: 'home',
      active: true
    },
    {
      id: 'skills-1',
      name: 'Skills',
      href: 'skills',
      active: false,
    },
    {
      id: 'projects-1',
      name: 'Projects',
      href: 'projects',
      active: false
    },
    {
      id: 'experience-1',
      name: 'Experience',
      href: 'experience',
      active: false
    },
    {
      id: 'contact-1',
      name: 'Contact',
      href: 'contact',
      active: false
    }
  ]);
  @Output() selectItemNav = new EventEmitter();

  toggleThemeMode(){}
  onButtonClick(){}

  handleSelectItem(item: NavItem){
    this.selectItemNav.emit(item.href);
  }


handleToggleMenu(){
  this.openMenu.set(!this.openMenu());
}

}

interface NavItem {
  id: string;
  name: string;
  href: string;
  active: boolean;
}