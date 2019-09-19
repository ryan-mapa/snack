import {
    OPEN_CHAT_WIDGET,
    CLOSE_CHAT_WIDGET
} from '../actions/ui_actions';

const defaultState = {
    open: false
};

const widgetReducer = (state = defaultState, action) => {
    Object.freeze(state);
    let change;

    switch (action.type) {
        case OPEN_CHAT_WIDGET:
            change = { open: true };         
            return Object.assign({}, state, change);
        case CLOSE_CHAT_WIDGET:
            change = { open: false };
            return Object.assign({}, state, change);
        default:
            return state;
    }
}

export default widgetReducer;