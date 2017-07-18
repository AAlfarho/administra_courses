'use strict';

import React from 'react';
import AuthorAPI from '../../api/authorAPI';

export default class Authors extends React.Component {
    constructor(props){
        super(props);
        this.state = {authors: []};
    }

    componentWillMount() {
        this.setState({
            authors: AuthorAPI.getAllAuthors()
        });
    }
    
    createAuthorRow(author) {
        return (
            <tr key={author.id}>
                <td><a href={'/#authors/' + author.id}>{author.id}</a></td>
                <td>{author.firstName} {author.lastName}</td>
            </tr>
            );
    }
    render() {
        return (
            <div>
                <h1>Authors</h1>
                <table className='table'>
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                    </thead>
                    <tbody>
                        {this.state.authors.map(this.createAuthorRow, this)}
                    </tbody>
                </table>
            </div>
            );
    }
}