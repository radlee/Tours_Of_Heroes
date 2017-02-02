import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MostPlayedComponent }    from './most-played.component';
import { SongsComponent }         from './songs.component';
import { ArtistsComponent }       from './artists.component';
import { SongDetailComponent }    from './song-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/most-played', pathMatch: 'full' },
  { path: 'most-played',  component: MostPlayedComponent },
  { path: 'artists',  component: ArtistsComponent },
  { path: 'detail/:id', component: SongDetailComponent },
  { path: 'songs',     component: SongsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
