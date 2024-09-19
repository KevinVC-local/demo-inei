import { Component } from '@angular/core';
import { IndexComponent } from "../../core/components/index/index.component";
import { SkillsComponent } from "../../core/components/skills/skills.component";
import { ProyectsComponent } from "../../core/components/proyects/proyects.component";
import { ExperienceComponent } from "../../core/components/experience/experience.component";
import { ContactMeComponent } from "../../core/components/contact-me/contact-me.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [IndexComponent, SkillsComponent, ProyectsComponent, ExperienceComponent, ContactMeComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

  scrollToSection(section: string) {
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

}
