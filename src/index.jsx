import React from 'react';
import ReactDOM from 'react-dom';
import {compose, createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route} from 'react-router';
import {createBrowserHistory} from 'history';
import {syncHistoryWithStore} from 'react-router-redux';
import thunk from 'redux-thunk';

import './styles/index.scss';
import reportWebVitals from './reportWebVitals';
import {rootReducer} from './rootReducer';
import TvShowDetailsPage from './components/TvShowDetailsPage';
import TvShowEpisodeDetailPage from './components/TvShowEpisodeDetailPage';
import Loading from './__shared/Loading/Loading';

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
);

const reduxHistory = syncHistoryWithStore(createBrowserHistory(), store);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Loading />
            <Router history={reduxHistory}>
                <Route path={'/'} component={TvShowDetailsPage}/>
                <Route path={'/episode'} component={TvShowEpisodeDetailPage}/>
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
