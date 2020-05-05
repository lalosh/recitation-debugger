import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuranReaderComponent } from './quran-reader.component';

describe('QuranReaderComponent', () => {
  let component: QuranReaderComponent;
  let fixture: ComponentFixture<QuranReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuranReaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuranReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
