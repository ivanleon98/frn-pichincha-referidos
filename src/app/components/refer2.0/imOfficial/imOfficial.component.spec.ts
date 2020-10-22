/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ImOfficialComponent } from './imOfficial.component';

describe('ImOfficialComponent', () => {
  let component: ImOfficialComponent;
  let fixture: ComponentFixture<ImOfficialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImOfficialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImOfficialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
