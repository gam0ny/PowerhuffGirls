import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Redirect, Route, Switch } from "react-router";
import { ConnectedRouter } from "connected-react-router";

import { history, store } from "./configuraion";
import Loading from "./__shared/Loading/Loading";
import TvShowDetailsPage from "./components/TvShowDetailsPage";
import TvShowEpisodeDetailPage from "./components/TvShowEpisodeDetailPage";
import reportWebVitals from "./reportWebVitals";

import "./styles/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Loading/>
        <Switch>
          <Route exact path={"/episode/"}>
            <Redirect to={"/"}/>
          </Route>
          <Route path={"/episode/:id"} component={TvShowEpisodeDetailPage}/>
          <Route exact path={"/"} component={TvShowDetailsPage}/>
        </Switch>
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
