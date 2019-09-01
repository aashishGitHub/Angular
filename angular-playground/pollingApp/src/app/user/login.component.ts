import { Component } from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/user/auth.service';

/* NgRx */
import { Store, select } from '@ngrx/store';

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    errorMessage: string;

    maskUserName: boolean;

    constructor(
        private authService: AuthService,
        private router: Router,
        private store: Store<any>

    ) {}
    ngOnInit() {
      this.store.pipe(select('users')).subscribe(
        users => {
          if (users) {
            this.maskUserName = users.maskUserName;
          }
        });
    }

    checkChanged(changed: boolean): void {
      this.store.dispatch({
        type: '[User] MASK_USER_NAME',
        payload: changed
      });
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

      cancel(): void {
        this.router.navigate(['welcome']);
      }
}
