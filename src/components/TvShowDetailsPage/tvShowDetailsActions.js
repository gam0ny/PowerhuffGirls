import {
    TV_SHOW__DETAILS__FETCH, TV_SHOW__DETAILS__FETCH_COMPLETED, TV_SHOW__DETAILS__UPDATE,
    TV_SHOW__EPISODES__FETCH, TV_SHOW__EPISODES__FETCH_COMPLETED, TV_SHOW__EPISODES__UPDATE,
} from './tvShowDetailsActionTypes';

const endpoint = 'http://api.tvmaze.com';

export const fetchTvShowDetails = (tvShowId) => {
    return (dispatch) => {
        dispatch({ type: TV_SHOW__DETAILS__FETCH, payload: tvShowId });

        fetch(`${endpoint}/shows/${tvShowId}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                dispatch({  type: TV_SHOW__DETAILS__UPDATE, payload: data});
                dispatch({ type: TV_SHOW__DETAILS__FETCH_COMPLETED});
            });
    }
};

export const fetchTvShowEpisodes = (tvShowId) => {
    return (dispatch) => {
        dispatch({ type: TV_SHOW__EPISODES__FETCH, payload: tvShowId });

        fetch(`${endpoint}/shows/${tvShowId}/episodes`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                dispatch({ type: TV_SHOW__EPISODES__UPDATE, payload: data });
                dispatch({ type: TV_SHOW__EPISODES__FETCH_COMPLETED});
            })
    }
}