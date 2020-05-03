import { createReducer } from "@ngrx/store";
import * as Quran from './../quran/Quran.json';
import * as pagesStructure from './../quran/pages-structure.json';
import * as surasStructure from './../quran/suras-structure.json';

const _quranReducer = createReducer(
    {
        pagesStructure: (pagesStructure as any).default,
        surasStructure: (surasStructure as any).default
    }
);

export function quranReducer(state, action) {
    return _quranReducer(state, action);
}