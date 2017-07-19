'use strict';

import React from 'react';
import {Link} from 'react-router';

export default class NotFound404 extends React.Component {
    render() {
        return (
            <div>
                <h1>Page not found!</h1>
                <p>Nothing to see here...</p>
                <p><Link to="app">Back home sir</Link></p>
            </div>
            );
    }
}