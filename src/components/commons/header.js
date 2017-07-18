'use strict';
import React from 'react';
import {Link} from 'react-router';

export default class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default">
              <div className="container-fluid">
                  <Link to="app" className="navbar-brand">
                    <img style={{height: '250%', marginTop: '-15%'}} src="https://www.pluralsight.com/content/dam/pluralsight/newsroom/brand-assets/logos/pluralsight-logo-vrt-line-2@2x.png" />
                  </Link>
                  <ul className="nav navbar-nav">
                    <li><Link to="app" >Home</Link></li>
                    <li><Link to="authors">Authors</Link></li>
                    <li><Link to="about">About</Link></li>
                  </ul>
              </div>
            </nav>
            );
    }
}