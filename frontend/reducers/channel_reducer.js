

const channelReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        default:
            return state;
    }
}

export default channelReducer;