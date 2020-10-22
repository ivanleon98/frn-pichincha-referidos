/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyIncreaseComponent } from './myIncrease.component';

describe('MyIncreaseComponent', () => {
  let component: MyIncreaseComponent;
  let fixture: ComponentFixture<MyIncreaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyIncreaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyIncreaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
