import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectedSongService {
  public selectedSong: object;

  constructor() { }
}
