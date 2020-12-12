import { combineReducers } from "redux";
import { routerReducer } from 'react-router-redux';

import { tvShowDetailsReducer } from "./components/TvShowDetailsPage/tvShowDetailsReducer";
import { tvShowEpisodeDetailReducer } from "./components/TvShowEpisodeDetailPage/tvShowEpisodeReducer";

export const rootReducer = combineReducers({
    routing: routerReducer,
    tvShowDetails: tvShowDetailsReducer,
    tvShowEpisodeDetail: tvShowEpisodeDetailReducer,
});