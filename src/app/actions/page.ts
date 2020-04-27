import { createAction, props } from '@ngrx/store';

export const changePage = createAction(
    'CHANGE_PAGE_NUMBER',
    props<{ page: number }>()
);