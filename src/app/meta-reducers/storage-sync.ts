import { ActionReducer } from '@ngrx/store';
import { merge } from 'lodash-es';

const LOCAL_STORAGE_KEY = 'recitation-debugger-0.0.1';


export function storageSync(reducer: ActionReducer<any>): ActionReducer<any> {

    // first execution flag
    let onInit = true;


    return function storageLoadReturned(state, action) {


        let nextState = reducer(state, action);

        if(onInit){
            onInit = false;
            let prevAppState = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
            return merge(nextState, prevAppState);
        }


        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(nextState));

        return nextState;
    }

}
