import { Component, OnInit } from '@angular/core';
import { Song } from './song';
import { SongService } from './song.service';

@Component({
  moduleId: module.id,
  selector: 'my-artists',
  templateUrl: './artists.component.html',
  styleUrls: [ './artists.component.css' ]
})
export class ArtistsComponent implements OnInit {

  songs: Song[] = [];

  constructor(private songService: SongService) { }

  ngOnInit(): void {
    this.songService.getSongs()
      .then(songs => this.songs = songs.slice(1, 5));
  }
}
