import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ChartModule } from 'primeng/primeng';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppPollData } from './app-poll.data';
import { AppPollComponent } from './app-poll.component';
import { AppPollListComponent} from  './app-poll-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpModule } from '@angular/http';
import { AppPollService } from 'src/app/app-poll/app-poll.service';
 
import { StoreModule } from '@ngrx/store';
import { PollReducer } from 'src/app/app-poll/state/poll.reducer';

  @NgModule({
    imports: [
      SharedModule,HttpModule,
      HttpClientModule,
      ChartModule,  
      InMemoryWebApiModule.forRoot(AppPollData),
      RouterModule.forChild([
        { path: '', component: AppPollListComponent },       
        {
          path: ':id/edit',
          //canDeactivate: [ProductEditGuard],
          component: AppPollComponent
        }
      ]),
      StoreModule.forFeature('votes',{PollReducer})
    ],
  declarations: [
    AppPollComponent,
    AppPollListComponent,    
  ],
  providers:[AppPollService]
})
export class AppPollModule { }
