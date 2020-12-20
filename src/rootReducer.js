import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router';

import { tvShowDetailsReducer } from "./components/TvShowDetailsPage/reducers/tvShowDetailsReducer";
import { tvShowEpisodesReducer } from './components/TvShowDetailsPage/reducers/tvShowEpisodesReducer';
import { tvShowEpisodeDetailReducer } from "./components/TvShowEpisodeDetailPage/reducers/tvShowEpisodeDetailReducer";
import { loadingReducer } from './components/__shared/Loading/loadingReducer';

export const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    loading: loadingReducer,
    tvShowDetails: combineReducers({
        details: tvShowDetailsReducer,
        episodes: tvShowEpisodesReducer,
    }),
    tvShowEpisodeDetail: tvShowEpisodeDetailReducer,
},
);
