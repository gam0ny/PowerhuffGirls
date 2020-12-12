import { runAction } from "../../reducerHelper";
import {TV_SHOW_DETAILS__FETCH, TV_SHOW_DETAILS__UPDATE} from './tvShowDetailsActionTypes';

const initialState = {
    name: '',
    summary: '',
    image: {
        medium: null,
        original: null,
    }
};

const actions = {};

actions[ TV_SHOW_DETAILS__FETCH ] = (state) => {
    return state;
}

actions[ TV_SHOW_DETAILS__UPDATE ] = (state, action) => {
    return {
        ...state,
        ...action.payload,
    }
};

export function tvShowDetailsReducer(state = initialState, action){
    return runAction(actions, state, action);
}