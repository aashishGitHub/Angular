import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentChildComponentComponent } from './parent-child-component.component';

describe('ParentChildComponentComponent', () => {
  let component: ParentChildComponentComponent;
  let fixture: ComponentFixture<ParentChildComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentChildComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentChildComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
