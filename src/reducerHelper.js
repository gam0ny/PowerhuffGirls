export function runAction (actions, state, action) {
    const reducer = actions[action.type];

    if(reducer){
        return reducer(state, action);
    }

    return state;
}