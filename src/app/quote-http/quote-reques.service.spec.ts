import { TestBed } from '@angular/core/testing';

import { QuoteRequesService } from './quote-reques.service';

describe('QuoteRequesService', () => {
  let service: QuoteRequesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuoteRequesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
