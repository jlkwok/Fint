import { TestBed } from '@angular/core/testing';

import { FinterReviewService } from './finter-review.service';

describe('FinterReviewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FinterReviewService = TestBed.get(FinterReviewService);
    expect(service).toBeTruthy();
  });
});
