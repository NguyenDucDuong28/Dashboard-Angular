import { TestBed } from '@angular/core/testing';

import { DuANService } from './du-an.service';

describe('DuANService', () => {
  let service: DuANService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DuANService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
