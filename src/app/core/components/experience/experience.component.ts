import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [NgClass],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})

export class ExperienceComponent {

  public experiences = signal<Experience[]>([
    {
      id: 123,
      company: 'NTT DATA',
      role: 'Software Engineer',
      duration: 'Jan 2020 - Present',
      description: 'Working on a project that involves developing a web application for a client in the healthcare domain. The application is built using Angular and Spring Boot.',
      technologies: ['Angular', 'Spring Boot', 'Java', 'TypeScript', 'HTML', 'CSS', 'JavaScript'],
      logo: 'assets/images/ntt-data-logo.png',
      show: true,
      expanded: true
    },
    {
      id: 3435,
      company: 'Infosys',
      role: 'Systems Engineer',
      duration: 'Sep 2018 - Jan 2020',
      description: 'Worked on a project that involved developing a web application for a client in the banking domain. The application was built using Angular and Spring Boot.',
      technologies: ['Angular', 'Spring Boot', 'Java', 'TypeScript', 'HTML', 'CSS', 'JavaScript'],
      logo: 'assets/images/infosys-logo.png',
      show: false,
      expanded: true
    },
    {
      id: 234,
      company: 'Tata Consultancy Services',
      role: 'Systems Engineer',
      duration: 'Jun 2017 - Sep 2018',
      description: 'Worked on a project that involved developing a web application for a client in the insurance domain. The application was built using Angular and Spring Boot.',
      technologies: ['Angular', 'Spring Boot', 'Java', 'TypeScript', 'HTML', 'CSS', 'JavaScript'],
      logo: 'assets/images/tcs-logo.png',
      show: false,
      expanded: true
    }
  ])

}

interface Experience {
  id: number;
  company: string;
  role: string;
  duration: string;
  description: string;
  technologies: string[];
  logo: string;
  show: boolean;
  expanded: boolean
}