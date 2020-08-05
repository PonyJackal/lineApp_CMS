import { handleActions } from 'redux-actions';
import { SIGNIN_SUCCESS, SIGNIN_FAILED, SIGNOUT } from './constants';

const InitialState = {
    admin: null,
    token: null,
}

const auth = handleActions(
    {
        [SIGNIN_SUCCESS]: (state, { payload: data }) => ({
            ...state,
            token: data.access_token,
            admin: data.admin
        }),
        [SIGNIN_FAILED]: (state) => ({
            ...state,
            token: null,
        }),
        [SIGNOUT]: (state) => ({
            ...state,
            token: null,
        })
    },
    InitialState
);

export default auth;