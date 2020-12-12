import { runAction } from "../../reducerHelper";

const initialState = {

};

const actions = {};

export function tvShowDetailsReducer(state = initialState, action){
    return runAction(actions, state, action);
}