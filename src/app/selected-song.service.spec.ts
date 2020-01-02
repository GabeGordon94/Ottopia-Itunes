import { TestBed } from '@angular/core/testing';

import { SelectedSongService } from './selected-song.service';

describe('SelectedSongService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectedSongService = TestBed.get(SelectedSongService);
    expect(service).toBeTruthy();
  });
});
