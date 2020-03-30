import {combineReducers} from 'redux';
import modalReducer from './modal_reducer';
import errorReducer from './error_reducer';
import widgetReducer from './widget_reducer';
import modalDataReducer from './modal_data_reducer';

const uiReducer = combineReducers({
    modal: modalReducer,
    modalData: modalDataReducer,
    errors: errorReducer,
    widget: widgetReducer
})

export default uiReducer;