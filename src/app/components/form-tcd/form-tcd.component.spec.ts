/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormTcdComponent } from './form-tcd.component';

describe('FormTcdComponent', () => {
  let component: FormTcdComponent;
  let fixture: ComponentFixture<FormTcdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTcdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTcdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
