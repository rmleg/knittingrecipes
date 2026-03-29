import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import HatPattern from './HatComponents/HatGenerator';
import SockGenerator from './SockComponents/SockGenerator';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import * as serviceWorker from './serviceWorker';

const root = createRoot(document.getElementById('root'));
root.render(
    <HelmetProvider>
        <Router>
            <Route exact path='/'>
                <App />
            </Route>
            <Route path="/hat">
                <HatPattern />
            </Route>
            <Route path="/socks">
                <SockGenerator />
            </Route>
        </Router>
    </HelmetProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
