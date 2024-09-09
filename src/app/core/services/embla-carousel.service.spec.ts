import { TestBed } from '@angular/core/testing';

import { EmblaCarouselService } from './embla-carousel.service';

describe('EmblaCarouselService', () => {
  let service: EmblaCarouselService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmblaCarouselService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
