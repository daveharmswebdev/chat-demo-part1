import { Component, OnInit } from '@angular/core';
import { AuthService } from './../login/auth.service';

@Component({
  selector: 'app-nav-bar',
  template: `
    <nav class="navbar navbar-default">
      <ul class="nav navbar-nav">
        <li><a [routerLink]="['/chat']">Chat</a></li>
        <li><a *ngIf="isAuthenticated()" (click)="logOut()">Log Out</a></li>
      </ul>
      <div class="chatUser navbar-header navbar-right">
        <ul class="nav navbar-nav">
          <li class="nav navbar-nav" *ngIf="!isAuthenticated()">
            <a id="loginWithGoogle" (click)="loginWithGoogle()">Login With Google</a>
          </li>
          <li class="nav navbar-nav" *ngIf="isAuthenticated()"><a id="loggedInUser">Hello, {{this.currentUser.displayName}}!</a></li>
        </ul>
      </div>
    </nav>
  `,
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  currentUser: any = null;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.getAuthState().subscribe(user => {
      if (user) {
        this.currentUser = user;
      } else {
        this.currentUser = null;
      }
    });
  }

  isAuthenticated() {
    if (this.currentUser && this.currentUser.displayName) {
      console.log(this.currentUser.displayName);
      return true;
    } else {
      console.log('no display name');
      return false;
    }
  }

  loginWithGoogle() {
    this.auth.loginWithGoogle();
  }

  logOut() {
    if (window.confirm('Are you sure?')) {
      this.auth.logOut();
    }
  }

}
