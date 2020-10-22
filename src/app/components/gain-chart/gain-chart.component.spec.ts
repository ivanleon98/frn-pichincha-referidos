import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GainChartComponent } from './gain-chart.component';

describe('GainChartComponent', () => {
  let component: GainChartComponent;
  let fixture: ComponentFixture<GainChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GainChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GainChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
