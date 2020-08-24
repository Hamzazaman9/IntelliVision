import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceChartComponent } from './space-chart.component';

describe('SpaceChartComponent', () => {
  let component: SpaceChartComponent;
  let fixture: ComponentFixture<SpaceChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
