import { InMemoryDbService } from 'angular-in-memory-web-api';
import { AppPoll } from './app-poll';

export class AppPollResult implements InMemoryDbService{
    createDb() {

        const pollResult = [
            { "id": 5,
            "votesCount":0,
            "options": [
                {
                    "id": 13,
                    "count": 0
                },
                {
                          "id": 14,
                          "count": 0			
                          }]
                        }            
        ]
        return {pollResult};
    }
}

