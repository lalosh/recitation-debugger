import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseUsersComponent } from './browse-users.component';

describe('BrowseUsersComponent', () => {
  let component: BrowseUsersComponent;
  let fixture: ComponentFixture<BrowseUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
