import { combineReducers } from "redux";
import { routerReducer } from 'react-router-redux';

import { tvShowDetailsReducer } from "./components/TvShowDetails/tvShowDetailsReducer";
import { tvShowEpisodeDetailReducer } from "./components/TvShowEpisodeDetail/tvShowEpisodeReducer";

export const rootReducer = combineReducers({
    routing: routerReducer,
    tvShowDetails: tvShowDetailsReducer,
    tvShowEpisodeDetail: tvShowEpisodeDetailReducer,
});