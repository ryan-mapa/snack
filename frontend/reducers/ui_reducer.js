import {combineReducers} from 'redux';
import modalReducer from './modal_reducer';
import errorReducer from './error_reducer';

const uiReducer = combineReducers({
    modal: modalReducer,
    errors: errorReducer
})

export default uiReducer;