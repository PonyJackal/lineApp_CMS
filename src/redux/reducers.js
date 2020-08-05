import { combineReducers } from 'redux';
import auth from './auth/reducers';
import faq from './faq/reducers';
import customer from './customer/reducers';
import broadcast from './broadcast/reducers';
import dashboard from './dashboard/reducers';
import chat from './chat/reducers';
import message from './message/reducers';
import loading from './loading/reducers'


const rootReducer = combineReducers({
    auth,
    faq,
    customer,
    broadcast,
    dashboard,
    chat,
    message,
    loading,
});

export default rootReducer;
