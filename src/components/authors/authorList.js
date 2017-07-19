'use strict';

import React from 'react';
import {Link} from 'react-router';

export default class AuthorList extends React.Component {
    
    static propTypes = {
        authors: React.PropTypes.array.isRequired
    }
    createAuthorRow(author) {
        return (
            <tr key={author.id}>
                <td><Link to='author_edit' params={{id: author.id}}>{author.id}</Link></td>
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