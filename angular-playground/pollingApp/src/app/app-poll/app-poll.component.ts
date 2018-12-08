import { Component, OnInit } from '@angular/core';
import {ChartModule} from 'primeng/chart';

@Component({
  selector: 'app-app-poll',
  templateUrl: './app-poll.component.html',
  styleUrls: ['./app-poll.component.less']
})
export class AppPollComponent implements OnInit {
  data: any;
constructor() {
  this.data = {
      labels: ['A','B','C'],
      datasets: [
          {
              data: [300, 50, 100],
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ]
          }]    
      };
}

ngOnInit() {
}

update(event: Event) {
  //this.data = //create new data
}
}
