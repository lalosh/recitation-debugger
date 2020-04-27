import { createReducer } from "@ngrx/store";
import * as Quran from '../Quran.json';

const _quranReducer = createReducer(
    (Quran as any).default
);

export function quranReducer(state, action) {
    return _quranReducer(state, action);
}