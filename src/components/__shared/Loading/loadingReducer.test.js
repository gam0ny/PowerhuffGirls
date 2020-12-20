import { TV_SHOW__DETAILS__FETCH } from "../../TvShowDetailsPage/reducers/actionTypes";
import { loadingReducer, initialState } from "./loadingReducer";

describe('Loading Reducer', () => {
    it(`{${TV_SHOW__DETAILS__FETCH} test`, () => {

        const action = {
            type: TV_SHOW__DETAILS__FETCH
        }

        expect(loadingReducer(initialState, action))
          .toEqual({
            ...initialState,
            count: 1,
          });
    });

    //TODO: write list of tests
})
