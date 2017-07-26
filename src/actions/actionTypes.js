'use strict';

import keyMirror from 'react/lib/keyMirror';

let actionTypes = keyMirror({
    INITIALIZE: null,
    CREATE_AUTHOR: null,
    UPDATE_AUTHOR: null,
    DELETE_AUTHOR: null
});

export default actionTypes;