import { Component, OnInit, Input } from '@angular/core';
import { convertArabicToHindiNumbers } from 'src/app/utils';
import { Store, select } from '@ngrx/store';
import { Observable, combineLatest } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'sentence',
  templateUrl: './sentence.component.html',
  styleUrls: ['./sentence.component.css']
})
export class SentenceComponent implements OnInit {

  @Input() sentence;
  @Input() number;

  page: Observable<number>;
  currentUser: Observable<number>;

  lock = true;

  constructor(
    private store: Store<{ page: number, currentUser: number }>
  ) {
    this.page = this.store.pipe(select('page'));
    this.currentUser = this.store.pipe(select('currentUser'));
  }

  ngOnInit(): void {
  }

  getWords(sentence) {
    return sentence.split(' ');
  }

  convertNumber(number) {
    return convertArabicToHindiNumbers(number);
  }

  initializeVerse() {
    if (this.lock){
      this.lock = false;
      // combineLatest(this.page, this.currentUser)
      //   .pipe(take(1))
      //   .subscribe(([page, currentUser]) => this.store.dispatch(
      //     initVerse({
      //       userId: String(currentUser),
      //       page: String(page),
      //       verse: String(this.number + 1),
      //       wordsCount: this.sentence.split(' ').length,
      //       lettersCount: this.sentence.length
      //     })
      //   ));
    }
  }
}
