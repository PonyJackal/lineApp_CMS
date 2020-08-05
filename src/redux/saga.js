import { all } from 'redux-saga/effects';
import authSaga from './auth/saga';
import faqSaga from './faq/saga';
import customerSaga from './customer/saga';
import broadcastSaga from './broadcast/saga';
import dashboardSaga from './dashboard/saga';
import chatSaga from './chat/saga';
import messageSaga from './message/saga';

export default function* rootSaga() {
    yield all([authSaga(), faqSaga(), customerSaga(), broadcastSaga(), dashboardSaga(), chatSaga(), messageSaga()]);
}