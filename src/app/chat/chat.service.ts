import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ChatService {

  constructor(private db: AngularFireDatabase) {}

  getChat() {
    return this.db.list('/messages');
  }

  submitChatMessage(message) {
    this.db.list('/messages').push(message);
  }

}
