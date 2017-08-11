import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <hr>
    <h1>Chat Component</h1>
    <hr>
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
          <form #chatForm="ngForm" (ngSubmit)="chat(chatForm.value)" autocomplete="off">
            <div class="form-group">
              <label for="message">Chat Entry</label>
              <input [(ngModel)]="message" type="text" class="form-control" id="message" name="message" placeholder="message...">
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
          <hr>
          <ul class="list-group">
            <li class="list-group-item" *ngFor="let chit of currentChat">{{chit.user}}: {{chit.message}}</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styles: [`
    h1 { margin: 0 auto; width: 8em; }
    li { text-align: left; }
  `]
})
export class ChatComponent implements OnInit {
  currentChat: any[];
  message: string;

  ngOnInit() {
    this.currentChat = [
      { user: 'bob', message: 'hey, what are you doing?' },
      { user: 'jeff', message: 'learning angular 4' },
      { user: 'bob', message: 'cool, angular is great' },
      { user: 'jeff', message: 'i know that\'s right' },
    ];
  }

  chat(formValue) {
    const newMessage = Object.assign(formValue, { user: 'anonymous'});
    this.currentChat.push(newMessage);
    this.message = '';
  }

}
