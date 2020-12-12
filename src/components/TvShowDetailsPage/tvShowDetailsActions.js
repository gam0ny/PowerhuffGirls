import {TV_SHOW_DETAILS__FETCH, TV_SHOW_DETAILS__UPDATE} from './tvShowDetailsActionTypes';

export const fetchTvShowDetails = (tvShowId) => {
    return (dispatch) => {
        dispatch({ type: TV_SHOW_DETAILS__FETCH, payload: tvShowId });

        fetch(`http://api.tvmaze.com/shows/${tvShowId}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                dispatch({  type: TV_SHOW_DETAILS__UPDATE, payload: data})
            });
    }
};