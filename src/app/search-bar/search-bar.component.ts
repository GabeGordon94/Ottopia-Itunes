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
  cache: object={};
  noResultMsg:string = `No results found for `

  constructor(private itunesApi: ItunesApiService, private selector: SelectedSongService) { }

  getResults(): void {
    if (this.cache.hasOwnProperty(this.query)) {
      this.resultsList = this.cache[this.query]
    } else {
      setTimeout(() => {
        this.itunesApi.getResults(this.query)
          .subscribe((result) => {
            this.resultsList = result['results']
            this.cache[this.query] = result['results']
          });
      }
        , 500)
    }
  }

  selectSong(result: object): void {
    this.selectedSong = result
    this.selector.selectedSong = result

  }

  ngOnInit() {
  }

}
