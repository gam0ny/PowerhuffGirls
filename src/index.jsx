import React from 'react';
import ReactDOM from 'react-dom';
import {compose, createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import {Redirect, Route, Switch} from 'react-router';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history'

import './styles/index.scss';
import reportWebVitals from './reportWebVitals';
import { createRootReducer } from './rootReducer';
import TvShowDetailsPage from './components/TvShowDetailsPage';
import TvShowEpisodeDetailPage from './components/TvShowEpisodeDetailPage';
import Loading from './__shared/Loading/Loading';

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
    const store = createStore(
        createRootReducer(history), // root reducer with router state
        preloadedState,
        compose(
            applyMiddleware(
                routerMiddleware(history), // for dispatching history actions
                thunk,
            ),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        ),
    )

    return store;
}

const store = configureStore();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Loading />
                <Switch>
                    <Route exact path={'/episode/'}>
                        <Redirect to={'/'} />
                    </Route>
                    <Route path={'/episode/:id'} component={TvShowEpisodeDetailPage}/>
                    <Route exact path={'/'} component={TvShowDetailsPage}/>
                </Switch>
            </ConnectedRouter >
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
