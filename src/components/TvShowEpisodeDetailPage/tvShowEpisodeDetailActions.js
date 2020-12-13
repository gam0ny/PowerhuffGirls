import {
    TV_SHOW__EPISODE__FETCH,
    TV_SHOW__EPISODE__FETCH_COMPLETED,
    TV_SHOW__EPISODE__UPDATE,
} from './tvShowEpisodeDetailActionTypes';

const endpoint = 'http://api.tvmaze.com';

export const fetchTvShowEpisodeDetails = (episodeId) => {
    return (dispatch) => {
        dispatch({type: TV_SHOW__EPISODE__FETCH, payload: episodeId});

        fetch(`${endpoint}/episodes/${episodeId}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                dispatch({type: TV_SHOW__EPISODE__UPDATE, payload: data});
                dispatch({type: TV_SHOW__EPISODE__FETCH_COMPLETED});
            })
    }
}