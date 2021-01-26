/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TableTcdComponent } from './table-tcd.component';

describe('TableTcdComponent', () => {
  let component: TableTcdComponent;
  let fixture: ComponentFixture<TableTcdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableTcdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTcdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
