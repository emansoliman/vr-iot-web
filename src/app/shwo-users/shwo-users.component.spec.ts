import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShwoUsersComponent } from './shwo-users.component';

describe('ShwoUsersComponent', () => {
  let component: ShwoUsersComponent;
  let fixture: ComponentFixture<ShwoUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShwoUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShwoUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
