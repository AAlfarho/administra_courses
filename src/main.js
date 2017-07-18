import $ from 'jquery';
import jQuery from 'jquery';

import React from 'react';
import Home from './components/home';
import About from './components/about/about';
import Header from './components/commons/header';
import Authors from './components/authors/authors';


(function(window) {
    class App extends React.Component{
        render() {
            var Child; 
            switch (this.props.route) {
                case 'about': Child = About; break;
                case 'authors': Child = Authors; break;
                default: Child = Home;
            }
            return (
                <div>
                    <Header />
                    <Child />
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
    
    $(window).bind('hashchange', render).trigger('hashchange');
    //window.addEventListener('haschange', render, false);
    //render();
})(window);