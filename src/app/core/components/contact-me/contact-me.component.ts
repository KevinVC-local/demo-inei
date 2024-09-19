import { Component, EventEmitter, inject, OnInit, Output, signal } from '@angular/core';
import { CustomInputComponent } from "../../../common/components/custom-input/custom-input.component";
import { ButtonComponent } from "../../../common/components/button/button.component";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CustomInputComponent, ButtonComponent, ReactiveFormsModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent implements OnInit {

  contactForm: FormGroup;
  private readonly formBuilder = inject(FormBuilder);
  public listNavItems = signal<NavItem[]>([
    {
      id: 'home-1',
      name: 'Home',
      href: 'home',
    },
    {
      id: 'skills-1',
      name: 'Skills',
      href: 'skills',
    },
    {
      id: 'projects-1',
      name: 'Projects',
      href: 'projects',
    },
    {
      id: 'experience-1',
      name: 'Experience',
      href: 'experience',
    },
  ]);
  @Output() selectItemNav = new EventEmitter();

  constructor(){
    this.contactForm = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.initContactForm();
  }

  handleSelectItem(item: NavItem){
    this.selectItemNav.emit(item.href);
  }

  initContactForm(){
    this.contactForm = this.formBuilder.group({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]*$')]),
      message: new FormControl(null, [Validators.required]),
    });
  }


}

interface NavItem {
  id: string;
  name: string;
  href: string;
}
