import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

/* Feature Modules */
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './home/menu.component';
import { WelcomeComponent } from './home/welcome.component';
import { ShellComponent } from 'src/app/home/shell.component';
import { PageNotFoundComponent } from 'src/app/home/page-not-found.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent, MenuComponent, WelcomeComponent, ShellComponent, PageNotFoundComponent
  ],
  imports: [
   BrowserModule,
   BrowserAnimationsModule,
   ReactiveFormsModule,
   AppRoutingModule,
   StoreModule.forRoot({}),
   StoreDevtoolsModule.instrument({
    name: 'Poll App DevTools',
    maxAge: 25,
    logOnly: environment.production,
  }),
     ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
