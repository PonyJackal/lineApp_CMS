import { takeLatest } from 'redux-saga/effects';
import {
    GET_REQUEST,
    CREATE_REQUEST,
    UPDATE_REQUEST,
    REMOVE_REQUEST,
    getActionType,
    createActionType,
    updateActionType,
    removeActionType,
} from './constants';
import createRequestSaga from './../../lib/createRequestSaga';
import {
    getFaqsAPI,
    createFaqAPI,
    updateFaqAPI,
    removeFaqAPI
} from './../../api'

const getSaga = createRequestSaga(getActionType, getFaqsAPI);
const createSaga = createRequestSaga(createActionType, createFaqAPI);
const updateSaga = createRequestSaga(updateActionType, updateFaqAPI);
const removeSaga = createRequestSaga(removeActionType, removeFaqAPI);

export default function* customerSaga() {
    yield takeLatest(GET_REQUEST, getSaga);
    yield takeLatest(CREATE_REQUEST, createSaga);
    yield takeLatest(UPDATE_REQUEST, updateSaga);
    yield takeLatest(REMOVE_REQUEST, removeSaga);
}
