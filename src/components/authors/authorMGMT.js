'use strict';

import React from 'react';
import AuthorForm from './authorForm';
import AuthorAPI from '../../api/authorAPI';

export default class AuthorMGMT extends React.Component {
    state = {
        author: { id: '', firstName: '', lastName: '' },
        errors: {},
        dirty: false
    }
    
    setAuthorState = (event) => {
        this.setState({dirty: true});
        let field = event.target.name;
        let value = event.target.value;
        this.state.author[field] = value;
        return this.setState({author: this.state.author});
    }
    
    saveAuthor = (event) => {
        event.preventDefault();
        
        AuthorAPI.saveAuthor(this.state.author);
        
    }
    render() {
        return (
            <div>
                <h1>Author MGMT</h1>
                <AuthorForm 
                    author={this.state.author}
                    onChange={this.setAuthorState}
                    onSave={this.saveAuthor}
                />
            </div>
            );
    }
}