import { TestBed } from '@angular/core/testing';

import { NutritionalService } from './nutritional.service';

describe('NutritionalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NutritionalService = TestBed.get(NutritionalService);
    expect(service).toBeTruthy();
  });
});
