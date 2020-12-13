import { runAction } from '../../reducerHelper';
import {
    TV_SHOW__EPISODE__FETCH,
    TV_SHOW__EPISODE__UPDATE,
} from './tvShowEpisodeDetailActionTypes';

const initialState = {
    name: '',
    summary: '',
    image: {
        medium: null,
        original: null,
    },
};

const actions = {};

actions[TV_SHOW__EPISODE__FETCH] = (state) => {
    return state;
};

actions[TV_SHOW__EPISODE__UPDATE] = (state, action) => {
    return {
        ...state,
        ...action.payload,
    };
};

export function tvShowEpisodeDetailReducer(state = initialState, action) {
    return runAction(actions, state, action);
}