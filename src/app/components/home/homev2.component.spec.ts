/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Homev2Component } from './homev2.component';

describe('Homev2Component', () => {
  let component: Homev2Component;
  let fixture: ComponentFixture<Homev2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Homev2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Homev2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
