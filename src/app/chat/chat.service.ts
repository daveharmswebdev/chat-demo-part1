import { Injectable } from '@angular/core';

const devChat = [
  { user: 'bob', message: 'hey, what are you doing?' },
  { user: 'jeff', message: 'learning angular 4' },
  { user: 'bob', message: 'cool, angular is great' },
  { user: 'jeff', message: 'i know that\'s right' },
];

@Injectable()
export class ChatService {

  getChat() {
    return devChat;
  }

  submitChatMessage(message) {
    devChat.push(message);
  }
  
}
