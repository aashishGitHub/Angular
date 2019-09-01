import { Component, OnInit, Input} from '@angular/core';
import {ChartModule} from 'primeng/chart';
// import { PollService } from './app-poll.service';
import { AppPoll } from './app-poll';
import { ElementRef } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { PollActionTypes } from 'src/app/app-poll/state/poll.actions';
import { AppPollResult } from 'src/app/app-poll/app-poll-result';

@Component({
  selector: 'app-poll',
  templateUrl: './app-poll.component.html',
  styleUrls: ['./app-poll.component.less']
})
export class AppPollComponent implements OnInit {
    // ngOnChanges(changes: SimpleChanges): void {
    //     //getPollResult( this.poll.id);

    //     console.log("Method not implemented.");
    // }
  data: any;
  todaysPoll: AppPoll;
  @Input() poll: AppPoll;
  @Input() name: string;
  errorMessage = '';

// constructor(private pollService: PollService) {
    constructor(private store: Store<any>) {
    this.data = {
          labels: ['A', 'B', 'C'],
          datasets: [
              {
                  data: [300, 50, 100],
                  backgroundColor: [
                      '#FF6384',
                      '#36A2EB',
                      '#FFCE56'
                  ],
                  hoverBackgroundColor: [
                      '#FF6384',
                      '#36A2EB',
                      '#FFCE56'
                  ]
              }]
          };
}

ngOnInit() {
   // this.pollService.getPolls()
    // .subscribe(
    //     polls => this.polls = polls,
    //     error => this.errorMessage = <any>error)
       }
vote(event: ElementRef, index: number): any {
        console.log(index);
        const pollState: AppPollResult = {
            id: 0,
            votesCount : 0,
            options : [{
                id: index,
                count: 100
            }]
            };

        this.store.dispatch({
            type: PollActionTypes.ToggleVote,
            payload: pollState
        });
    }


update(event: Event) {
  // this.data = //create new data
}


}
