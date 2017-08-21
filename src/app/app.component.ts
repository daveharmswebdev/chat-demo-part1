import { Component, OnInit } from '@angular/core';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Chat Demo';
  user = null;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.getAuthState().subscribe(user => {
      this.user = user;
      console.log(user);
    });
  }

  loginWithGoogle() {
    this.auth.loginWithGoogle().then(data => {
      console.log(data);
    });
  }

}
