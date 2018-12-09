import { Component, OnInit, Input} from '@angular/core';
import {ChartModule} from 'primeng/chart';
import { PollService } from './app-poll.service';
import { AppPoll } from './app-poll';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-poll',
  templateUrl: './app-poll.component.html',
  styleUrls: ['./app-poll.component.less']
})
export class AppPollComponent implements OnInit {
  data: any;
  todaysPoll: AppPoll;
  @Input() poll: AppPoll;
  @Input() name: string;
  errorMessage = '';
  
constructor(private pollService: PollService) {
    
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
    this.pollService.getPolls()
    // .subscribe(
    //     polls => this.polls = polls,
    //     error => this.errorMessage = <any>error)
       }
vote(event: ElementRef, index: number): any{
        console.log(index);
        
    }

update(event: Event) {
  //this.data = //create new data
}
}
