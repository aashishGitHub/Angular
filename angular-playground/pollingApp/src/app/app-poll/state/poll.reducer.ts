import { AppPollResult } from "src/app/app-poll/app-poll-result";
import { PollActions, PollActionTypes } from 'src/app/app-poll/state/poll.actions';


const initialPollState : AppPollResult = {
id: 0,
votesCount : 0,
options : [{
    id:0,
    count:0
}]
}

export function PollReducer(state = initialPollState, action: PollActions): AppPollResult {
switch(action.type){
case PollActionTypes.ToggleVote:
console.log(JSON.stringify(state));
console.log(JSON.stringify(action.payload));
    return {        
        ...state,
        id : action.payload.id,
        votesCount: state.votesCount +1,
        options:[...action.payload.options]

    }
default:
    return state;
 }
}
