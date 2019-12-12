import { TestBed } from '@angular/core/testing';

import { BaseCrudService } from './base-crud.service';

describe('BaseCrudService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BaseCrudService = TestBed.get(BaseCrudService);
    expect(service).toBeTruthy();
  });
});
