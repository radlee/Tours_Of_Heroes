import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/most-played" routerLinkActive="active">Playing</a>
      <a routerLink="/songs" routerLinkActive="active">Songs</a>
      <a routerLink="/artists" routerLinkActive="active">Artists</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'rad Music Player';
}
