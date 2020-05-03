import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, combineLatest } from 'rxjs';
import { map, filter, catchError } from 'rxjs/operators'
import { changeCurrentUser, changePage } from './actions';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  page: Observable<number>;
  quran: Observable<any>;
  users: Observable<any>;
  currentUser: Observable<any>;

  pageSuras: Observable<any>;

  pageInput: FormControl = new FormControl(1);

  constructor(
    private store: Store<{ page: number, quran: {}, users: {}, currentUser: number }>
  ) {
    this.page = this.store.pipe(select('page'));
    this.quran = this.store.pipe(select('quran'));
    this.users = this.store.pipe(select('users'));
    this.currentUser = this.store.pipe(select('currentUser'));

    this.pageSuras = combineLatest(this.page,this.quran)
    .pipe(
      filter(([page, quran]) => page > 0),
      map(([page, quran]) => {
        const { pagesStructure, surasStructure, } = quran;

        let suras = [
          // {
          //   suraId: 1,
          //   versesIds: [ 1, 7 ]
          // }
        ];

        if(!pagesStructure[page]) return [];

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


  ngOnInit(){
    this.pageInput.valueChanges
    .subscribe(page => {
      this.store.dispatch(changePage({ page: parseInt(page) }));
    });
  }

  keys(object) {
    return Object.keys(object);
  }

  changeCurrentUser(userId) {
    this.store.dispatch(changeCurrentUser({ userId: parseInt(userId) }))
  }

}
