import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sentence',
  templateUrl: './sentence.component.html',
  styleUrls: ['./sentence.component.css']
})
export class SentenceComponent implements OnInit {

  @Input() sentence;
  
  constructor() { }

  ngOnInit(): void {
  }

  getWords(sentence){
    return sentence.split(' ');
  }

}
