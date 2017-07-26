'use strict';

import React from 'react';
import {Link} from 'react-router';

export default class AuthorList extends React.Component {
    
    static propTypes = {
        authors: React.PropTypes.array.isRequired,
        onDelete: React.PropTypes.func.isRequired
    }
    deleteAuthor = (authorId) => {
        this.props.onDelete(authorId);
    }
    
    /*reason why we use a anon func  on the delete, is bc otherwise the deleteAuthor func 
    is executed and the resulting value (undefined) is set to the
    onClic, https://stackoverflow.com/questions/37387351/reactjs-warning-setstate-cannot-update-during-an-existing-state-transiti */
    createAuthorRow(author) {
        return (
            <tr key={author.id}>
                <td><Link to='author_edit' params={{id: author.id}}>{author.id}</Link></td>
                <td>{author.firstName} {author.lastName}</td>
                <td><button type="button" onClick={ () => this.deleteAuthor(author.id)} className="btn btn-danger">Delete</button></td>
            </tr>
            );
    }
    render() {
        return (
            <div>
                <table className='table'>
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        {this.props.authors.map(this.createAuthorRow, this)}
                    </tbody>
                </table>
            </div>
            );
    }
}