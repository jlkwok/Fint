import { TestBed } from '@angular/core/testing';

import { ItemReviewService } from './item-review.service';

describe('ItemReviewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemReviewService = TestBed.get(ItemReviewService);
    expect(service).toBeTruthy();
  });
});
