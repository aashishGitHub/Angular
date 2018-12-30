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

// import { ProductListComponent } from './product-list.component';
// import { ProductDetailComponent } from './product-detail.component';
// import { ProductEditComponent } from './product-edit.component';
// import { ProductEditGuard } from './product-edit.guard';
  
  @NgModule({
    imports: [
      BrowserModule,
      HttpClientModule,
      ChartModule,  
      InMemoryWebApiModule.forRoot(AppPollData),
      RouterModule.forChild([
        { path: 'polls', component: AppPollListComponent },
        { path: 'polls/:id', component: AppPollComponent },
        {
          path: 'polls/:id/edit',
          //canDeactivate: [ProductEditGuard],
          component: AppPollComponent
        }
      ])
    ],
  declarations: [
    AppPollComponent,
    AppPollListComponent,
    // ProductDetailComponent,
    // ProductEditComponent
  ]
})
export class AppPollModule { }
