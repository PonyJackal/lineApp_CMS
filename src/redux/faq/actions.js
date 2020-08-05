import { createAction } from 'redux-actions';
import {
    GET_REQUEST,
    GET_SUCCESS,
    GET_FAILED,
    CREATE_REQUEST,
    CREATE_SUCCESS,
    CREATE_FAILED,
    UPDATE_REQUEST,
    UPDATE_SUCCESS,
    UPDATE_FAILED,
    REMOVE_REQUEST,
    REMOVE_SUCCESS,
    REMOVE_FAILED,
} from './constants';

export const getRequest = createAction(GET_REQUEST);
export const getSuccess = createAction(GET_SUCCESS);
export const getFailed = createAction(GET_FAILED);

export const createRequest = createAction(CREATE_REQUEST, faq => faq);
export const createSuccess = createAction(CREATE_SUCCESS);
export const createFailed = createAction(CREATE_FAILED);

export const updateRequest = createAction(UPDATE_REQUEST, ({ id, faq }) => ({ id, faq }));
export const updateSuccess = createAction(UPDATE_SUCCESS);
export const updateFailed = createAction(UPDATE_FAILED);

export const removeRequest = createAction(REMOVE_REQUEST, id => id);
export const removeSuccess = createAction(REMOVE_SUCCESS);
export const removeFailed = createAction(REMOVE_FAILED);

