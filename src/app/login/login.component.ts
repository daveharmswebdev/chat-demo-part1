import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string;
  password: string;

  constructor() { }

  ngOnInit() {
  }

  login(formValue) {
    console.log(formValue);
    this.userName = null;
    this.password = null;
  }

}
