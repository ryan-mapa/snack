import { connect } from 'react-redux';
import Chatroom from './chatroom';
import { getRoomMessages } from '../../actions/message_actions';

const msp = (state) => ({
    messages: Object.values(state.entities.messages)
})

const mdp = (dispatch) => ({
    getMessages: channelId => dispatch(getRoomMessages(channelId))
})

export default connect(msp, mdp)(Chatroom);