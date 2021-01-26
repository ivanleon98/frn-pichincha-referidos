/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CalcCeComponent } from './calc-ce.component';

describe('CalcCeComponent', () => {
  let component: CalcCeComponent;
  let fixture: ComponentFixture<CalcCeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcCeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcCeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
