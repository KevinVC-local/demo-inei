import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoaderPageComponent } from "./common/components/loader-page/loader-page.component";
import { NgIf } from '@angular/common';
import { LoaderService } from './common/services/loader.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoaderPageComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'portfolio-v3';
  private readonly loaderService = inject(LoaderService);

  public isLoading = signal(true);

  ngOnInit(){
    this.stateLoadingChange();
  }

  stateLoadingChange(){
    setTimeout(() => {
      this.isLoading.set(false);
      this.loaderService.show();
    }, 1500);
  }

}
