import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartCaloriesComponent } from './chart-calories.component';

describe('ChartCaloriesComponent', () => {
  let component: ChartCaloriesComponent;
  let fixture: ComponentFixture<ChartCaloriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartCaloriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartCaloriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
