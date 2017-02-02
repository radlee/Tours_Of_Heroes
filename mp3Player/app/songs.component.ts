import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Song } from './song';
import { SongService } from './song.service';

@Component({
  moduleId: module.id,
  selector: 'my-songs',
  templateUrl: './songs.component.html',
  styleUrls: [ './songs.component.css' ]
})
export class SongsComponent implements OnInit {
  songs: Song[];
  selectedSong: Song;

  constructor(
    private router: Router,
    private songService: SongService) { }

  getSongs(): void {
    this.songService.getSongs().then(songs => this.songs = songs);
  }

  ngOnInit(): void {
    this.getSongs();
  }

  onSelect(song: Song): void {
    this.selectedSong = song;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedSong.id]);
  }
}
