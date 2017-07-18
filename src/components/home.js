'use strict';

//var React = require('react');
import React from 'react';
import {Link} from 'react-router';

export default class Home extends React.Component {
     render() {
         return (
           <div className='jumbotron'>
                <div className='container'>
                    <h1>Pluralsight</h1>
                    <p>Dummy website for course and authors mgmt</p>
                    <Link to='about' className='btn btn-primary btn-lg'>Learn more</Link>
                </div>
            </div>
             );
     }
}