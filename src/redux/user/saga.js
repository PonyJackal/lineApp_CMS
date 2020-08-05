import { takeLatest } from 'redux-saga/effects';
import {
    GET_REQUEST,
    getActionType,
} from './constants';
import createRequestSaga from './../../lib/createRequestSaga';
import {
    getUsersAPI,
} from './../../api'

const getSaga = createRequestSaga(getActionType, getUsersAPI);

export default function* customerSaga() {
    yield takeLatest(GET_REQUEST, getSaga);
}
