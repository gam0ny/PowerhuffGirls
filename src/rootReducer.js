import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router';

import { tvShowDetailsReducer } from "./components/TvShowDetailsPage/tvShowDetailsReducer";
import { tvShowEpisodesReducer } from './components/TvShowDetailsPage/tvShowEpisodesReducer';
import { tvShowEpisodeDetailReducer } from "./components/TvShowEpisodeDetailPage/tvShowEpisodeDetailReducer";
import { loadingReducer } from './__shared/Loading/loadingReducer';

export const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    loading: loadingReducer,
    tvShowDetails: combineReducers({
        details: tvShowDetailsReducer,
        episodes: tvShowEpisodesReducer,
    }),
    tvShowEpisodeDetail: tvShowEpisodeDetailReducer,
});