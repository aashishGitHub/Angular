import { Component } from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/user/auth.service';

@Component({
    templateUrl:'./login.component.html'
})
export class LoginComponent implements OnInit, OnDestroy{
    errorMessage: string;
    constructor(
        private authService: AuthService,
        private router: Router
    ){}
    ngOnInit(){

    }
    ngOnDestroy(){

    }

    login(loginForm: NgForm): void {
        if (loginForm && loginForm.valid) {
          const userName = loginForm.form.value.userName;
          const password = loginForm.form.value.password;
          this.authService.login(userName, password);
    
          if (this.authService.redirectUrl) {
            this.router.navigateByUrl(this.authService.redirectUrl);
          } else {
            this.router.navigate(['/polls']);
          }
        } else {
          this.errorMessage = 'Please enter a user name and password.';
        }
      }
}