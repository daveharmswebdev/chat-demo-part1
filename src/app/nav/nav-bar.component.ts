import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  template: `
    <div class="navbar navbar-default">
      <ul class="nav navbar-nav">
        <li><a [routerLink]="['/login']">Login</a></li>
        <li><a [routerLink]="['/chat']">Chat</a></li>
      </ul>
    </div>
  `
})
export class NavBarComponent { }
