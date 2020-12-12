import { combineReducers } from "redux";
import { routerReducer } from 'react-router-redux';

import { tvShowDetailsReducer } from "./TvShowDetails/tvShowDetailsReducer";
import { tvShowEpisodeDetailReducer } from "./TvShowEpisodeDetail/tvShowEpisodeReducer";

export const rootReducer = combineReducers({
    routing: routerReducer,
    tvShowDetails: tvShowDetailsReducer,
    tvShowEpisodeDetail: tvShowEpisodeDetailReducer,
});