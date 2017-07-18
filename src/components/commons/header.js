'use strict';
import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default">
              <div className="container-fluid">
                  <a href="/" className="navbar-brand">
                    <img style={{height: '250%', marginTop: '-15%'}} src="https://www.pluralsight.com/content/dam/pluralsight/newsroom/brand-assets/logos/pluralsight-logo-vrt-line-2@2x.png" />
                  </a>
                  <ul className="nav navbar-nav">
                    <li><a href="/#home" >Home</a></li>
                    <li><a href="/#about" data-value='tab'>About</a></li>
                    <li><a href="/#authors" data-value='tab'>Authors</a></li>
                  </ul>
              </div>
            </nav>
            );
    }
}