import { TestBed } from '@angular/core/testing';

import { ItunesApiService } from './itunes-api.service';

describe('ItunesApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItunesApiService = TestBed.get(ItunesApiService);
    expect(service).toBeTruthy();
  });
});
