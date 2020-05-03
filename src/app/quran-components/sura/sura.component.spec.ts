import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuraComponent } from './sura.component';

describe('SuraComponent', () => {
  let component: SuraComponent;
  let fixture: ComponentFixture<SuraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
