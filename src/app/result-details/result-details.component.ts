import { Component, OnInit } from '@angular/core';
import { SelectedSongService } from '../selected-song.service'

@Component({
  selector: 'app-result-details',
  templateUrl: './result-details.component.html',
  styleUrls: ['./result-details.component.css']
})
export class ResultDetailsComponent implements OnInit {
  songData:object
  constructor(private selected:SelectedSongService) { }

  ngOnInit() {
    this.songData=this.selected.selectedSong
  }

}
