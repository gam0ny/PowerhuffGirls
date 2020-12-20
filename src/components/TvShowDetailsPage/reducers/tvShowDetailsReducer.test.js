import { TV_SHOW__DETAILS__UPDATE } from "./actionTypes";
import { tvShowDetailsReducer, initialState } from "./tvShowDetailsReducer";

describe('TV Show Details Reducer tests', () => {
    const action = {
        type: TV_SHOW__DETAILS__UPDATE,
        payload: {
            testProperty: 'Test Value',
        }
    };

    it(`${TV_SHOW__DETAILS__UPDATE} test, that update is performed`, () => {
        expect(tvShowDetailsReducer(initialState, action)).toEqual({
            ...initialState,
            ...action.payload
        });
    });

    it(`${TV_SHOW__DETAILS__UPDATE} test, that object is not mutated`, () => {
        const result = tvShowDetailsReducer(initialState, action);
        expect(result === action.payload).toBeFalsy();
    })
})
