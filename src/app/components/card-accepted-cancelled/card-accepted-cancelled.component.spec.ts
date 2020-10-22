import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAcceptedCancelledComponent } from './card-accepted-cancelled.component';

describe('CardAcceptedCancelledComponent', () => {
  let component: CardAcceptedCancelledComponent;
  let fixture: ComponentFixture<CardAcceptedCancelledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardAcceptedCancelledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAcceptedCancelledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
