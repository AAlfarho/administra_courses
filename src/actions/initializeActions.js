'use strict';

import Dispatcher from '../dispatcher/appDispatcher';
import AuthorAPI from '../api/authorAPI';
import ActionTypes from './actionTypes';

let InitializeActions = {
    initApp: function (){
        Dispatcher.dispatch({
            actionType: ActionTypes.INITIALIZE,
            initialData: {
                authors: AuthorAPI.getAllAuthors()
            }
        });
    }
};

export default InitializeActions;