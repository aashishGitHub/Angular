import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/user/auth.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
    providedIn:'root'
})
export class AuthGuard implements CanActivate{

    constructor(private authService: AuthService,
    private router: Router){

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        return this.checkLoggedIn(state.url);      
        
       
        
    }

    checkLoggedIn(url: string): boolean{
        if( this.authService.isLoggedIn())
        return true;

         // Retain the attempted URL for redirection
         this.authService.redirectUrl = url;
         this.router.navigate(['/login']);
         return false;
    }

}