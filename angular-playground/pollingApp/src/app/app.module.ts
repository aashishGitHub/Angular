import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ChartModule } from 'primeng/primeng';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppPollComponent } from './app-poll/app-poll.component';
import { from } from 'rxjs/internal/observable/from';

//import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AppPollComponent
  ],
  imports: [
   // HttpClient,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
