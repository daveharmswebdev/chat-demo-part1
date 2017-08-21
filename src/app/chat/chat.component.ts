import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';

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
    h1 { margin: 0 auto; width: 8em; text-align: center; }
    li { text-align: left; }
  `]
})
export class ChatComponent implements OnInit {
  currentChat: any[];
  message: string;

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.currentChat = this.chatService.getChat();
  }

  chat(formValue) {
    const newMessage = Object.assign(formValue, { user: 'anonymous'});
    this.currentChat.push(newMessage);
    this.message = '';
  }

}
