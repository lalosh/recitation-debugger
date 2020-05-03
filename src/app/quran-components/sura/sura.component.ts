import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sura',
  templateUrl: './sura.component.html',
  styleUrls: ['./sura.component.css']
})
export class SuraComponent implements OnInit {

  @Input() suraId: number;
  @Input() versesIds: number[];

  versesIdsExpanded: number[] = [];
  
  constructor() {
   }

  ngOnInit(): void {
    let [ start, end ] = this.versesIds;

    for(let verseId = start - 1; verseId < end; verseId++){
      this.versesIdsExpanded.push(verseId);
    }
  }

}
