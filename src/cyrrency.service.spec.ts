import { TestBed } from '@angular/core/testing';

import { CyrrencyService } from './cyrrency.service';

describe('CyrrencyService', () => {
  let service: CyrrencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CyrrencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
