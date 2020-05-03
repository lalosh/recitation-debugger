import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {

  @Input() word;
  @Input() verse;
  @Input() wordPosition;
  
  wordState;

  page: Observable<number>;
  currentUser: Observable<number>;

  constructor(
    private store: Store<{ page: number, currentUser: number }>
  ) {
    this.page = this.store.pipe(select('page'));
    this.currentUser = this.store.pipe(select('currentUser'));
  }


  ngOnInit(): void {
    this.wordState = this.split(this.word);
  }

  split(string) {
    return string.split('');
  }

  downward(letter, index) {
    this.wordState[index] = -1;

    // this.store.dispatch(
    //   downwardLetter({
    //     userId: '23',
    //     page: '1',
    //     verse: String(this.verse+1),
    //     letterIndex: index,
    //     wordPosition: this.wordPosition
    //   })
    // );
  }

  upward(letter, index) {
    this.wordState[index] = 1;
  }

  reset(letter, index) {
    this.wordState[index] = 0;
  }


}
