import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { fetchTvShowEpisodeDetails } from "./actions";
import {
  TV_SHOW__EPISODE__FETCH, TV_SHOW__EPISODE__FETCH_COMPLETED,
  TV_SHOW__EPISODE__UPDATE
} from "./actionTypes";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Test async actions of tvShowEpisodeDetailReducer', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });

    const data = Array(5).fill(5);
    const episodeId = 1;

    it('[fetchTvShowEpisodeDetails] action dispatches proper actions [on Success]', () =>{

        fetch.mockResponse(JSON.stringify(data));

        const expectedActions = [
          { type: TV_SHOW__EPISODE__FETCH, payload: episodeId },
          { type: TV_SHOW__EPISODE__UPDATE, payload: data },
          { type: TV_SHOW__EPISODE__FETCH_COMPLETED }
        ];

        const store = mockStore({});

        return store.dispatch(fetchTvShowEpisodeDetails(episodeId))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });

    });
});
