import { handleActions } from 'redux-actions';
import {
    GET_SUCCESS,
    GET_FAILED,
    CREATE_SUCCESS,
    CREATE_FAILED,
    UPDATE_SUCCESS,
    UPDATE_FAILED,
    REMOVE_SUCCESS,
    REMOVE_FAILED,
} from './constants';

const InitialState = {
    isGet: false,
    isUpdate: false,
    isCreate: false,
    isRemove: false,
    faqs: []
}

const faq = handleActions(
    {
        [GET_SUCCESS]: (state, { payload: data }) => ({
            ...state,
            faqs: data,
            isGet: true
        }),
        [GET_FAILED]: (state) => ({
            ...state,
            faqs: null,
            isGet: false,
        }),
        [CREATE_SUCCESS]: (state, { payload: data }) => {
            const result = [...state.faqs, data];
            return {
                ...state,
                faqs: result,
                isCreate: true
            };
        },
        [CREATE_FAILED]: (state) => ({
            ...state,
            isCreate: false,
        }),
        [UPDATE_SUCCESS]: (state, { payload: data }) => {
            const result = state.faqs.map(faq => {
                return faq.id === data.faq.id ? data.faq : faq;
            });
            return {
                ...state,
                faqs: result,
                isUpdate: true
            };
        },
        [UPDATE_FAILED]: (state) => ({
            ...state,
            isUpdate: false,
        }),
        [REMOVE_SUCCESS]: (state, { payload: data }) => {
            const result = state.faqs.filter(faq => {
                return faq.id === data.faq.id ? false : true;
            });
            return {
                ...state,
                faqs: result,
                isRemove: true
            };
        },
        [REMOVE_FAILED]: (state) => ({
            ...state,
            isRemove: false,
        }),
    },
    InitialState
);

export default faq;