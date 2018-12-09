import { Component, OnInit } from '@angular/core';
import { AppPoll } from './app-poll';
import { PollService } from './app-poll.service';
import { ElementRef } from '@angular/core/src/linker/element_ref';

@Component({
  selector: 'app-app-poll-list',
  templateUrl: './app-poll-list.component.html',
  styleUrls: ['./app-poll-list.component.less']
})
export class AppPollListComponent implements OnInit {
  data: any;
  polls: AppPoll[];
  poll : AppPoll;  
  errorMessage = '';
  
constructor(private pollService: PollService) {    
}

ngOnInit() {
    this.pollService.getPolls().subscribe(
        polls => {
            this.polls = polls;
            this.poll = polls[0];
        },
        error => this.errorMessage = <any>error)
    }

 vote(event: ElementRef, index: number): any{
        console.log(index);
    }

update(event: Event) {
  //this.data = //create new data
}
}
