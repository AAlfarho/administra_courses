'use strict';

import React from 'react';

export default class About extends React.Component {
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