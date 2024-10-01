import { TestBed } from '@angular/core/testing';

import { AllCartService } from './Services/all-cart.service';

describe('AllCartService', () => {
  let service: AllCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
