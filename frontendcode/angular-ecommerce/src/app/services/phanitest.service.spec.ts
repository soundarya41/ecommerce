import { TestBed } from '@angular/core/testing';

import { PhanitestService } from './phanitest.service';

describe('PhanitestService', () => {
  let service: PhanitestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhanitestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
