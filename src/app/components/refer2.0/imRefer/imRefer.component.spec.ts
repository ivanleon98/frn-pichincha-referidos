/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ImReferComponent } from './imRefer.component';

describe('ImReferComponent', () => {
  let component: ImReferComponent;
  let fixture: ComponentFixture<ImReferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImReferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImReferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
