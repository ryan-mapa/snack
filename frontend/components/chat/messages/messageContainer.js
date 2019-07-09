import React from 'react';
import {connect} from 'react-redux';

const Message = ({author, message}) => {
    return (
        <div>
            <span>{author}:</span> {message.body}
        </div>
    )
}

const msp = (state, {message}) => ({
    author: state.entities.users[message.authorId].username
})

const mdp = dispatch => ({

})

export default connect(msp, mdp)(Message);