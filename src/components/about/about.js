'use strict';

import React from 'react';

export default class About extends React.Component {
    
    //This is no longer valid on react-router 1.x, instead we use Route on enter.
    // static willTransitionTo(transition, params, query, callback) {
    //     if(!confirm('Read about?')){
    //         transition.abort();
    //     } else {
    //         callback();
    //     }
    // }
    
    //     static willTransitionFrom(transition, component) {
    //     if(!confirm('Dont leave!?')){
    //         transition.abort();
    //     }
    // }
    render() {
        return (
            <div>
                <h1>About</h1>
                <p>
                This app uses the following tech:
                <ul>
                    <li>React</li>
                    <li>React Router</li>
                    <li>Flux</li>
                    <li>Node</li>
                    <li>Gulp</li>
                    <li>Browserify</li>
                    <li>Bootstrap</li>
                </ul>
                </p>
            </div>
        );
    }
}