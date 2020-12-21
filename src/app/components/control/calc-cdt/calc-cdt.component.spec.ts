/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CalcCdtComponent } from './calc-cdt.component';

describe('CalcCdtComponent', () => {
  let component: CalcCdtComponent;
  let fixture: ComponentFixture<CalcCdtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcCdtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcCdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
