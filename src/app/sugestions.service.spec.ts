import { TestBed } from '@angular/core/testing';

import { SugestionsService } from './sugestions.service';

describe('SugestionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SugestionsService = TestBed.get(SugestionsService);
    expect(service).toBeTruthy();
  });
});
