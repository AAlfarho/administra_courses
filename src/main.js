'use strict';
// $ = jQuery = require('jquery');

import React from 'react';
import Home from './components/home';
import About from './components/about/about';

class App extends React.Component{
    render() {
        var child;
        if (this.props.route === 'about') {
                    return (
            <div>
                <About />
            </div>
            );
        }
        return (
            <div>
                <Home />
            </div>
            );
    }
}

function render() {
   let route = window.location.hash.substr(1);
   React.render(<App route={route}/>, 
    document.getElementById('app')
    );
}

window.addEventListener('haschange', render());
render();
