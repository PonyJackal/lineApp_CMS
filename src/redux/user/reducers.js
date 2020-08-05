import { handleActions } from 'redux-actions';
import {
    GET_SUCCESS,
    GET_FAILED,
} from './constants';

const InitialState = {
    isGet: false,
    users: []
}

const user = handleActions(
    {
        [GET_SUCCESS]: (state, { payload: data }) => ({
            ...state,
            users: data,
            isGet: true
        }),
        [GET_FAILED]: (state) => ({
            ...state,
            users: null,
            isGet: false,
        }),
    },
    InitialState
);

export default user;