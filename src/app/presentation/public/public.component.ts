import { Component } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { CursorCircleComponent } from "../../common/components/cursor-circle/cursor-circle.component";
import { ContactCircleComponent } from "../../common/components/contact-circle/contact-circle.component";

@Component({
  selector: 'app-public',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CursorCircleComponent, ContactCircleComponent],
  templateUrl: './public.component.html',
})
export class PublicComponent {

}
