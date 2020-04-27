import { createAction, props } from '@ngrx/store'

export const initVerse = createAction(
    'INIT_VERSE_FOR_USER',
    props<{ userId: string, page: string, verse: string, wordsCount: number, lettersCount: number }>()
);

export const upwardLetter = createAction(
    'UPWARD_LETTER_FOR_USER',
    props<{ userId: number, page: number, verse: number, letterIndex: number }>()
);

export const downwardLetter = createAction(
    'DOWNWARD_LETTER_FOR_USER',
    props<{ userId: string, page: string, verse: string, letterIndex: number, wordPosition: number }>()
);


export const resetLetter = createAction(
    'RESET_LETTER_FOR_USER',
    props<{ userId: number, page: number, verse: number, letterIndex: number }>()
);