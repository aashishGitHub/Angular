import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppPollComponent } from 'src/app/app-poll/app-poll.component';

const routes: Routes = [
  {path: 'welcome', component: AppPollComponent},
  {path: '**', redirectTo: "welcome", pathMatch: "full"},
  {path:'', redirectTo: "welcome", pathMatch: "full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
