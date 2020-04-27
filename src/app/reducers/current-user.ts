import { createReducer, on } from '@ngrx/store';
import { changeCurrentUser } from '../actions/current-user';

export const _currentUserReducer = createReducer(
    23,

    on(changeCurrentUser, (state, action) => action.userId)
);

export function currentUserReducer(state, action) {
    return _currentUserReducer(state, action);
}