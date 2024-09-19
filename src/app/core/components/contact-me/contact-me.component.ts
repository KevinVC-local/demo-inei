import { Component, inject, OnInit } from '@angular/core';
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

  constructor(){
    this.contactForm = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.initContactForm();
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
