import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeeeComponent } from './homeee.component';

describe('HomeeeComponent', () => {
  let component: HomeeeComponent;
  let fixture: ComponentFixture<HomeeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
