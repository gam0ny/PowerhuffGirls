export function runAction (actions, state, action) {
    const reducer = actions[action.type];

    if(reducer){
        return reducer(state, action);
    }

    return state;
}

export function printError(error, methodName) {
    console.log(`Error in ${methodName}: `, error);
}
