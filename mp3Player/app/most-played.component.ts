import { Component, OnInit } from '@angular/core';
import { Song } from './song';
import { SongService } from './song.service';

@Component({
  moduleId: module.id,
  selector: 'my-most-played',
  templateUrl: './most-played.component.html',
  styleUrls: [ './most-played.component.css' ]
})
export class MostPlayedComponent implements OnInit {

  songs: Song[] = [];

  constructor(private songService: SongService) { }

  ngOnInit(): void {
    this.songService.getSongs()
      .then(songs => this.songs = songs.slice(1, 5));
  }
}
