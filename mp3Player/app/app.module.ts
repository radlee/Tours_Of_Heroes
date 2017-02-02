import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }           from './app.component';
import { ArtistsComponent }       from './artists.component';
import { MostPlayedComponent }    from './most-played.component';
import { SongDetailComponent }    from './song-detail.component';
import { SongsComponent }         from './songs.component';
import { SongService }            from './song.service';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ArtistsComponent,
    MostPlayedComponent,
    SongDetailComponent,
    SongsComponent
  ],
  providers: [ SongService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
