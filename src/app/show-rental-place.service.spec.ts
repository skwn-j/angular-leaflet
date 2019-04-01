import { TestBed } from '@angular/core/testing';

import { ShowRentalPlaceService } from './show-rental-place.service';

describe('ShowRentalPlaceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowRentalPlaceService = TestBed.get(ShowRentalPlaceService);
    expect(service).toBeTruthy();
  });
});
