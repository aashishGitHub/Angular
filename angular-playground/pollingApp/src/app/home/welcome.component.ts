import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less']
})
export class WelcomeComponent implements OnInit {
  pageTitle: string;
  constructor() { 
    this.pageTitle = "Welcome to poll app!"
  }

  ngOnInit() {
  }

}
