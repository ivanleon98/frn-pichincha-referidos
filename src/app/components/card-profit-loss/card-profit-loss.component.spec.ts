import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProfitLossComponent } from './card-profit-loss.component';

describe('CardProfitLossComponent', () => {
  let component: CardProfitLossComponent;
  let fixture: ComponentFixture<CardProfitLossComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardProfitLossComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardProfitLossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
