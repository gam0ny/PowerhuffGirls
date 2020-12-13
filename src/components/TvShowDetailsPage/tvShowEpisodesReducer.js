import { runAction } from '../../reducerHelper';
import { TV_SHOW__EPISODES__FETCH, TV_SHOW__EPISODES__UPDATE } from './tvShowDetailsActionTypes';

const initialState = [];

const actions = {};

actions[TV_SHOW__EPISODES__FETCH] = (state) => {
    return state;
}

actions[TV_SHOW__EPISODES__UPDATE] = (state, action) => {
    return action.payload.concat();
}

export function tvShowEpisodesReducer(state = initialState, action) {
    return runAction(actions, state, action);
}