import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, combineLatest } from 'rxjs';
import { map, filter, catchError } from 'rxjs/operators'
import { changeCurrentUser, changePage } from 'src/app/actions';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-quran-reader',
  templateUrl: './quran-reader.component.html',
  styleUrls: ['./quran-reader.component.css']
})
export class QuranReaderComponent implements OnInit {

  page: Observable<number>;
  quran: Observable<any>;


  pageSuras: Observable<any>;

  pageInput: FormControl = new FormControl(1);

  constructor(
    private store: Store<{ page: number, quran: {}, users: {}, currentUser: number }>
  ) {
    this.page = this.store.pipe(select('page'));
    this.quran = this.store.pipe(select('quran'));

    this.pageSuras = combineLatest(this.page, this.quran)
      .pipe(
        filter(([page, quran]) => page > 0),
        map(([page, quran]) => {
          const { pagesStructure } = quran;

          let suras = [];

          if (!pagesStructure[page]) return [];

          pagesStructure[page].surasIds.forEach((suraId, index) => {
            suras.push({
              suraId: suraId,
              versesIds: pagesStructure[page].versesIds[index]
            });
          });

          return suras;
        })
      );

  }


  ngOnInit() {
    this.pageInput.valueChanges
      .subscribe(page => {
        this.store.dispatch(changePage({ page: parseInt(page) }));
      });
  }


}
