import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import GoodPage from './GoodPage.js';
import BadPage from './BadPage.js';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <div>
      <div role="navigation">
        <Button variant="secondary" href="/">Home</Button>
        <Button variant="secondary" href="/GoodPage">Good Page</Button>
        <Button variant="secondary" href="/BadPage">Bad Page</Button>
      </div>

      <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/GoodPage">
            <GoodPage />
          </Route>
          <Route path="/BadPage">
            <BadPage />
          </Route>
        </Switch>
    </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
