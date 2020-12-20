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

        const stateBeforeAction = initialState;

        expect(tvShowDetailsReducer(stateBeforeAction, action)).toEqual({
            ...initialState,
            ...action.payload
        });
    });

    it(`${TV_SHOW__DETAILS__UPDATE} test, that object is not mutated`, () => {

        const stateBeforeAction = initialState;
        const result = tvShowDetailsReducer(stateBeforeAction, action);

        expect(result === action.payload).toBeFalsy();
    })
})
