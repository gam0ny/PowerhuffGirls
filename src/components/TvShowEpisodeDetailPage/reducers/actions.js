import { httpGet } from "../../../network";
import {
    TV_SHOW__EPISODE__FETCH,
    TV_SHOW__EPISODE__FETCH_COMPLETED,
    TV_SHOW__EPISODE__UPDATE,
} from './actionTypes';


export const fetchTvShowEpisodeDetails = (episodeId) => {
    return (dispatch) => {
        dispatch({type: TV_SHOW__EPISODE__FETCH, payload: episodeId});

        return httpGet(`episodes/${episodeId}`)
        .then((data) => {
            dispatch({type: TV_SHOW__EPISODE__UPDATE, payload: data});
            dispatch({type: TV_SHOW__EPISODE__FETCH_COMPLETED});
        })
        .catch(error=> {
            console.error("Error in fetchTvShowEpisodeDetails", error);
            dispatch({type: TV_SHOW__EPISODE__FETCH_COMPLETED});
        });
    }
}
