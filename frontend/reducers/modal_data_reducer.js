import { UPDATE_MODAL_DATA } from '../actions/modal_actions';

const modalDataReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case UPDATE_MODAL_DATA:
            return action.data;
        default:
            return state;
    }
}

export default modalDataReducer;