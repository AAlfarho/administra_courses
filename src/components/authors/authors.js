'use strict';

import React from 'react';
import {Link} from 'react-router';
import toastr from 'toastr';
import AuthorAPI from '../../api/authorAPI';
import AuthorStore from '../../stores/authorStore';
import AuthorActions from '../../actions/authorActions';
import AuthorList from './authorList';

export default class Authors extends React.Component {
    constructor(props){
        super(props);
        this.state = {authors: AuthorStore.getAllAuthors()};
    }
    
    componentWillMount = () => {
        AuthorStore.addChangeListener(this._onChange);
    }
    
    componentWillUnmount = () => {
        AuthorStore.removeChangeListener(this._onChange);
    }
    
    _onChange = () => {
        this.setState({authors: AuthorStore.getAllAuthors()});
    }
    
    _onDelete = (authorId) => {
        AuthorActions.deleteAuthor(authorId);
        toastr.success('Author Deleted!');
    }
    
    render() {
        return (
            <div>
                <h1>Authors</h1>
                <Link to='author_mgmt'className="btn btn-primary">Add Author</Link>
                <AuthorList 
                authors={this.state.authors} 
                onDelete={this._onDelete} 
                />
            </div>
            );
    }
}