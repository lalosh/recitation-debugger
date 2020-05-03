import { createAction, props } from '@ngrx/store'

export const upLetter = createAction(
    'UP_LETTER',
    props<{
        userId: number,
        letter: string,
        letterPosition: number,
        word: string,
        wordPosition: number,
        verse: string,
        verseId: number,
        suraId: number
    }>()
);


export const downLetter = createAction(
    'DOWN_LETTER',
    props<{
        userId: number,
        letter: string,
        letterPosition: number,
        word: string,
        wordPosition: number,
        verse: string,
        verseId: number,
        suraId: number
    }>()
);

export const resetLetter = createAction(
    'RESET_LETTER',
    props<{
        userId: number,
        letter: string,
        letterPosition: number,
        word: string,
        wordPosition: number,
        verse: string,
        verseId: number,
        suraId: number
    }>()
);
