import { TestBed } from '@angular/core/testing';

import { TimeBlockServiceService } from './time-block-service.service';

describe('TimeBlockServiceService', () => {
  let service: TimeBlockServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeBlockServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
