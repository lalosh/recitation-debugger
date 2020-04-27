import { createReducer, on } from '@ngrx/store';
import { changePage } from '../actions/page';

const _pageReducer = createReducer(
    1,

    on(changePage, (state, action) => action.page)
);

export function pageReducer(state, action){
    return _pageReducer(state, action);
}