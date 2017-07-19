'use strict';

import React from 'react';
import {Route, DefaultRoute, NotFoundRoute, Redirect} from 'react-router';

import App from './components/app';
import Home from './components/home';
import Authors from './components/authors/authors';
import About from './components/about/about';
import NotFound404 from './components/notFound404';

let routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={Home} />
    <Route name="home" handler={Home} />
    <Route name="authors" handler={Authors} />
    <Route name="about" handler={About} />
    <NotFoundRoute handler={NotFound404} />
    <Redirect from='about-us' to='about' />
    <Redirect from='about/*' to='about' />
    <Redirect from='autors' to='authors' />
  </Route>
);

export default routes;