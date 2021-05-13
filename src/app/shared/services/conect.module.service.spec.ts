import { TestBed } from '@angular/core/testing';

import { Conect.ModuleService } from './conect.module.service';

describe('Conect.ModuleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Conect.ModuleService = TestBed.get(Conect.ModuleService);
    expect(service).toBeTruthy();
  });
});
