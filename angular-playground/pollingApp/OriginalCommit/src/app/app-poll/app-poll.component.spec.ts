import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPollComponent } from './app-poll.component';

describe('AppPollComponent', () => {
  let component: AppPollComponent;
  let fixture: ComponentFixture<AppPollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
