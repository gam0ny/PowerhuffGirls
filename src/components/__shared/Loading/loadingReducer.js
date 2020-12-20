import { runAction } from '../../../reducerHelper';
import {
    TV_SHOW__DETAILS__FETCH,
    TV_SHOW__DETAILS__FETCH_COMPLETED,
    TV_SHOW__EPISODES__FETCH,
    TV_SHOW__EPISODES__FETCH_COMPLETED,

} from '../../TvShowDetailsPage/reducers/actionTypes';
import {
    TV_SHOW__EPISODE__FETCH,
    TV_SHOW__EPISODE__FETCH_COMPLETED,
} from '../../TvShowEpisodeDetailPage/reducers/actionTypes';

export const initialState = {
    count: 0,
};

const actions = {};

actions[TV_SHOW__DETAILS__FETCH] = (state) => {
    return {
        ...state,
        count: state.count + 1,
    }
}

actions[TV_SHOW__DETAILS__FETCH_COMPLETED] = (state) => {
    return {
        ...state,
        count: state.count - 1,
    }
}

actions[TV_SHOW__EPISODES__FETCH] = (state) => {
    return {
        ...state,
        count: state.count + 1,
    }
}

actions[TV_SHOW__EPISODES__FETCH_COMPLETED] = (state) => {
    return {
        ...state,
        count: state.count - 1,
    }
}

actions[TV_SHOW__EPISODE__FETCH] = (state) => {
    return {
        ...state,
        count: state.count + 1,
    }
}

actions[TV_SHOW__EPISODE__FETCH_COMPLETED] = (state) => {
    return {
        ...state,
        count: state.count - 1,
    }
};


export function loadingReducer (state = initialState, action) {
    return runAction(actions, state, action)
}
