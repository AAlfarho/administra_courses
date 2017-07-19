'use strict';

import React from 'react';
import Input from '../commons/textInput';

export default class AuthorForm extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <Input
                        name="firstName"
                        label="First Name"
                        value={this.props.author.firstName}
                        onChange={this.props.onChange}
                        error={this.props.errors.firstName} 
                        />
    
                    <Input
                        name="lastName"
                        label="Last Name"
                        value={this.props.author.lastName}
                        onChange={this.props.onChange}
                        error={this.props.errors.lastName} 
                        />
    
                    <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
                </form>
            </div>
            );
    }
}