import { TestBed } from '@angular/core/testing';

import { AppPollResultsService } from './app-poll-results.service';

describe('AppPollResultsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppPollResultsService = TestBed.get(AppPollResultsService);
    expect(service).toBeTruthy();
  });
});
