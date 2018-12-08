import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { AppPollComponent } from './app-poll/app-poll.component';
import { from } from 'rxjs/internal/observable/from';
import { AppPollModule } from './app-poll/app-poll.module';

//import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
   // HttpClient,
   AppPollModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
