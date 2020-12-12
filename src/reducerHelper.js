export function runAction (actions, state, action) {
    const reducer = actions[action.type];

    if(reducer){
        return reducer();
    }

    return state;
}