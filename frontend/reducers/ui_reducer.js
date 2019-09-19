import {combineReducers} from 'redux';
import modalReducer from './modal_reducer';
import errorReducer from './error_reducer';
import widgetReducer from './widget_reducer';

const uiReducer = combineReducers({
    modal: modalReducer,
    errors: errorReducer,
    widget: widgetReducer
})

export default uiReducer;