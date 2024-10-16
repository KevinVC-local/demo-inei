import { Component, ElementRef, HostListener, inject, OnDestroy, OnInit, Renderer2, signal, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cursor-circle',
  standalone: true,
  imports: [],
  templateUrl: './cursor-circle.component.html',
  styleUrl: './cursor-circle.component.scss'
})
export class CursorCircleComponent implements OnInit, OnDestroy{

  @ViewChild('cursorCircle', { static: false }) cursorCircle!: ElementRef;
  private readonly mouse = { x: 0, y: 0 };
  private previousMouse = { x: 0, y: 0 };
  private circle = { x: 0, y: 0 }; 
  private currentScale = 0;
  private currentAngle = 0;
  private speed = 0.17;

  private animationFrame!: number;

  private readonly renderer = inject(Renderer2);

  ngOnInit(): void {
    this.startAnimation();
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.cursorCircle) {
      return;
    }
    this.mouse.x = event.clientX;
    this.mouse.y = event.clientY;

    const target = event.target as HTMLElement;
    const tagName = target.tagName.toLowerCase();

    if (tagName === 'button' || target.classList.contains('hover-circle')) {
      this.expandCursorLarge();
    } else {
      this.resetCursor();
    }

  }

  startAnimation(): void {

    if (typeof window === 'undefined') {
      // Evita ejecutar la animación si window no está disponible
      return;
    }

    const tick = () => {
      // MOVE: Calculate circle movement based on mouse position and smoothing
      this.circle.x += (this.mouse.x - this.circle.x) * this.speed;
      this.circle.y += (this.mouse.y - this.circle.y) * this.speed;
      const translateTransform = `translate(${this.circle.x}px, ${this.circle.y}px)`;

      // SQUEEZE: Calculate the change in mouse position (deltaMouse)
      const deltaMouseX = this.mouse.x - this.previousMouse.x;
      const deltaMouseY = this.mouse.y - this.previousMouse.y;

      // Update previous mouse position for the next frame
      this.previousMouse.x = this.mouse.x;
      this.previousMouse.y = this.mouse.y;

      // Calculate mouse velocity using Pythagorean theorem and adjust speed
      const mouseVelocity = Math.min(Math.sqrt(deltaMouseX ** 2 + deltaMouseY ** 2) * 4, 150);
      const scaleValue = (mouseVelocity / 150) * 0.5;

      // Smoothly update the current scale
      this.currentScale += (scaleValue - this.currentScale) * this.speed;
      const scaleTransform = `scale(${1 + this.currentScale}, ${1 - this.currentScale})`;

      // ROTATE: Calculate the angle using the atan2 function
      const angle = Math.atan2(deltaMouseY, deltaMouseX) * 180 / Math.PI;
      if (mouseVelocity > 20) {
        this.currentAngle = angle;
      }
      const rotateTransform = `rotate(${this.currentAngle}deg)`;
  
      if (!this.cursorCircle) {
        return;
      }
      const circle = this.cursorCircle.nativeElement;

      // Apply all transformations to the circle element in a specific order: translate -> rotate -> scale
      this.renderer.setStyle(circle, 'transform', `${translateTransform} ${rotateTransform} ${scaleTransform}`);

      // Request the next frame to continue the animation
      
      if (typeof window !== 'undefined') {
        this.animationFrame = window.requestAnimationFrame(tick);
      }
    };

    this.animationFrame = window.requestAnimationFrame(tick);
  }

  @HostListener('document:mousedown')
  onMouseDown() {
    this.expandCursor();
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    this.resetCursor();
  }

  private resetCursor() {
    const cursor = this.cursorCircle.nativeElement;
    if (cursor) {
      this.renderer.addClass(cursor, '!w-3');
      this.renderer.addClass(cursor, '!h-3');
      this.renderer.removeClass(cursor, '!w-5');
      this.renderer.removeClass(cursor, '!h-5');
      this.renderer.removeClass(cursor, '!w-8');
      this.renderer.removeClass(cursor, '!h-8');
      this.renderer.removeClass(cursor, 'mix-blend-mode');
    }
  }

  private expandCursor() {
    const cursor = this.cursorCircle.nativeElement;
    if (cursor) {
      this.renderer.addClass(cursor, '!w-5');
      this.renderer.addClass(cursor, '!h-5');
      this.renderer.removeClass(cursor, '!w-3');
      this.renderer.removeClass(cursor, '!h-3');
      this.renderer.removeClass(cursor, '!w-8');
      this.renderer.removeClass(cursor, '!h-8');
    }
  }

  private expandCursorLarge() {
    const cursor = this.cursorCircle.nativeElement;
    if (cursor) {
      this.renderer.addClass(cursor, '!w-8');
      this.renderer.addClass(cursor, '!h-8');
      this.renderer.addClass(cursor, 'mix-blend-mode');
      this.renderer.removeClass(cursor, '!w-3');
      this.renderer.removeClass(cursor, '!h-3');
      this.renderer.removeClass(cursor, '!w-5');
      this.renderer.removeClass(cursor, '!h-5');
    }
  }

  ngOnDestroy(): void {
    if (this.animationFrame) {
      window.cancelAnimationFrame(this.animationFrame);
    }
  }


}
