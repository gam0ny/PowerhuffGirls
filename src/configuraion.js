import { createBrowserHistory } from "history";
import thunk from "redux-thunk";
import { applyMiddleware, compose, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";

import { createRootReducer } from "./rootReducer";

export const history = createBrowserHistory();

const configureStore = (preloadedState) => {
  return createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        thunk,
      ),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
  );
};

export const store = configureStore();
