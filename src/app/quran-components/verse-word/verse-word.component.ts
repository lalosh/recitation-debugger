import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, combineLatest } from 'rxjs';
import { upLetter, downLetter, resetLetter } from 'src/app/actions';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'verse-word',
  templateUrl: './verse-word.component.html',
  styleUrls: ['./verse-word.component.css']
})
export class VerseWordComponent implements OnInit {

  @Input() suraId: number;
  @Input() verseId: number;
  @Input() verse: string;
  @Input() wordPosition: number;
  @Input() word: string;

  currentUser: Observable<number>;
  users: Observable<any>;

  wordMask: Observable<string>;

  constructor(
    private store: Store<{ currentUser: number, users: any }>
  ) {
    this.currentUser = this.store.pipe(select('currentUser'));
    this.users = this.store.pipe(select('users'));
  }

  ngOnInit(): void {

    this.wordMask = combineLatest(this.users, this.currentUser)
      .pipe(
        map(([users, currentUserId]) => {

          if (
            users[currentUserId] &&
            users[currentUserId].masks &&
            users[currentUserId].masks[this.suraId] &&
            users[currentUserId].masks[this.suraId][this.verseId]
          )
            return users[currentUserId].masks[this.suraId][this.verseId].split(' ')[this.wordPosition]

          return '';
        })
      );

  }

  split(word) {
    return word.split('');
  }

  downLetter(letter, letterPosition) {

    this.currentUser
      .pipe(take(1))
      .subscribe(userId =>
        this.store.dispatch(downLetter({
          userId,
          letter,
          letterPosition,
          word: this.word,
          wordPosition: this.wordPosition,
          verse: this.verse,
          verseId: this.verseId,
          suraId: this.suraId
        }))
      );
  };

  upLetter(letter, letterPosition) {

    this.currentUser
      .pipe(take(1))
      .subscribe(userId =>
        this.store.dispatch(upLetter({
          userId,
          letter,
          letterPosition,
          word: this.word,
          wordPosition: this.wordPosition,
          verse: this.verse,
          verseId: this.verseId,
          suraId: this.suraId
        }))
      );
  }


  resetLetter(letter, letterPosition) {

    this.currentUser
      .pipe(take(1))
      .subscribe(userId =>
        this.store.dispatch(resetLetter({
          userId,
          letter,
          letterPosition,
          word: this.word,
          wordPosition: this.wordPosition,
          verse: this.verse,
          verseId: this.verseId,
          suraId: this.suraId
        }))
      );
  }

}
