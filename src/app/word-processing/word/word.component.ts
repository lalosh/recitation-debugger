import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {

  @Input() word;

  wordState;

  constructor() { }

  ngOnInit(): void {
    this.wordState = this.split(this.word);
  }

  split(string) {
    return string.split('');
  }

  letterClickHandler(letter, i) {
    this.wordState[i] = this.wordState[i] == 0 ? letter : 0;
  }

}
