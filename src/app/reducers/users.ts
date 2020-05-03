import { createReducer, on } from "@ngrx/store";
import { upLetter, downLetter, resetLetter } from '../actions';
import _ from 'lodash';
import moment from 'moment';

const _usersReducer = createReducer(
    {
        23: {
            name: "lalosh",
            age: "25",
            picture: "",
            stats: {},
            masks: {}
        },
        77: {
            name: "moied",
            age: "19",
            picture: "",
            stats: {},
            masks: {}
        }
    },

    on(upLetter, (state, action) => {

        try {

            let user = _.cloneDeep(state[action.userId]);

            let suraId = String(action.suraId);
            let verseId = String(action.verseId);

            if (!user.masks[suraId])
                user.masks[suraId] = {}

            let mask = user.masks[suraId][verseId] || undefined;

            if (!mask) {
                //make new mask
                // verse is a string
                mask = action.verse.split(' ').map(word => new Array(word.length).fill(0).join('')).join(' ');
            }


            // immutable change for the string of mask
            let _newMask = mask
                .split(' ')
                .map(
                    (wordMask, wordPosition) =>

                        wordPosition == action.wordPosition ?

                            wordMask
                                .split('')
                                .map(
                                    (letter, letterPosition) =>
                                        letterPosition == action.letterPosition ? '1' : letter
                                )
                                .join('')

                            : wordMask
                )
                .join(' ');


            user.masks[suraId][verseId] = _newMask;
            
            let now = moment().format('DD-MM-YYYY');
            
            if(!user.stats[now]) user.stats[now] = {};

            if(!user.stats[now][action.letter]) user.stats[now][action.letter] = { up: 0, down: 0};

            user.stats[now][action.letter].up = user.stats[now][action.letter].up + 1;

            return {
                ...state,
                [action.userId]: user
            }

        } catch (error) {
            console.error(error);
            return state;
        }
    }),

    on(downLetter, (state, action) => {

        try {

            let user = _.cloneDeep(state[action.userId]);

            let suraId = String(action.suraId);
            let verseId = String(action.verseId);

            if (!user.masks[suraId])
                user.masks[suraId] = {}

            let mask = user.masks[suraId][verseId] || undefined;

            if (!mask) {
                //make new mask
                // verse is a string
                mask = action.verse.split(' ').map(word => new Array(word.length).fill(0).join('')).join(' ');
            }


            // immutable change for the string of mask
            let _newMask = mask
                .split(' ')
                .map(
                    (wordMask, wordPosition) =>

                        wordPosition == action.wordPosition ?

                            wordMask
                                .split('')
                                .map(
                                    (letter, letterPosition) =>
                                        letterPosition == action.letterPosition ? '2' : letter
                                )
                                .join('')

                            : wordMask
                )
                .join(' ');


            user.masks[suraId][verseId] = _newMask;

            let now = moment().format('DD-MM-YYYY');
            
            if(!user.stats[now]) user.stats[now] = {};

            if(!user.stats[now][action.letter]) user.stats[now][action.letter] = { up: 0, down: 0};

            user.stats[now][action.letter].down = user.stats[now][action.letter].down + 1;


            return {
                ...state,
                [action.userId]: user
            }

        } catch (error) {
            console.error(error);
            return state;
        }
    }),

    on(resetLetter, (state, action) => {

        try {

            let user = _.cloneDeep(state[action.userId]);

            let suraId = String(action.suraId);
            let verseId = String(action.verseId);

            if (!user.masks[suraId])
                user.masks[suraId] = {}

            let mask = user.masks[suraId][verseId] || undefined;

            if (!mask) {
                //make new mask
                // verse is a string
                mask = action.verse.split(' ').map(word => new Array(word.length).fill(0).join('')).join(' ');
            }


            // immutable change for the string of mask
            let _newMask = mask
                .split(' ')
                .map(
                    (wordMask, wordPosition) =>

                        wordPosition == action.wordPosition ?

                            wordMask
                                .split('')
                                .map(
                                    (letter, letterPosition) =>
                                        letterPosition == action.letterPosition ? '0' : letter
                                )
                                .join('')

                            : wordMask
                )
                .join(' ');


            user.masks[suraId][verseId] = _newMask;

            return {
                ...state,
                [action.userId]: user
            }

        } catch (error) {
            console.error(error);
            return state;
        }
    }),
);



export function usersReducer(state, action) {
    return _usersReducer(state, action);
}