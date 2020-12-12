import { runAction } from "../../reducerHelper";
import { TV_SHOW_DETAILS__FETCH } from './tvShowDetailsActionTypes';

const initialState = {
    title: 'The Powerpuff Girls',
    coverImageSrc: 'http://static.tvmaze.com/uploads/images/medium_portrait/60/151357.jpg',
    description: '<p>The city of Townsville may be a beautiful, bustling metropolis, but don\'t be fooled! There\'s evil afoot! And only three things can keep the bad guys at bay: Blossom, Bubbles and Buttercup, three super-powered little girls, known to their fans (and villains everywhere) as <b>The Powerpuff Girls</b>. Juggling school, bedtimes, and beating up giant monsters may be daunting, but together the Powerpuff Girls are up to the task. Battling a who\'s who of evil, they show what it really means to \"fight like a girl.\"</p>',
};

const actions = {};

actions[ TV_SHOW_DETAILS__FETCH ] = (state) => {
    return state;
}

export function tvShowDetailsReducer(state = initialState, action){
    return runAction(actions, state, action);
}