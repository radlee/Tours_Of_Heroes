import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Song }         from './song';
import { SongService }  from './song.service';
@Component({
  moduleId: module.id,
  selector: 'my-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: [ './song-detail.component.css' ]
})
export class SongDetailComponent implements OnInit {
  song: Song;

  constructor(
    private songService: SongService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.songService.getSong(+params['id']))
      .subscribe(song => this.song = song);
  }

  goBack(): void {
    this.location.back();
  }
}
