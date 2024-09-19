import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IndexComponent } from "./core/components/index/index.component";
import { ProyectsComponent } from "./core/components/proyects/proyects.component";
import { ExperienceComponent } from "./core/components/experience/experience.component";
import { SkillsComponent } from "./core/components/skills/skills.component";
import { ContactMeComponent } from "./core/components/contact-me/contact-me.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IndexComponent, ProyectsComponent, ExperienceComponent, SkillsComponent, ContactMeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio-v3';
}
