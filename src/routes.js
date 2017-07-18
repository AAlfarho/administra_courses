'use strict';

import React from 'react';
import {Route, DefaultRoute} from 'react-router';

import App from './components/app';
import Home from './components/home';
import Authors from './components/authors/authors';
import About from './components/about/about';

let routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={Home} />
    <Route name="home" handler={Home} />
    <Route name="authors" handler={Authors} />
    <Route name="about" handler={About} />
  </Route>
);

export default routes;