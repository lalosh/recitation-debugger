import { createReducer, on } from "@ngrx/store";
import { initVerse, downwardLetter } from '../actions';

function downwardLetterInString(senetence, wordPosition, letterPosition){
    senetence = senetence.split(' ');
    senetence[wordPosition][letterPosition] = '-1';
    let res = senetence.join(' ');

    console.warn(res)
    return res;
}

const _usersReducer = createReducer(
    {
        '23': {
            pages: {
                '1': {
                    '1': [],
                    '2': [],
                    '3': [],
                    '4': [],
                    '5': [],
                    '6': [],
                    '7': []
                }
            },
            username: 'lalosh'
        }
    },

    on(initVerse, (state, action) => {
  
        return {
            ...state,
            [action.userId]: {
                ...state[action.userId],
                pages: {
                    ...state[action.userId].pages,
                    [action.page]: {
                        ...state[action.userId].pages[action.page],
                        [action.verse]: new Array(action.wordsCount).fill(0).map(word => new Array(action.lettersCount).fill(0))
                    }
                }
            }
        }
    }),

    on(downwardLetter, (state, action) => {

        return {
            ...state,
            [action.userId]: {
                ...state[action.userId],
                pages: {
                    ...state[action.userId].pages,
                    [action.page]: {
                        ...state[action.userId].pages[action.page],
                        [action.verse]: downwardLetterInString(state[action.userId].pages[action.page][action.verse], action.wordPosition, action.letterIndex)
                    }
                }
            }
        }
    })

);



export function usersReducer(state, action){
    return _usersReducer(state, action);
}