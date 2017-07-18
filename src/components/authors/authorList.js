'use strict';

import React from 'react';

export default class AuthorList extends React.Component {
    
    static propTypes = {
        authors: React.PropTypes.array.isRequired
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
                <table className='table'>
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                    </thead>
                    <tbody>
                        {this.props.authors.map(this.createAuthorRow, this)}
                    </tbody>
                </table>
            </div>
            );
    }
}