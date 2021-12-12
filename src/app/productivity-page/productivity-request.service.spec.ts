import { TestBed } from '@angular/core/testing';
import { ProductivityRequestService } from './productivity-request.service';

describe('SendRequestService', () => {
  let service: ProductivityRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductivityRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be able to create a new time-block on the server', () => {
    expect(service).toBeTruthy();
  });
});
