import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';


//import { ButtonModule, DropdownModule, PanelModule, ProgressBarModule } from 'primeng/primeng';

import { from } from 'rxjs/internal/observable/from';

/* Feature Modules */
import { UserModule } from './user/user.module';
import { AppPollModule } from 'src/app/app-poll/app-poll.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
//import { KycFormComponent } from './user/kyc-form.component';
import { MenuComponent } from './home/menu.component';
import { WelcomeComponent } from './home/welcome.component';
import { ShellComponent } from 'src/app/home/shell.component';
import { PageNotFoundComponent } from 'src/app/home/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,    
    MenuComponent, WelcomeComponent,ShellComponent, PageNotFoundComponent
  ],
  imports: [
   BrowserModule,
   BrowserAnimationsModule,
   ReactiveFormsModule,
   
   AppRoutingModule   
     ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
