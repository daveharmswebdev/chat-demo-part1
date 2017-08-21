import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { ChatService } from './chat/chat.service';
import { AuthService } from './login/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChatComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'chat', component: ChatComponent }
    ])
  ],
  providers: [
    ChatService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
