import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialNavBarComponent } from './initial-nav-bar.component';

describe('InitialNavBarComponent', () => {
  let component: InitialNavBarComponent;
  let fixture: ComponentFixture<InitialNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
