import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import HatPattern from './HatPattern';
import SockPattern from './SockPattern';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <Route exact path='/'>
            <App />
        </Route>
        <Route path="/hat">
            <HatPattern />
        </Route>
        <Route path="/socks">
            <SockPattern />
        </Route>
    </Router>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
