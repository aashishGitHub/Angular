
/* NgRx */
import { Action } from '@ngrx/store';
import { AppPollResult } from 'src/app/app-poll/app-poll-result';

export enum PollActionTypes {
ToggleVote = '[Poll] Toggle Vote'
}

export class ToggleVote implements Action {
    readonly type = PollActionTypes.ToggleVote;

    constructor(public payload: AppPollResult){}
}
export type PollActions = ToggleVote 
| null;