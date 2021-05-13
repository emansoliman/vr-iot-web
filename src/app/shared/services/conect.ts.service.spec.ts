import { TestBed } from '@angular/core/testing';

import { Conect.TsService } from './conect.ts.service';

describe('Conect.TsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Conect.TsService = TestBed.get(Conect.TsService);
    expect(service).toBeTruthy();
  });
});
