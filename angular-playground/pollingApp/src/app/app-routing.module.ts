import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from 'src/app/app.component';
import { ShellComponent } from 'src/app/home/shell.component';
import { PageNotFoundComponent } from 'src/app/home/page-not-found.component';
import { WelcomeComponent } from 'src/app/home/welcome.component';
import { AuthGuard } from 'src/app/user/auth-guard.service';
import { LoginComponent } from 'src/app/user/login.component';

const routes: Routes = [
{
  path: '',
  component: ShellComponent,
  children: [
    { path: 'welcome', component: WelcomeComponent },
    {
      path: 'polls',
       canActivate: [AuthGuard],
      loadChildren: './app-poll/app-poll.module#AppPollModule'
    },
    { path: 'kycform', loadChildren:'./user/user.module#UserModule'},
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  ]
},
{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
