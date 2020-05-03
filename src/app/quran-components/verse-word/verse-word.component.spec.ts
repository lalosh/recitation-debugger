import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerseWordComponent } from './verse-word.component';

describe('VerseWordComponent', () => {
  let component: VerseWordComponent;
  let fixture: ComponentFixture<VerseWordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerseWordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerseWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
