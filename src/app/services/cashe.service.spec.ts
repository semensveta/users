import { TestBed } from '@angular/core/testing';

import { CasheService } from './cashe.service';

describe('CasheService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CasheService = TestBed.get(CasheService);
    expect(service).toBeTruthy();
  });
});
