'use strict';

import Dispatcher from '../dispatcher/appDispatcher';
import AuthorAPI from '../api/authorAPI';
import ActionTypes from './actionTypes';

let AuthorActions = {
    createAuthor: (author) => {
        let newAuthor = AuthorAPI.saveAuthor(author);
        
        Dispatcher.dispatch({
            actionType: ActionTypes.CREATE_AUTHOR,
            author: newAuthor
        });
    }, 
    updatedAuthor: (author) => {
        let updatedAuthor = AuthorAPI.saveAuthor(author);
        
        Dispatcher.dispatch({
            actionType: ActionTypes.UPDATE_AUTHOR,
            author: updatedAuthor
        });
    },
    
    deleteAuthor: (authorId) => {
        AuthorAPI.deleteAuthor(authorId);
        
        Dispatcher.dispatch({
            actionType: ActionTypes.DELETE_AUTHOR,
            id: authorId
        });
    }
};

export default AuthorActions;