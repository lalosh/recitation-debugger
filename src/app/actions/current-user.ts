import { createAction, props } from '@ngrx/store';

export const changeCurrentUser = createAction(
    'CHANGE_CURRENT_USER',
    props<{ userId: number }>()
);
