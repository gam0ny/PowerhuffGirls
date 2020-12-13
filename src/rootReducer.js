import { combineReducers } from "redux";
import { routerReducer } from 'react-router-redux';

import { tvShowDetailsReducer } from "./components/TvShowDetailsPage/tvShowDetailsReducer";
import { tvShowEpisodesReducer } from './components/TvShowDetailsPage/tvShowEpisodesReducer';
import { tvShowEpisodeDetailReducer } from "./components/TvShowEpisodeDetailPage/tvShowEpisodeReducer";
import { loadingReducer } from './__shared/Loading/loadingReducer';

export const rootReducer = combineReducers({
    routing: routerReducer,
    loading: loadingReducer,
    tvShowDetails: combineReducers({
        details: tvShowDetailsReducer,
        episodes: tvShowEpisodesReducer,
    }),
    tvShowEpisodeDetail: tvShowEpisodeDetailReducer,
});