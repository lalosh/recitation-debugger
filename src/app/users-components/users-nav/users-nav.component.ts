import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { changeCurrentUser } from 'src/app/actions';

@Component({
  selector: 'users-nav',
  templateUrl: './users-nav.component.html',
  styleUrls: ['./users-nav.component.css']
})
export class UsersNavComponent implements OnInit {

  users: Observable<any>;
  currentUser: Observable<any>;

  constructor(
    private store: Store<{ users: {}, currentUser: number }>
  ) {
    this.users = this.store.pipe(select('users'));
    this.currentUser = this.store.pipe(select('currentUser'));
  }

  ngOnInit(): void {
  }


  keys(object) {
    return Object.keys(object);
  }

  changeCurrentUser(userId) {
    this.store.dispatch(changeCurrentUser({ userId: parseInt(userId) }))
  }

}
