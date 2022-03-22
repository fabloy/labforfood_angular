import { TestBed } from '@angular/core/testing';

import { RistorantiService } from './ristoranti.service';

describe('RistorantiService', () => {
  let service: RistorantiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RistorantiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
