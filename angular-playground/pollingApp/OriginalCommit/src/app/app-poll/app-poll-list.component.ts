import { Component, OnInit } from '@angular/core';
import { AppPoll } from './app-poll';
import { AppPollService } from './app-poll.service';
import { ElementRef } from '@angular/core/src/linker/element_ref';

import { AppPollResultsService } from './app-poll-results.service';
import { AppPollResult } from 'src/app/app-poll/app-poll-result';

@Component({
  selector: 'app-poll-list',
  templateUrl: './app-poll-list.component.html',
  styleUrls: ['./app-poll-list.component.less']
})
export class AppPollListComponent implements OnInit {
  data: any;
  polls: AppPoll[];
  poll : AppPoll;  
  errorMessage = '';
  pResult: AppPollResult;
  
constructor(private pollService: AppPollService
//, private pollResultService: AppPollResultsService
) {    }

ngOnInit() {
    this.pollService.getPolls().subscribe(
        polls => {
            this.polls = polls;
            this.poll = this.getLatestPoll(this.polls);          
           
        },
        error => this.errorMessage = <any>error)
    }

    getLatestPoll(ps: AppPoll[]): AppPoll{     
     const sortedPolls: AppPoll[] =  this.polls.sort((poll1: AppPoll, poll2: AppPoll )=>
      poll2.publishedDate - poll1.publishedDate);

    return  sortedPolls[0];
    }

    // getPollResult(pId: number): void{

    //   this.pollResultService.getPollResult(pId).subscribe(
    //     pollResult => {
    //       this.pResult = pollResult;
    //     },
    //     error => this.errorMessage = <any>error)
      
    // }  
update(event: Event) {
  //this.data = //create new data
}
}
