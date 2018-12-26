import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppPollComponent } from './app-poll/app-poll.component';
import { KycFormComponent } from './user/kyc-form.component';

const routes: Routes = [
  {path: 'welcome', component: AppPollComponent},
 //{path: '**', redirectTo: "welcome", pathMatch: "full"},
 {path:'', redirectTo: "welcome", pathMatch: "full"},
 {path: 'kycform', component: KycFormComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
