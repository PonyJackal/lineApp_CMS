import { combineReducers } from 'redux';
import auth from './auth/reducers';
import faq from './faq/reducers';
import user from './user/reducers';
import dashboard from './dashboard/reducers';
import loading from './loading/reducers'


const rootReducer = combineReducers({
    auth,
    faq,
    user,
    dashboard,
    loading,
});

export default rootReducer;
