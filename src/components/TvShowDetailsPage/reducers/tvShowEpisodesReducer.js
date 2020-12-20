import { runAction } from '../../../helper';
import { TV_SHOW__EPISODES__UPDATE } from './actionTypes';

export const initialState = [];

const actions = {};

actions[TV_SHOW__EPISODES__UPDATE] = (state, action) => {
    return action.payload.concat();
}

export function tvShowEpisodesReducer(state = initialState, action) {
    return runAction(actions, state, action);
}
