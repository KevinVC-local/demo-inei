import { inject, Injectable, Renderer2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimatedService {

  private readonly renderer = inject(Renderer2);

  constructor() { }


}
