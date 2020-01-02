import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  selectedSong:object;
  query:string;
  resultsList:string[]

  constructor() { }

  getResults():void{
    
  }

  ngOnInit() {
  }

}
