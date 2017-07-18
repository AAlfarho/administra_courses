'use strict';

import React from 'react';
import AuthorAPI from '../../api/authorAPI';
import AuthorList from './authorList';

export default class Authors extends React.Component {
    constructor(props){
        super(props);
        this.state = {authors: []};
    }

    componentDidMount() {
        this.setState({
            authors: AuthorAPI.getAllAuthors()
        });  
    }
    
    render() {
        return (
            <div>
                <h1>Authors</h1>
                <AuthorList authors={this.state.authors} />
            </div>
            );
    }
}