// store.ts

import {createStore} from 'redux';
import {createWrapper} from 'next-redux-wrapper';

const INITIAL_STATE = {
        poem:{poet:'',poetHTML:''},
        tags:[]
}
// create your reducer
const reducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_POEM':
            // Attention! This will overwrite client state! Real apps should use proper reconciliation.
            return {...state, poem:action.payload};
        case 'ADD_TAG':
            return {...state,tags:action.payload}
        default:
            return state;
    }
};

// create a makeStore function
const makeStore = (context) => createStore(reducer);

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, {debug: true});
