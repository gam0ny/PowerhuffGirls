import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux'

import './index.css';
import reportWebVitals from './reportWebVitals';
import { rootReducer } from './rootReducer';
import TvShowDetails from './TvShowDetails';
import TvShowEpisodeDetail from './TvShowEpisodeDetail';

const store = createStore(
    rootReducer,
    compose(
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ),
);

const reduxHistory = syncHistoryWithStore(createBrowserHistory(), store);

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <Router history={reduxHistory}>
            <Route path={"/"} component={TvShowDetails} />
            <Route path={"/episode"} component={TvShowEpisodeDetail}/>
        </Router>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
