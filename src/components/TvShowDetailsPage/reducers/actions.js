import { httpGet } from "../../../network";
import {
    TV_SHOW__DETAILS__FETCH, TV_SHOW__DETAILS__FETCH_COMPLETED, TV_SHOW__DETAILS__UPDATE,
    TV_SHOW__EPISODES__FETCH, TV_SHOW__EPISODES__FETCH_COMPLETED, TV_SHOW__EPISODES__UPDATE,
} from './actionTypes';

export const fetchTvShowDetails = (tvShowId) => {
    return (dispatch) => {
        dispatch({ type: TV_SHOW__DETAILS__FETCH, payload: tvShowId });

        return httpGet(`shows/${tvShowId}`)
            .then((data) => {
                dispatch({  type: TV_SHOW__DETAILS__UPDATE, payload: data});
                dispatch({ type: TV_SHOW__DETAILS__FETCH_COMPLETED});
            })
            .catch(error => {
                console.warn('fetchTvShowDetails error', error);
                dispatch({ type: TV_SHOW__DETAILS__FETCH_COMPLETED});
            });
    }
};

export const fetchTvShowEpisodes = (tvShowId) => {
    return (dispatch) => {
        dispatch({ type: TV_SHOW__EPISODES__FETCH, payload: tvShowId });

        return httpGet(`shows/${tvShowId}/episodes`)
            .then((data) => {
                dispatch({ type: TV_SHOW__EPISODES__UPDATE, payload: data });
                dispatch({ type: TV_SHOW__EPISODES__FETCH_COMPLETED});
            })
            .catch((error) => {
                console.warn('error in fetchTvShowEpisodes: ', error);
                dispatch({ type: TV_SHOW__EPISODES__FETCH_COMPLETED});
            });
    }
}
