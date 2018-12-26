import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';


import { ButtonModule, DropdownModule, PanelModule, ProgressBarModule } from 'primeng/primeng';

import { from } from 'rxjs/internal/observable/from';

import { AppPollModule } from 'src/app/app-poll/app-poll.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { KycFormComponent } from './user/kyc-form.component';


//import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    KycFormComponent,
  ],
  imports: [
   // HttpClient,  
   BrowserModule,
   BrowserAnimationsModule,
   ReactiveFormsModule,
   ProgressBarModule,
   AppRoutingModule,   
   AppPollModule      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
