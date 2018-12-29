import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {
  pageTitle="Polling Application"
  
  ngOnInit() {    
  }

  //Getter property as we use it like  *ngIf="isLoggedIn">
  get isLoggedIn(): boolean{ 
    return true;
  }

  get userName(): string{
    return '';
  }
  constructor(private router: Router) { }
  
  logout(): void{
    this.router.navigate(['/welcome']);

  }

}
