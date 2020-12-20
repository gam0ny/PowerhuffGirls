import { runAction } from '../../../reducerHelper';
import { TV_SHOW__DETAILS__UPDATE } from './actionTypes';

export const initialState = {
    name: '',
    summary: '',
    image: {
        medium: null,
        original: null,
    },
};

const actions = {};

actions[TV_SHOW__DETAILS__UPDATE] = (state, action) => {
    return {
        ...state,
        ...action.payload,
    }
};

export function tvShowDetailsReducer(state = initialState, action) {
    return runAction(actions, state, action);
}
