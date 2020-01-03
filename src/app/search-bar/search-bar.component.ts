import { Component, OnInit } from '@angular/core';
import { SelectedSongService } from '../selected-song.service'
import { ItunesApiService } from '../itunes-api.service'

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})

export class SearchBarComponent implements OnInit {
  selectedSong: object;
  query: string;
  resultsList: string[]

  constructor(private itunesApi: ItunesApiService, private selector: SelectedSongService) { }

  getResults(): void {
    setTimeout(() => {
      this.itunesApi.getResults(this.query)
        .subscribe(result => this.resultsList = result['results']);
    }
      , 500)
  }

  selectSong(result: object): void {
    this.selectedSong = result
    this.selector.selectedSong = result

  }

  ngOnInit() {
  }

}
