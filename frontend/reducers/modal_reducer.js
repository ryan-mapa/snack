import {
    LOGIN_MODAL,
    SIGNUP_MODAL,
    CLOSE_MODAL
} from '../actions/ui_actions';
import { OPENMODAL } from '../actions/modal_actions';


const modalReducer = (state = "", action) => {
    Object.freeze(state);

    switch (action.type) {
        case OPENMODAL:
            return action.modalType;
        case SIGNUP_MODAL:
            return "signup";
        case LOGIN_MODAL:
            return "login";
        case CLOSE_MODAL:
            return "";
        default:
            return state;
    }
}

export default modalReducer;