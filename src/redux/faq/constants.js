import { createRequestActionTypes } from './../../lib/createRequestSaga';

export const getActionType = 'FAQ_GET';
export const [GET_REQUEST, GET_SUCCESS, GET_FAILED] = createRequestActionTypes(
    getActionType
);

export const createActionType = 'FAQ_CREATE';
export const [CREATE_REQUEST, CREATE_SUCCESS, CREATE_FAILED] = createRequestActionTypes(
    createActionType
);

export const updateActionType = 'FAQ_UPDATE';
export const [UPDATE_REQUEST, UPDATE_SUCCESS, UPDATE_FAILED] = createRequestActionTypes(
    updateActionType
);

export const removeActionType = 'FAQ_REMOVE';
export const [REMOVE_REQUEST, REMOVE_SUCCESS, REMOVE_FAILED] = createRequestActionTypes(
    removeActionType
);
