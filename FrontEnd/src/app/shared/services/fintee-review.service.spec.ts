import { TestBed } from '@angular/core/testing';

import { FinteeReviewService } from './fintee-review.service';

describe('FinteeReviewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FinteeReviewService = TestBed.get(FinteeReviewService);
    expect(service).toBeTruthy();
  });
});
