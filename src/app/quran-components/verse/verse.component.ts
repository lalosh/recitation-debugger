import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { convertArabicToHindiNumbers } from 'src/app/utils';

@Component({
  selector: 'verse',
  templateUrl: './verse.component.html',
  styleUrls: ['./verse.component.css']
})
export class VerseComponent implements OnInit {

  @Input() suraId: number;
  @Input() verseId: number;

  quran: Observable<any>;

  verse:Observable<string>;

  constructor(
    private store: Store<{ quran: any }>
  ) { 
    this.quran = this.store.pipe(select('quran'));
  }

  ngOnInit(): void {
    this.verse = this.quran
    .pipe(
      map((quran: any) => {

        return quran.surasStructure[this.suraId].verses[this.verseId];
      })
    );

  }

  convertToHindiNumber(number){
    return convertArabicToHindiNumbers(number);
  }

  split(verse){
    return verse.split(' ');
  }
}
