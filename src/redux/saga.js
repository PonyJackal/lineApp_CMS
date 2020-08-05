import { all } from 'redux-saga/effects';
import authSaga from './auth/saga';
import faqSaga from './faq/saga';
import userSaga from './user/saga';
import dashboardSaga from './dashboard/saga';

export default function* rootSaga() {
    yield all([authSaga(), faqSaga(), userSaga(), dashboardSaga()]);
}